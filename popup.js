var x;
const getUA = () => {
    let device = "Unknown";
    const ua = {
        "Generic Linux": /Linux/i,
        "Android": /Android/i,
        "BlackBerry": /BlackBerry/i,
        "Bluebird": /EF500/i,
        "Chrome OS": /CrOS/i,
        "Datalogic": /DL-AXIS/i,
        "Honeywell": /CT50/i,
        "iPad": /iPad/i,
        "iPhone": /iPhone/i,
        "iPod": /iPod/i,
        "macOS": /Macintosh/i,
        "Windows": /IEMobile|Windows/i,
        "Zebra": /TC70|TC55/i,
    }
    Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
    return device;
}
    window.onload = function() {
        var ua = navigator.userAgent;
        var isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(ua);
        var isIPadPro = /Macintosh/.test(navigator.userAgent) && 'ontouchend' in document;
        console.log("Is mobile?: " + isMobile);
        console.log("Is iPad Pro?: " + isIPadPro);
        if (isMobile || isIPadPro) {
        setTimeout(loadit,500);
        } else{
            // callwhenback();
            //loadit().fadeIn(10000);
            setTimeout(loadit,500);
		
        }	
    };

    function loadit() {
        callwhenback();
       setTimeout(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
       }, 15);
    }

function  callwhenback() {
jQuery.get('notifications.html', function(data) {
         //alert(data.length);
          // initialize title and body variables
        if (data.length > 3){
        var notifs = data;
        var Titles = "IGNITE CHURCH";
    if (getCookie('vmspopup')) {
		return;
    }
 
    createDialog(notifs , Titles);
   // 1 week	
   // setCookie('vmspopup', 'yes', 1*24*60*60);
   // 1// hour	
    setCookie('vmspopup', 'yes', 24*3600);	
}
});
}
var scrollTop = function() {
    document.scrollingElement.scrollTop;
};
function  callback() {
    jQuery.get('notifications.html', function(data) {
        //alert(data.length);
        // initialize title and body variables
        if (data.length > 3){
            var notifs = data;
            var Titles = "IGNITE CHURCH UPDATES!";
 
            createDialog(notifs , Titles);

        }
    });
}

function  selecttext() {
    var el = document.getElementById('inputText');
    text = el.innerHTML;
    keyword = "Latest updates";
    marked = text.replace(keyword,"<mark>"+keyword+"</mark>");
    el.innerHTML = marked;
}
var createDialog = function(text , title) {
    //create dialog <div> shell
    var dialog =  '<div id="dialog" title="IGNITE CHURCH UPDATES!" style="font-size: 11px;">' + text + '</div>';
    
    // create the dialog <div>
    $('body').append(dialog);
    
    // update the <div>'s title
     //$('#dialog').prop('title' , title);
     $('#dialog').dialog({
	      modal:true,
    open: function(event, ui) {
	  var win = $(window);  
	        $(".ui-widget-overlay").css({
            opacity: 1.0,
            filter: "Alpha(Opacity=100)",
            backgroundColor: "#AAAAAA"
        });
        $('.ui-dialog-titlebar-close')
            .removeClass("ui-dialog-titlebar-close")
            .html('<span style="color: yellow;font-size: small;">Click here to close & view our website!</span>');
	$(this).closest('.ui-dialog').css({'width':'350px'});
        $(this).closest('.ui-dialog').css({'position':'absolute',left: (win.width() - $(this).parent().outerWidth()) / 2,top: 100});
	$(".ui-dialog-title" ).css("float", "none" );
    }
}).prev(".ui-dialog-titlebar").css({'background':'#D55355','color':'white','text-align':'center'});
	
}

function checkCookie() {
    // Get cookie using our custom function
    var notif = getCookie("notification");
    if(notif != "") {
      return true;
    } else {
      setCookie("notification","notif", 2);
      return false;    
    }
}

function closeit(){
	//window.close();
    $('#dialog').dialog('close');
    location.reload();
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(name, value, maxAgeSeconds) {
    var maxAgeSegment = "; max-age=" + maxAgeSeconds;
    document.cookie = encodeURI(name) + "=" + encodeURI(value) + maxAgeSegment;
}
function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function getSize() {
 const element = document.getElementById("top-1");
element.scrollLeft += 50;
element.scrollTop += 10;
}



