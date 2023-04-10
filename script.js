var overlay = document.querySelector("#overlay")
var iscroll = document.querySelector("#scroll")

overlay.addEventListener("mouseenter",function(){
    iscroll.style.scale = 1
})

overlay.addEventListener("mouseleave",function(){
    iscroll.style.scale = 0
})

overlay.addEventListener("mousemove",function(dets){
    iscroll.style.left = `${dets.x - 40}px`
    iscroll.style.top = `${dets.y - 30}px`
})