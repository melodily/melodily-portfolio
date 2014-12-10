var hasOverlay = false;

$("img").attr("onload", "loadImage()");

function loadImage(){
$(".small-images").fadeIn();
}

$(".category").click(function() {
    var id = $(this).attr("id");
    id = "#" + id + "-thumbnails";
    $(".description-bg:not(" + id +')').slideUp('fast');
    $(id).slideToggle('fast', function() {
        $("#title").resize();
		//showImageAndRecurse(id+":first");
    });
})

$(".small-images").hover(function() {
    $(".imageHover", this).show();
}, function() {
    $(".imageHover", this).hide();
})

/*function showImageAndRecurse(image){
var classes = $(image).attr('class');
classes = "." + classes.replace(/\s/g,".");
    var next = $(image).next(classes).attr('id');
	image.fadeIn(400, showImageAndRecurse(next));

}*/

$(".small-images").click(function(event) {
    $(".description-expand").hide();
    var current = $(this).attr('id');
    current = ".description-expand#" + current + "_description";
    setParametersOfExpand(current);
    var heightOfContainer = $(current).height()*0.9;
    $(".images-container").css("line-height", heightOfContainer + "px");
    // $(".images-container").append('<i class="icon-forward icon-white icon-position"></i>');

    $(current).show();
        hasOverlay = true;
        event.stopPropagation();
        
    console.log(hasOverlay);
});

function setParametersOfExpand(idOfDescription) {
    var current = idOfDescription;
    console.log(current + $(current).css("position"));
    var height = $(window).height();
    var width = $(window).width();
    var top = $(document).scrollTop();
    console.log(width + ", " + $(current).width() + ", "+ width*0.66);
    height *= 0.8;
    width*=0.66;
    console.log(top);
    $(current).css("top", top + "px");
     $(current).css("width", width + "px");
          $("body").css ("overflow", "hidden");
     $(current).css("overflow-y", "scroll");
     var iconTop = top + 0.45*height;
     $(".icon-next-position").css("top", iconTop + "px");
     $(".icon-prev-position").css("top", iconTop + "px");

}


$("#title").click(function() {
    console.log(hasOverlay);
    if (hasOverlay==true) {
        $('iframe').each(function(i) {
            this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
        $(".description-expand").hide();
        hasOverlay = false;
        $("body").css("overflow","auto");
    }
})

$(".icon-close").click(function(event){
       $('iframe').each(function(i) {
            this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
        var parent = $(this).parent();
    $(parent).hide();
})

$(".icon-next-position").click(function(event) {
    $('iframe').each(function(i) {
            this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
        var parent = $(this).parent();
    $(parent).hide();
    var classes = $(parent).attr('class');
classes = "." + classes.replace(/\s/g,".");
    var current = $(parent).next(classes).attr('id');
    if (!current){
        console.log("Is last");
        current = $(classes+":first").attr('id');
        
    }
    console.log("Current is: " +current);
    current = ".description-expand#" + current;
    setParametersOfExpand(current);
    $(current).show();
    event.stopPropagation();
})

$(".icon-prev-position").click(function(event) {
    $('iframe').each(function(i) {
            this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
        var parent = $(this).parent();
    $(parent).hide();
    var classes = $(parent).attr('class');
classes = "." + classes.replace(/\s/g,".");
    var current = $(parent).prev(classes).attr('id');
    if (!current){
        current = $(classes+":last").attr('id');
        
    }
    current = ".description-expand#" + current;
    setParametersOfExpand(current);
    $(current).show();
    event.stopPropagation();
})
// $(".imageHover").hover(function(){
// $(this).show();
// }, function(){
// $(this).hide();
// })

