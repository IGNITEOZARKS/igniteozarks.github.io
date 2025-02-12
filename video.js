var queryString = window.location.search;
console.log(queryString);
var urlParams = new URLSearchParams(queryString);
var g_message = urlParams.get('message');
var g_youtube = urlParams.get('youtube');
console.log(g_message);
var g_date = urlParams.get('dates');
console.log(g_date);
var g_title = urlParams.get('title');
console.log(g_title);
document.getElementById("title").innerHTML = g_title + ' ~ ' + g_date;
var html;
if (g_youtube === "yes"){
  html = '<iframe id="ytplayer" type="text/html" width="300" height="168.75" src="https://www.youtube.com/embed/' + g_message + '" frameborder="0" allowfullscreen>';
}
document.getElementById("vid").innerHTML = html;
