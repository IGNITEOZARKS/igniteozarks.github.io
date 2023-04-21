var queryString = window.location.search;
console.log(queryString);
var urlParams = new URLSearchParams(queryString);
var g_message = urlParams.get('message')
console.log(g_message);
