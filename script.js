jQuery(document).ready(function($){
    $('#backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});

function toggle() {
	var ele = document.getElementById("about");
	//var text = document.getElementById("displayText");
	if(ele.style.display == "block") {
    	ele.style.display = "none";
		//text.innerHTML = "show";
  	}
	else {
		ele.style.display = "block";
		//text.innerHTML = "hide";
	}
} 

$(function() {
   $( "#about" ).draggable();
});