const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=__dirname,ctx={window:{}};
for(const name of ['projects.js','case-view.js','sla-case.js','lifecycle-case.js'])vm.runInNewContext(fs.readFileSync(path.join(root,name),'utf8'),ctx);
const projects=ctx.window.PROJECTS,home=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.deepEqual(Array.from(projects.filter(p=>p.featured),p=>p.id),['sla','yoyo','cartwise']);
assert.ok(!home.includes('Accord AI')&&!home.includes('{{'));
for(const forbidden of ['85%','90%','500+','3×','8+ client','40+ member'])assert.ok(!home.includes(forbidden),forbidden);
assert.ok(home.includes('tel:+918660123175'));
assert.ok(home.includes('https://www.linkedin.com/in/gagan-s-hiremath-566746225/'));
assert.ok(home.includes('rel="canonical"')&&home.includes('og:image'));
for(const p of projects){
 const html=fs.readFileSync(path.join(root,p.slug+'.html'),'utf8');
 assert.ok(html.includes('<h1>'+p.name.replace(/&/g,'&amp;')+'</h1>'));
 for(const section of ['overview','problem','discovery','requirements','architecture','evaluation','launch','outcomes','deliverables'])assert.ok(html.includes(`id="${section}"`),p.id+':'+section);
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
 assert.ok(html.includes('canonical')&&html.includes(p.slug+'.html'));
 for(const suffix of ['-brief.md','-backlog.csv','-evaluation.csv','-architecture.svg'])assert.ok(fs.existsSync(path.join(root,p.slug+suffix)));
 const brief=fs.readFileSync(path.join(root,p.slug+'-brief.md'),'utf8');
 assert.ok(brief.includes(p.disclosure));
 assert.ok(!brief.includes('measurement windows and sample sizes'));
 assert.equal(p.steps.length,4);
 for(const metric of p.metrics)assert.ok(metric.length===4&&metric.every(Boolean));
 assert.ok(!p.outcomes,'No uncontextualized promotional outcomes');
 assert.ok(!html.includes('href="#case/'));
 if(p.featured){assert.equal((html.match(/class="lifecycle-stage"/g)||[]).length,16);assert.equal((html.match(/class="case-section lifecycle-phase"/g)||[]).length,5);}
}
const yoyo=projects.find(p=>p.id==='yoyo');assert.ok(yoyo.archNote.includes('not implemented'));assert.ok(yoyo.outcome.includes('158')&&yoyo.outcome.includes('11'));
const slaHtml=fs.readFileSync(path.join(root,'sla-document-intelligence.html'),'utf8');
assert.equal((slaHtml.match(/class="lifecycle-stage"/g)||[]).length,16,'SLA must cover 16 lifecycle stages');
assert.equal((slaHtml.match(/class="case-section lifecycle-phase"/g)||[]).length,5,'SLA must have five phases');
for(const phrase of ['Subsequent capability: conversational RAG','Business Outcome Monitoring','98%; monthly period','not a live operational measurement','Source attribution applies only'])assert.ok(slaHtml.includes(phrase),phrase);
assert.ok(!slaHtml.includes('≥95%')&&!slaHtml.includes('Power BI / RAG'));
assert.ok(fs.readFileSync(path.join(root,'sla-document-intelligence-architecture.svg'),'utf8').includes('Subsequent enhancement'));
for(const name of ['index.html',...projects.map(p=>p.slug+'.html')]){
 const html=fs.readFileSync(path.join(root,name),'utf8');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(new Set(ids).size,ids.length,name+': duplicate ID');
 for(const [,ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(https?:|mailto:|tel:|data:)/.test(ref))continue;
  const [file,hash]=ref.split('#');if(file)assert.ok(fs.existsSync(path.join(root,file)),name+' missing '+file);
  else if(hash)assert.ok(ids.includes(hash),name+' missing anchor '+hash);
 }
}
for(const name of ['app.js','projects.js','case-view.js','sla-case.js','lifecycle-case.js','generate.cjs','verify.cjs'])new vm.Script(fs.readFileSync(path.join(root,name),'utf8'),{filename:name});
assert.ok(fs.readFileSync(path.join(root,'robots.txt'),'utf8').includes('sitemap.xml'));
assert.ok(home.includes('href="#experience"')&&home.includes('id="skills"')&&home.includes('id="contact"'));
assert.ok(home.includes('https://github.com/Gagan-S-Hiremath'));
assert.ok(!home.includes('YOYO Prospecting Agent'));
assert.ok(fs.readFileSync(path.join(root,'Gagan-SS-Resume.pdf')).subarray(0,5).toString()==='%PDF-');
console.log('PASS: 3 featured + 2 supporting studies; static content, unique IDs, local links, metadata, 20 walkthrough states, metric definitions, artifact labels, phone/resume links, and JS syntax.');
