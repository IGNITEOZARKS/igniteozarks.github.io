var queryString = window.location.search;
console.log(queryString);
var urlParams = new URLSearchParams(queryString);
var g_message = urlParams.get('message')
console.log(g_message);
var g_date = urlParams.get('date')
console.log(g_date);

document.getElementById("vid").innerHTML = 'data-href="https://www.facebook.com/ignitestonecounty/videos/' + g_message + '"';
document.getElementById("blockvid").innerHTML = '<blockquote cite="https://www.facebook.com/ignitestonecounty/videos/' + g_message + '">';
document.getElementById("blockfac").innerHTML = '<a href="https://www.facebook.com/ignitestonecounty/videos/' + g_message + '">How to Share With Just Friends</a>';
document.getElementById("blockdate").innerHTML = g_date;
