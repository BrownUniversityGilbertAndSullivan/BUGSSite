<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
		"http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">
<head>
	<title>BUGS - Reservation received</title> 

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
	<h2>Reservation list:</h2>
		<table class="reservationstable" border="1">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Showtime</th>
        <th scope="col">Num Tickets</th>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </table>
		<p class="topmain">&nbsp;</p>
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
