<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
		"http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">
<head>
	<title>BUGS - Sing-In Registration</title> 

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
		<h2>Our Sixth Annual Sing-In, Spring 2011</h2>
		<h3>Saturday, April 30th, 10 am - 5 pm</h3>
		<p class="topmain">On the menu this year: <em>Princess Ida</em>, <em>HMS Pinafore</em>, <em>Yeomen of the Guard</em>, <em>Ruddigore</em>, <em>Trial By Jury</em>, and <em>Hail Poetry!</em>.</p>
		
		<h3>Register for a role</h3>
		<form method="POST" action="sing-in_form_submit.php">
		<p class="topmain">Please include your name and home city as you'd like them to appear on a printed program and name tag.</p>
		<p class="topmain">Your full name<br>
		<input type="text" name="name"
		value="" size="20">
		</p>
		<p class="topmain">E-mail<br>
		<input type="text" name="senderemail"
		value="" size="20">
		</p>
		<p class="topmain">Home city<br>
		<input type="text" name="city"
		value="" size="20">
		</p>
		<p class="topmain">Home state<br>
		<input type="text" name="state"
		value="" size="20">
		</p>
		<p class="topmain">Preferred roles (top three)<br>
		<input type="text" name="roles"
		value="" size="20">
		</p>
		<p class="topmain">Any comments<br>
		<textarea rows="15" cols="65" name="comments"></textarea>
		</p>
		<p><input type="submit" value="Send"></p>
		</form>
		
		<h3>Roles</h3>
		<p class="topmain"><em>Princess Ida</em></p>
		<table cellpadding="6">
			<tr>
			<td>King Hildebrand</td><td>Bass-Baritone</td>
			</tr>
			<tr>
			<td>Hilarion</td><td>Tenor</td>
			</tr>
			<tr>
			<td>Cyril</td><td>Tenor</td>
			</tr>
			<tr>
			<td>Florian</td><td>Baritone</td>
			</tr>
			<tr>
			<td>King Gama</td><td>Baritone</td>
			</tr>
			<tr>
			<td>Arac</td><td>Bass-Baritone</td>
			</tr>
			<tr>
			<td>Guron</td><td>Bass-Baritone</td>
			</tr>
			<tr>
			<td>Scynthius</td><td>Bass</td>
			</tr>
			<tr>
			<td>Princess Ida</td>
			<td>Soprano</td>
			</tr>
			<tr>
			<td>Lady Blanche</td>
			<td>Contralto</td>
			</tr>
			<tr>
			<td>Lady Psyche</td>
			<td>Soprano</td>
			</tr>
			<tr>
			<td>Melissa</td>
			<td>Mezzo-Soprano</td>
			</tr>
			<tr>
			<td>Sacharissa</td>
			<td>Soprano</td>
			</tr>
		</table>
		<p class="topmain"><em>HMS Pinafore</em></p>
		<table cellpadding="6">
			<tr>
			<td>The Rt. Hon. Sir Joseph Porter</td><td>Baritone</td>
			</tr>
			<tr>
			<td>Captain Corcoran</td><td>Baritone</td>
			</tr>
			<tr>
			<td>Ralph Rackstraw</td><td>Tenor</td>
			</tr>
			<tr>
			<td>Dick Deadeye</td><td>Bass-Baritone</td>
			</tr>
			<tr>
			<td>Bill Bobstay</td><td>Baritone</td>
			</tr>
			<tr>
			<td>Bob Becket</td><td>Bass</td>
			</tr>
			<tr>
			<td>Josephine</td><td>Soprano</td>
			</tr>
			<tr>
			<td>Cousin Hebe</td><td>Mezzo-Soprano</td>
			</tr>
			<tr>
			<td>Mrs. Cripps</td><td>Contralto</td>
			</tr>
		</table>
		<p class="topmain"><em>Yeomen of the Guard</em></p>
		<table cellpadding="6">
			<tr>
			<td>Sir Richard Cholmondeley</td><td>Baritone</td>
			</tr>
			<tr>
			<td>Colonel Fairfax</td><td>Tenor </td>
			</tr>
			<tr>
			<td>Sergeant Meryll</td><td>Bass-Baritone</td>
			</tr>
			<tr>
			<td>Leonard Meryll</td><td>Tenor</td>
			</tr>
			<tr>
			<td>Jack Point</td><td>Baritone</td>
			</tr>
			<tr>
			<td>Wilfred Shadbolt</td><td>Baritone</td>
			</tr>
			<tr>
			<td>First Yeoman</td><td>Tenor</td>
			</tr>
			<tr>
			<td>Second Yeoman</td><td>Baritone</td>
			</tr>
			<tr>
			<td>Third Yeoman</td><td>Tenor</td>
			</tr>
			<tr>
			<td>Fourth Yeoman</td>
			<td>Bass</td>
			</tr>
			<tr>
			<td>Elsie Maynard</td>
			<td>Soprano</td>
			</tr>
			<tr>
			<td>Phoebe Meryll</td>
			<td>Mezzo-Soprano</td>
			</tr>
			<tr>
			<td>Dame Carruthers</td>
			<td>Contralto</td>
			</tr>
			<tr>
			<td>Kate</td>
			<td>Soprano</td></tr>
		</table>
		<p class="topmain"><em>Ruddigore</em></p>
		<table cellpadding="6">
			<tr>
			<td>Sir Ruthven Murgatroyd</td><td>Baritone</td>
			</tr>
			<tr>
			<td>Richard "Dick" Dauntless</td><td>Tenor</td>
			</tr>
			<tr>
			<td>Sir Despard Murgatroyd</td><td>Bass-Baritone</td>
			</tr>
			<tr>
			<td>Sir Roderic Murgatroyd</td><td>Bass-Baritone</td>
			</tr>
			<tr>
			<td>Old Adam Goodheart</td><td>Bass</td>
			</tr>
			<tr>
			<td>Rose Maybud</td><td>Soprano</td>
			</tr>
			<tr>
			<td>Mad Margaret</td><td>Mezzo-Soprano</td>
			</tr>
			<tr>
			<td>Dame Hannah</td><td>Contralto</td>
			</tr>
			<tr>
			<td>Zorah</td><td>Soprano</td>
			</tr>
		</table>
		<p class="topmain"><em>Trial By Jury</em></p>
		<table cellpadding="6">
			<tr>
			<td>The Learned Judge</td><td>Baritone</td>
			</tr>
			<tr>
			<td>The Plaintiff</td><td>Soprano</td>
			</tr>
			<tr>
			<td>The Defendant</td><td>Tenor</td>
			</tr>
			<tr>
			<td>Counsel for the Plaintiff</td><td>Baritone</td>
			</tr>
			<tr>
			<td>Usher</td><td>Bass-Baritone</td>
			</tr>
			<tr>
			<td>Foreman of the Jury</td><td>Bass</td>
			</tr>
			<tr>
			<td>First Bridesmaid</td><td></td>
			</tr>
		</table>






			
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
