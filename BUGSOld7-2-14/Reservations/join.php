<?
/*
author: Amandeep K. Gill
date: November 15, 2006
version: 1.3

I don't care if you take this php file and reuse it to your own needs.  And you were expecting a claim of intellectual property.  This program simply sends an email to the form owner at $email and sends the same email to $senderemail.  It also prevents people from leaving blank any form field except for their own email address by using javascript to send the user an alert and to return them to the form page.
*/

  $email = 'christopher_bullock@brown.edu';
  $senderemail = $_REQUEST['senderemail'] ;
  $name = $_REQUEST['name'] ;
  $message = 
  
"Hello $name, this email confirms that you have signed up to be added to the Brown Gilbert and Sullivan listserv. You should receive another email in the next 48 hours once the webmaster has added you to the listserv. 

Thank you for your interest!

http://students.brown.edu/BUGS/";
  $message2 = 

"$senderemail $name";

  if (!empty($name)){  
  
  		if (!empty($senderemail)){  
							mail( $senderemail, "Request to join listserv Successful!", $message, "From: $email" );//Send confirmation email to user
  						mail( $email, "Listserv join request", $message2, "From: $senderemail" );//Send email to person maintaining reservations
  						header( "Location: http://www.brown.edu/Students/BUGS/Reservations/result2.php" );//Redirect user to results page
							
							
							
					
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