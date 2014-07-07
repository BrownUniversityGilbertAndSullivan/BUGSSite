<?
/*
author: Amandeep K. Gill
date: November 15, 2006
version: 1.3

I don't care if you take this php file and reuse it to your own needs.  And you were expecting a claim of intellectual property.  This program simply sends an email to the form owner at $email and sends the same email to $senderemail.  It also prevents people from leaving blank any form field except for their own email address by using javascript to send the user an alert and to return them to the form page.
*/

// WEBMASTER EMAIL : EDIT BELOW
  $email = 'alec_kacew@brown.edu';
// WEBMASTER EMAIL : EDIT ABOVE

  $senderemail = $_REQUEST['senderemail'] ;
  $name = $_REQUEST['name'] ;
  $message = "subscribe BUGS $name";
  $message2 = "$senderemail $name";

  if (!empty($name)){  
  
  		if (!empty($senderemail)){  
						mail("listserv@listserv.brown.edu", "", $message, "From: $senderemail" );//Subscribe to listserv
  						mail( $email, "A new member was added to the BUGS Listserv", $message2, "From: $senderemail" );//Send email to person maintaining reservations ?>
  						<script language="JavaScript" type="text/JavaScript">
							<!--
							window.location.href = "http://students.brown.edu/BUGS/join_success.php";
							//-->
						</script> <? //Redirect user to success page
							
							
							
					
  		}
	
		else{
		echo '<script language="javascript">
  		history.back(); 
  		alert("Please enter an email address of the form someone@someplace.com .")
  		</script>;';
		}	
  }
  
  else{
  echo '<script language="javascript">
  history.back(); 
  alert("Please enter your first and last name.")
  </script>;';
  }
  exit;
?>