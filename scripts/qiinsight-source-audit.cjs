#!/usr/bin/env node
'use strict';
/* QiInsight source connectivity pilot. Fetches only public home-page headers and
   RSS/Atom discovery links. Never downloads article bodies or bypasses access controls. */
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const sources=JSON.parse(fs.readFileSync(path.join(root,'data/qiinsight/sources.json'),'utf8')).sources;
const limit=Math.max(1,Math.min(sources.length,Number(process.env.QIINSIGHT_LIMIT||sources.length)));
const timeout=Math.max(2000,Math.min(15000,Number(process.env.QIINSIGHT_TIMEOUT_MS||7000)));
const candidates=sources.filter(s=>s.license_status!=='PROHIBITED').slice(0,limit);
const results=[];
console.log('QiInsight audit started:',new Date().toISOString(),'sources:',candidates.length);
async function check(s){
 const started=Date.now();const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),timeout);
 try{
  const res=await fetch(s.official_url,{signal:controller.signal,redirect:'follow',headers:{'User-Agent':'QiInsight-Source-Audit/0.1 (+https://github.com/02zmarketingcontact-del/qiluvi; metadata only)','Accept':'text/html'}});
  const type=res.headers.get('content-type')||'';
  let feeds=[];
  if(res.ok&&type.includes('text/html')){
   const html=(await res.text()).slice(0,250000);
   const tags=html.match(/<link\b[^>]*>/gi)||[];
   for(const tag of tags){
    if(!/rel\s*=\s*["']?alternate/i.test(tag)||!/application\/(rss\+xml|atom\+xml)/i.test(tag))continue;
    const match=tag.match(/href\s*=\s*["']([^"']+)["']/i);
    if(match){try{const u=new URL(match[1],res.url);if(u.protocol==='https:'||u.protocol==='http:')feeds.push(u.href)}catch{}}
   }
  }
  return {source_id:s.source_id,url:s.official_url,http_status:res.status,content_type:type,feed_candidates:[...new Set(feeds)].slice(0,10),elapsed_ms:Date.now()-started,status:res.ok?'REACHABLE':'HTTP_ERROR',rights_status:s.license_status};
 }catch(e){return {source_id:s.source_id,url:s.official_url,status:'FETCH_ERROR',error:String(e.message).slice(0,150),elapsed_ms:Date.now()-started,rights_status:s.license_status}}
 finally{clearTimeout(timer)}
}
(async()=>{
 for(const s of candidates){results.push(await check(s));await new Promise(r=>setTimeout(r,500))}
 const output={generated_at:new Date().toISOString(),checked:results.length,reachable:results.filter(r=>r.status==='REACHABLE').length,feed_candidates:results.reduce((n,r)=>n+(r.feed_candidates||[]).length,0),note:'Connectivity only; not a license, not an article harvest.',results};
 const out=path.join(root,'data/qiinsight/source-audit-latest.json');
 fs.writeFileSync(out,JSON.stringify(output,null,2)+'\n');
 console.log(JSON.stringify({checked:output.checked,reachable:output.reachable,feed_candidates:output.feed_candidates,output:out}));
})().catch(e=>{console.error(e);process.exitCode=1});
