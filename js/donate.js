/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.addEventListener('load', function(){
   var donateButton = document.getElementById("box-bl");
   var exitButton = document.getElementById("exit");
   var contentmain = document.getElementById("text");
   donateButton.style.cursor = "pointer";
   var origHtml = contentmain.innerHTML;
   donateButton.onclick = function(event){
       contentmain.innerHTML = 
               "<h3><b>Donate to BUGS!</b></h3>" + 
                "<p style=text-align:center'>We gratefully accept checks made out to Brown University.<br> " + 
                "In the memo section please be certain to write \"Gilbert and Sullivan.\" Checks can be mailed to:</p>" +
                "<p style='text-align:center'>Brown University<br/>" +
                "Gift Cashier<br>" +
                "Box 1877<br>" +
                "Providence, RI 02912 USA</p>" +

                "<p style='text-align:center'>You can also make your gift to Brown University Gilbert and Sullivan online " +
                "at <a href='http://gifts.brown.edu'>gifts.brown.edu</a><br>" +

                "Click \"Give Now.\" Scroll toward the bottom of the page to the subhead \"Other Current-Use Priorities.\"" + 
                        "Check the box for \"Other\" and type in \"Gilbert and Sullivan\" to the right. Continue as indicated.</p>" +

                "<p style='text-align:center'>Thank you for supporting our productions!</p>" + 
                "<p><em>Image from: <a href='https://www.lib.rochester.edu/index.cfm?page=4142'>https://www.lib.rochester.edu/index.cfm?page=4142</a></em></p>";
       exitButton.style.visibility = "visible";
   };
   exitButton.onclick = function(event){
       contentmain.innerHTML = origHtml;
       exitButton.style.visibility = "hidden";
   };
});

