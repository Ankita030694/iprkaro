fetch('https://www.iprkaro.com/trademark-by-city').then(r=>r.text()).then(t=>{ 
    console.log('CITY - head ends at', t.indexOf('</head>')); 
    console.log('CITY - title at', t.indexOf('<title>')); 
    console.log('CITY - meta desc at', t.indexOf('name="description"')); 
    console.log('CITY - body starts at', t.indexOf('<body')); 
    console.log('CITY - canonical at', t.indexOf('rel="canonical"')); 
    console.log('CITY - total length', t.length);
})
