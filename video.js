var queryString = window.location.search;
console.log(queryString);
var urlParams = new URLSearchParams(queryString);
var g_message = urlParams.get('message')
console.log(g_message);
var g_date = urlParams.get('dates')
console.log(g_date);

var html = '<iframe src="https://www.facebook.com/plugins/video.php?height=311&href=https%3A%2F%2Fwww.facebook.com%2Fignitestonecounty%2Fvideos%2F' + g_message +'%2F&show_text=false&width=560&t=0" width="560" height="311" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>';
document.getElementById("vid").innerHTML = html;
