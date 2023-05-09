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
  html = '<iframe id="ytplayer" type="text/html" width="375" height="210.9375"src="' + g_message + '" frameborder="0" allowfullscreen>';
 )else{
  html = '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fignitestonecounty%2Fvideos%2F' + g_message +'%2F&width=375&show_text=false&appId=965656367790806&height=208" width="375" height="208" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>';

 }
document.getElementById("vid").innerHTML = html;
