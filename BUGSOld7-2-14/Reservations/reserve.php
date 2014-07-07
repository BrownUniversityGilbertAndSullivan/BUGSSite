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
  $seats = $_REQUEST['seats'];
  $time = $_REQUEST['time'];
  $message = 
  
"Hello $name, this email confirms that you have reserved tickets for the BUGS production of Princess Ida.

You have requested $seats tickets for this show: $time

Please note that reservations must be made at least 12 hours prior to showtime, or they may not be processed -- even if you get this email.

The production will be in Alumnae Hall of the Brown University Campus.
Campus Map: http://www.brown.edu/Facilities/Facilities_Management/snormalsearch.php?txtSearch=%22Alumnae+hall%22

Seating for reserve ticket holders begins half an hour before the show.  Open seating will begin fifteen minutes before the curtain, so please arrive at least fifteen minutes in advance to ensure priority seating.

Admission is free, but please keep in mind that putting on a show is not, and BUGS depends on audience donations. So please consider donating after the show. 

Thank you, and enjoy the show!

http://students.brown.edu/BUGS/";

  if (!empty($name)){  
  
  		if (!empty($senderemail)){  
		
  			if (!empty($seats)){			
				
					if (!empty($time)){
							mail( $senderemail, "Princess Ida Reservation", $message, "From: $email" );//Send confirmation email to user
  						mail( $email, "Princess Ida Reservation", $message, "From: $senderemail" );//Send email to person maintaining reservations
  						header( "Location: http://www.brown.edu/Students/BUGS/Reservations/result.php" );//Redirect user to results page
							
							
							
					}
		
					else{
						echo '<script language="javascript">
						history.back(); 
						alert("Please select a show time.")
						</script>;';
					}
			}					
			else{
			echo '<script language="javascript">
			history.back(); 
			alert("Please enter a number of tickets that you would like to reserve.")
			</script>;';
			}
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