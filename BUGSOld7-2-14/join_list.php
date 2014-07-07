<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
		"http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">
<head>
	<title>Join the BUGS Listserv</title> 

	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
	
	
	<link rel="stylesheet" href="styles/2col.css" type="text/css">
<script type="text/javascript">
  function clearDefault(el) {
    if (el.defaultValue==el.value) el.value = ""
  }
  function restoreDefault(el) {
    if (el.defaultValue!=el.value) el.value = el.defaultValue
  }
</script> 
</head>
<body>
<div id="box">
	<div id="header">
		<a href="index.php">
			<img src="img/masthead3.jpg" alt="BUGS" width="780" height="90"> 
		</a>
<!-- end header div -->
	</div>
<!-- begin container of two  columns -->
	<div id="goods">
<!-- begin left column -->
		<div id="leftcol">
			<ul>
<?php
  include "dat/topnav.dat";
	?>
			</ul>
			
			<p>&nbsp;</p>
<!-- end left column -->
	</div>

	<div id="main">
	
	<!--p>&nbsp;</p-->
		<h2>Join our Listserv</h2> 
		<p class="topmain">If you want to join our general mailing list, please fill out and submit the form below.
		<p class="topmain">You'll periodically receive fun announcements about upcoming shows, board meetings, social events, and more.</p>
		<p class="topmain">We also have separate mailing lists for the cast, tech crew, and pit orchestra.</p>


<form method="POST" action="join.php">
		<!--<p>
		<input type="hidden" name="_send_email1" value="/Students/BUGS/email.txt">
		<input type="hidden" name="_browser_out" value="/Students/BUGS/output.html"> 
		</p>-->
		
		<p class="topmain">Name<br>
		<input type="text" name="name"
		value="" size="20">
		</p>
		<p class="topmain">E-mail<br>
		<input type="text" name="senderemail"
		value="" size="20">
		</p>
		<p><input type="submit" value="Send"></p>
		</form>


			
			
<!-- end main div --> 
	</div>
	
	
<!-- end goods div -->
</div>



<div id="footer">
<?php
 include "dat/footer4top.dat";
?>
</div>

<!-- end box div -->
</div>
</body>
</html>
