fetch('https://www.iprkaro.com/trademark-by-location').then(r=>r.text()).then(t=>{ 
    console.log('head ends at', t.indexOf('</head>')); 
    console.log('title at', t.indexOf('<title>')); 
    console.log('meta desc at', t.indexOf('name="description"')); 
    console.log('body starts at', t.indexOf('<body')); 
    console.log('canonical at', t.indexOf('rel="canonical"')); 
    console.log('total length', t.length);
})
