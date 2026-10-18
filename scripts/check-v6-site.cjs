#!/usr/bin/env node
'use strict';
// QILUVI V6 static verification. No dependencies, credentials or external calls.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const localePrefix = ['','en/','zh-cn/','zh-tw/'];
const slugs = ['qiinsight','qibridge','qireal','qibuild','qigrow'];
const routes = ['', 'about/', 'solutions/', 'services/', 'insights/', 'portfolio/', 'approach/', 'contact/', ...slugs.map(s => 'services/' + s + '/')];
const issues=[];
let tested=0;
function err(x){issues.push(x);}
function verifyExists(p,src){
  if(!fs.existsSync(p)) err(src + ': missing ' + path.relative(root,p));
}
for(const locale of localePrefix){
  for(const route of routes){
    verifyExists(path.join(root,locale,route,'index.html'), 'localized route');
  }
}
verifyExists(path.join(root,'assets','v6-site.css'), 'shared CSS');
verifyExists(path.join(root,'assets','qiluvi-icon.svg'), 'brand icon');
verifyExists(path.join(root,'qimap','index.html'), 'QiMap redirect');
function scanDir(dir){
  for(const item of fs.readdirSync(dir, {withFileTypes:true})){
    if(item.name==='.git' || item.name==='node_modules')continue;
    const filepath=path.join(dir,item.name);
    if(item.isDirectory())scanDir(filepath);
    else if(item.isFile() && filepath.endsWith('.html')) checkPage(filepath);
  }
}
function checkPage(file){
  const rel=path.relative(root,file).replace(/\\/g,'/');
  const html=fs.readFileSync(file,'utf8');
  tested++;
  if(!/<html\b/i.test(html) || !/<body\b/i.test(html))err(rel+': malformed page shell');
  if(!/<main(\s|>)/i.test(html) && rel!=='qimap/index.html')err(rel+': missing main landmark');
  if(!/<title>[^<]+<\/title>/i.test(html) && rel!=='qimap/index.html')err(rel+': missing title');
  if(/(PLACEHOLDER|lorem ipsum|fake testimonial)/i.test(html))err(rel+': unfinished/fabricated public copy');
  const rootHref=path.dirname(file);
  const links=[...html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)];
  for(const match of links){
    const url=match[1];
    if(/^([a-z][a-z\d+.-]*:|\/\/)/i.test(url))continue;
    if(url[0]==='#'){
      const id=decodeURIComponent(url.slice(1));
      if(id && !html.includes('id="'+id+'"') && !html.includes("id='"+id+"'"))err(rel+': missing in-page anchor '+url);
      continue;
    }
    if(url.startsWith('data:'))continue;
    const clean=url.split('#')[0].split('?')[0];
    if(!clean)continue;
    let resolved=path.resolve(rootHref,decodeURIComponent(clean));
    if(!resolved.startsWith(root + path.sep) && resolved!==root){
      err(rel+': local link escapes project ' + url);
      continue;
    }
    const isDir=clean.endsWith('/') || fs.existsSync(resolved)&&fs.statSync(resolved).isDirectory();
    if(isDir)resolved=path.join(resolved,'index.html');
    verifyExists(resolved,rel+' href/src '+url);
  }
  const normalized=rel==='index.html'?'':rel.slice(0,-10);
  if(rel==='qimap/index.html')return;
  const lang=normalized.startsWith('en/')?'en':normalized.startsWith('zh-cn/')?'zh-CN':normalized.startsWith('zh-tw/')?'zh-TW':'vi';
  if(!html.includes('<html lang="'+lang+'"'))err(rel+': mismatched html lang '+lang);
  // All V6 pages have their own real translated routes.
  if(!html.includes('hreflang="vi"') || !html.includes('hreflang="en"') ||
     !html.includes('hreflang="zh-CN"') || !html.includes('hreflang="zh-TW"'))err(rel+': incomplete language alternates');
  if(!html.includes('canonical'))err(rel+': no canonical');
  if(rel!=='index.html' && !html.includes('assets/v6-site.css'))err(rel+': missing shared stylesheet');
  if(!html.includes('0966 108 018') && !html.includes('tel:+84966108018') &&
    !html.includes('tel:+84966108018'))err(rel+': phone/CTA contact path not evident');
}
scanDir(root);
const total_expected=53; // 4 locales x 13 routes, plus independent QiMap redirect
if(tested!==total_expected)err('Unexpected HTML count '+tested+'; expected '+total_expected);
if(issues.length){
  console.error('QILUVI V6 static QA FAILED ('+issues.length+' findings):');
  for(const issue of issues)console.error(' - '+issue);
  process.exit(1);
}
console.log('QILUVI V6 static QA PASS: '+tested+' HTML files (52 multilingual routes + QiMap redirect), 4 locales, 5 service detail routes, 8 route types, asset/link/anchor checks.');
