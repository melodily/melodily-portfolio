var hasOverlay = false;

$(".category").click(function() {
    var id = $(this).attr("id");
    id = "#" + id + "-thumbnails";
    $(".description-bg:not(" + id +')').slideUp('fast');
    $(id).slideToggle('fast', function() {
        $("#title").resize();
    });
})

$(".small-images").hover(function() {
    $(".imageHover", this).show();
}, function() {
    $(".imageHover", this).hide();
})

$(".small-images").click(function(event) {
    $(".description-expand").hide();
    var current = $(this).attr('id');
    current = ".description-expand#" + current + "_description";
    setParametersOfExpand(current);
    var heightOfContainer = $(current).height()*0.9;
    console.log("container: " + heightOfContainer);
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
    var top = $(document).scrollTop() + 0.1 * height;
    console.log(width + ", " + $(current).width() + ", "+ width*0.66);
    height *= 0.8;
    width*=0.66;
    console.log(top);
    $(current).css("top", top + "px");
    $(current).css("height", height + "px");
     $(current).css("width", width + "px");
    $("body").css("overflow", "hidden");
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

