<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
		"http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">
<head>
	<title>Brown Gilbert and Sullivan - Princess Ida Reservations</title> 

	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
	
	
	<link rel="stylesheet" href="../styles/2col.css" type="text/css">
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
		<a href="../index.php">
			<img src="../img/masthead3.jpg" alt="BUGS" width="780" height="90"> 
		</a>
<!-- end header div -->
	</div>
<!-- begin container of two  columns -->
	<div id="goods">
<!-- begin left column -->
		<div id="leftcol">
			<ul>
<?php
  include "../dat/onelevelinnav.dat";
	?>
			</ul>
			
			<p>&nbsp;</p>
<!-- end left column -->
	</div>

	<div id="main">
	
	<!--p>&nbsp;</p-->

		<h2>Princess Ida (Spring 2011)</h2>
		<p><b>Hannah Jones</b>, <em>director</em></p>
		<p><b>Matthew Jaroszewicz</b>, <em>music director</em></p>
		
		<h1>Reservations now open!</h1>
		<form method="POST" action="reserve.php">
		<!--<p>
		<input type="hidden" name="_send_email1" value="/Students/BUGS/Reservations/email.txt">
		<input type="hidden" name="_browser_out" value="/Students/BUGS/Reservations/output.html"> 
		</p>-->
		<p class="topmain">Admission is free for all, but preferential seating will be given to those who reserve ahead of time.</p>
		<p class="topmain">Name<br>
		<input type="text" name="name"
		value="" size="20">
		</p>
		<p class="topmain">E-mail<br>
		<input type="text" name="senderemail"
		value="" size="20">
		</p>
		<p class="topmain">Number of seats to be reserved<br>
		<input type="text" name="seats"
		value="" size="20">
		</p>
		<p class="topmain">When (To reserve seats for more than one performance, make separate reservations under your name)</p>
		<p><input type="radio" name="time" value="8:00 PM, Friday April 8th">&nbsp;8:00 PM, Friday April 8th</p>
		<p><input type="radio" name="time" value="2:00 PM, Saturday April 9th">&nbsp;2:00 PM, Saturday April 9th</p>
		<p><input type="radio" name="time" value="8:00 PM, Saturday April 9th">&nbsp;8:00 PM, Saturday April 9th</p>
		<p><input type="radio" name="time" value="3:00 PM, Sunday April 10th">&nbsp;3:00 PM, Sunday April 10th</p>
		<p><input type="submit" value="Send"></p>
		</form>
		<br>

<!-- end main div --> 
	</div>
	
	
<!-- end goods div -->
</div>



<div id="footer">
<?php
 include "../dat/footeronelevelin.dat";
?>
</div>

<!-- end box div -->
</div>
</body>
</html>
