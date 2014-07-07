<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
		"http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">
<head>
	<title>BUGS - Ticket reservation</title>

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
		<h2>Ticket Reservations</h2>
		<h3>Camelot, April 18-20</h3>
		<p class="topmain">Performances will be held Friday at 8pm, Saturday at 2pm and 8pm, and Sunday at 2pm in Alumnae Hall (194 Meeting Street).</p>

		<!-- GOOGLE DOC FOR RESERVATIONS : EDIT BELOW -->
		<iframe src="https://docs.google.com/forms/d/1J_1-SbpnIoOybSbomXGKxov_r3Ir67RgjKJshi1QKuQ/viewform?embedded=true" width="550" height="700" frameborder="0" marginheight="0" marginwidth="0"></iframe>
		<!-- GOOGLE DOC FOR RESERVATIONS : EDIT ABOVE -->

<!-- end main div -->
	</div>


<!-- end goods div -->
</div>



<div id="footer">
<?php
 include "dat/footeronelevelin.dat";
?>
</div>

<!-- end box div -->
</div>
</body>
</html>
