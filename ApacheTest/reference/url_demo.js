const url = require('url');

const myUrl = new URL('http://mywebsite.com/hell.html?id=100&status=active');

//Serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)

console.log(myUrl.host);

//Hostname (does not get port)
console.log(myUrl.hostname);


//Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.serach);

//Params object
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}:${value}`));
