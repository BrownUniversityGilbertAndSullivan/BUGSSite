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
        document.getElementById("links").innerHTML = 
                "<a href='gallery/iolantheFall2013/iolanthe1.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe1.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe2.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe2.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe3.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe3.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe4.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe4.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe5.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe5.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe6.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe6.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe7.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe7.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe8.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe8.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe9.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe9.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe10.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe10.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe11.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe11.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe12.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe12.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe13.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe13.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe14.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe14.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe15.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe15.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe16.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe16.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe17.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe17.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe18.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe18.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe19.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe19.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe20.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe20.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe21.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe21.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe22.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe22.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe23.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe23.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe24.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe24.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe25.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe25.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe26.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe26.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe27.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe27.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe28.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe28.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe29.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe29.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe30.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe30.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe31.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe31.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe32.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe32.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe33.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe33.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe34.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe34.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe35.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe35.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe36.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe36.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe37.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe37.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe38.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe38.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe39.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe39.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe40.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe40.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe41.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe41.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe42.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe42.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe43.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe43.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe44.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe44.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe45.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe45.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe46.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe46.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe47.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe47.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe48.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe48.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe49.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe49.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe50.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe50.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe51.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe51.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe52.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe52.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe53.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe53.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe54.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe54.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe55.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe55.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe56.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe56.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe57.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe57.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe58.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe58.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe59.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe59.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe60.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe60.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe61.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe61.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe62.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe62.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe63.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe63.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe64.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe64.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe65.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe65.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe66.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe66.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe67.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe67.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe68.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe68.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe69.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe69.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe70.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe70.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe71.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe71.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe72.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe72.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe73.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe73.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe74.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe74.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe75.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe75.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe76.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe76.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe77.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe77.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe78.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe78.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe79.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe79.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe80.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe80.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe81.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe81.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe82.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe82.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe83.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe83.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe84.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe84.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe85.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe85.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe86.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe86.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe87.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe87.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe88.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe88.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe89.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe89.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe90.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe90.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe91.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe91.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe92.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe92.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe93.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe93.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe94.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe94.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe95.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe95.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe96.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe96.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe97.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe97.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe98.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe98.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe99.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe99.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe100.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe100.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe101.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe101.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe102.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe102.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe103.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe103.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe104.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe104.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe105.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe105.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe106.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe106.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe107.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe107.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe108.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe108.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe109.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe109.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe110.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe110.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe111.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe111.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe112.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe112.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe113.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe113.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe114.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe114.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe115.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe115.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe116.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe116.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe117.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe117.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe118.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe118.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe119.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe119.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe120.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe120.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe121.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe121.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe122.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe122.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe123.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe123.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe124.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe124.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe125.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe125.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe126.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe126.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe127.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe127.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe128.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe128.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe129.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe129.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe130.jpg' title='Iolanthe' data-description=''>" + 
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe130.jpg' alt='Iolanthe'/></a>" +
                "<a href='gallery/iolantheFall2013/iolanthe131.png' title='Iolanthe' data-description=''>" +
                "<img src='gallery/iolantheFall2013/thumbs/iolanthe131.png' alt='Iolanthe'/></a>";
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


