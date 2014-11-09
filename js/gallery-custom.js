/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.addEventListener('load', function(){
    var topleft = document.getElementById("box-tl");
    topleft.onclick = function(event){
        document.getElementById("links").innerHTML = "<a href='img/play-pause.png' title='Apple' data-description='apple desc'>" +
                            "<img src='img/play-pause.png' alt='Apple'/></a>" +
                        "<a href='img/video-play.png' title='Orange' data-description='orange desc'>" +
                            "<img src='img/video-play.png' alt='Orange'/></a>";
    };
});


