var geoip = require("geoip-lite");

var ip = "117.4.162.153";
var geo = geoip.lookup(ip);

console.log(geo);
// { range: [ 3479298048, 3479300095 ],
//   country: 'US',
//   region: 'TX',
//   eu: '0',
//   timezone: 'America/Chicago',
//   city: 'San Antonio',
//   ll: [ 29.4969, -98.4032 ],
//   metro: 641,
//   area: 1000 }
