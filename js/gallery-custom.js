/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.addEventListener('load', function(){
    var box1oc = document.getElementById("box-1oc");
    var box2oc = document.getElementById("box-2oc");
    var box4oc = document.getElementById("box-4oc");
    var box5oc = document.getElementById("box-5oc");
    var box7oc = document.getElementById("box-7oc");
    var box8oc = document.getElementById("box-8oc");
    var box10oc = document.getElementById("box-10oc");
    var box11oc = document.getElementById("box-11oc");
    var boxarray = [box1oc, box2oc, box4oc, box5oc, box7oc, box8oc, box10oc, box11oc];
    var resetThings = function(box){
        for (var i = 0; i < 8; i++){
            if (boxarray[i].isSameNode(box)){
                box.onmouseover = undefined;
                box.onmouseout = undefined;
            } else {
                boxarray[i].style.cursor = "pointer";
                boxarray[i].style.background = "none";
                boxarray[i].onmouseover = function(){
                    this.style.background = "rgba(255, 255, 255, 0.1)";
                };
                boxarray[i].onmouseout = function(){
                    this.style.background = "none";
                };
            }
        }
        box.style.cursor = "default";
        box.style.background = "rgba(255, 255, 255, 0.2)";
    };
    box1oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    box2oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    box4oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    box5oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    box7oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    box8oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    box10oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    box11oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
});


