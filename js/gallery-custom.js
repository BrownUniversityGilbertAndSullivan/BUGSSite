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
    //Iolanthe Fall 2013
    box1oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    //Pirates Spring 2013
    box2oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    //Patience Fall 2012
    box4oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    //Older Photos
    box5oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    //Miscellaneous
    box7oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    //Sing-in 2013
    box8oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    //Sing-in 2014
    box10oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
    //Camelot Spring 2014
    box11oc.onclick = function(event){
        resetThings(this);
        document.getElementById("links").innerHTML = 
                "<a href='gallery/camelotSpring2014/camelot1.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot1.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot2.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot2.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot3.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot3.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot4.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot4.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot5.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot5.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot6.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot6.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot7.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot7.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot8.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot8.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot9.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot9.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot10.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot10.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot11.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot11.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot12.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot12.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot13.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot13.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot14.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot14.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot15.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot15.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot16.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot16.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot17.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot17.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot18.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot18.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot19.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot19.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot20.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot20.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot21.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot21.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot22.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot22.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot23.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot23.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot24.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot24.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot25.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot25.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot26.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot26.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot27.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot27.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot28.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot28.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot29.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot29.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot30.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot30.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot31.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot31.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot32.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot32.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot33.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot33.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot34.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot34.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot35.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot35.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot36.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot36.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot37.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot37.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot38.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot38.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot39.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot39.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot40.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot40.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot41.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot41.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot42.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot42.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot43.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot43.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot44.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot44.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot45.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot45.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot46.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot46.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot47.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot47.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot48.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot48.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot49.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot49.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot50.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot50.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot51.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot51.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot52.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot52.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot53.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot53.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot54.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot54.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot55.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot55.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot56.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot56.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot57.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot57.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot58.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot58.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot59.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot59.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot60.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot60.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot61.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot61.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot62.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot62.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot63.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot63.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot64.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot64.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot65.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot65.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot66.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot66.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot67.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot67.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot68.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot68.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot69.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot69.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot70.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot70.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot71.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot71.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot72.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot72.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot73.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot73.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot74.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot74.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot75.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot75.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot76.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot76.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot77.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot77.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot78.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot78.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot79.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot79.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot80.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot80.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot81.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot81.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot82.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot82.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot83.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot83.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot84.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot84.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot85.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot85.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot86.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot86.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot87.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot87.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot88.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot88.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot89.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot89.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot90.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot90.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot91.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot91.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot92.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot92.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot93.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot93.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot94.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot94.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot95.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot95.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot96.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot96.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot97.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot97.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot98.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot98.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot99.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot99.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot100.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot100.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot101.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot101.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot102.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot102.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot103.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot103.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot104.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot104.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot105.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot105.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot106.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot106.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot107.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot107.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot108.jpg' title='Camelot' data-description=''>" + 
                "<img src='gallery/camelotSpring2014/thumbs/camelot108.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot109.jpg' title='Camelot' data-description=''>" + 
                    "<img src='gallery/camelotSpring2014/thumbs/camelot109.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot110.jpg' title='Camelot' data-description=''>" + 
                    "<img src='gallery/camelotSpring2014/thumbs/camelot110.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot111.jpg' title='Camelot' data-description=''>" + 
                    "<img src='gallery/camelotSpring2014/thumbs/camelot111.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot112.jpg' title='Camelot' data-description=''>" + 
                    "<img src='gallery/camelotSpring2014/thumbs/camelot112.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot113.jpg' title='Camelot' data-description=''>" + 
                    "<img src='gallery/camelotSpring2014/thumbs/camelot113.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot114.jpg' title='Camelot' data-description=''>" + 
                    "<img src='gallery/camelotSpring2014/thumbs/camelot114.jpg' alt='Camelot'/></a>" +
                "<a href='gallery/camelotSpring2014/camelot115.jpg' title='Camelot' data-description=''>" + 
                    "<img src='gallery/camelotSpring2014/thumbs/camelot115.jpg' alt='Camelot'/></a>";
    };
});


