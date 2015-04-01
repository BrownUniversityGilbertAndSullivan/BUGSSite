window.addEventListener('load', function(){
   var contentmain = document.getElementById("text");
   var origHtml = contentmain.innerHTML;
   var today = new Date();
  if (today.getMonth()+'.'+today.getDate()=='3.1')  {
    contentmain.innerHTML = 
    "<p>Due to the fantastic success of <em>Camelot</em> last spring, " + 
    "and lower levels of interest in our other recent productions, it is with " +
    "slight trepidation but great excitement that we announce the following: <br>" +
    "<strong>As of Fall 2015, Brown University Gilbert and Sullivan (BUGS) " + 
    "shall be known as Brown University Lerner and Loewe (BULL).</strong><br>" +
    "We thank you for your support through this difficult transition.</p>" + origHtml;
   };
   exitButton.onclick = function(event){
       contentmain.innerHTML = origHtml;
       exitButton.style.visibility = "hidden";
   };
});