#!/usr/bin/env node
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const file=path.resolve(__dirname,'../data/qiinsight/sources.json');
const data=JSON.parse(fs.readFileSync(file,'utf8'));
const ids=new Set(),urls=new Map(),errors=[],counts={};
for(const [i,s] of data.sources.entries()){
 for(const k of ['source_id','publisher','official_url','source_type','license_status','allowed_operations'])if(!s[k])errors.push(i+': missing '+k);
 if(ids.has(s.source_id))errors.push(i+': duplicate source_id '+s.source_id);ids.add(s.source_id);
 try{const u=new URL(s.official_url);if(!['http:','https:'].includes(u.protocol))throw Error('protocol');const key=u.hostname.toLowerCase()+u.pathname.replace(/\/$/,'');if(urls.has(key))errors.push(i+': duplicate URL '+s.official_url);urls.set(key,i)}catch{errors.push(i+': invalid URL')}
 if(s.license_status==='RIGHTS_REVIEW' && s.allowed_operations.some(x=>!['LINK_ONLY','MANUAL_FACT_VERIFICATION'].includes(x)))errors.push(i+': unapproved operations');
 counts[s.source_type]=(counts[s.source_type]||0)+1;
}
console.log(JSON.stringify({total:data.sources.length,by_type:counts,rights_review:data.sources.filter(s=>s.license_status==='RIGHTS_REVIEW').length,errors},null,2));
if(errors.length)process.exitCode=1;
