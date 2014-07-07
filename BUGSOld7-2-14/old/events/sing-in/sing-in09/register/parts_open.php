<?
/*
author: Amandeep K. Gill
date: November 15, 2006
version: 1.3

I don't care if you take this php file and reuse it to your own needs.  And you were expecting a claim of intellectual property.  This program simply sends an email to the form owner at $email and sends the same email to $senderemail.  It also prevents people from leaving blank any form field except for their own email address by using javascript to send the user an alert and to return them to the form page.
*/

  $email = 'Chelsea_Berry@brown.edu';
  $listservOwnerEmail = 'Spencer_Brody@brown.edu';
  $senderemail = $_REQUEST['email'] ;
  $name = $_REQUEST['name'] ;
  $city = $_REQUEST['city'];
  $state = $_REQUEST['state'];
  $voice = $_REQUEST['voice'];
  $roles = $_REQUEST['roles'];
  $experience = $_REQUEST['experience'];
  $comments = $_REQUEST['comments'];
  $mailingList = $_REQUEST['mailingList'];
  $message = 
  
"Hello $name, this email confirms that you have registered for the BUGS Sing-in 2009.

This is the information you used to register.  If any of the following is inaccurate, please email Chelsea at Chelsea_Berry@brown.edu

Name: $name
Home city: $city
Home state: $state
Voice part: $voice

Preferred role(s):
$roles

G&S experience pertinent to these roles/why you want them:
$experience

Other comments:
$comments



Thanks for registering -- see you April 25!
Sing-In information is here:
http://www.brown.edu/Students/BUGS/events/sing-in/sing-in09/index.htm



http://www.brown.edu/Students/BUGS/";

  if (!empty($name)){
  
  		if (!empty($senderemail)){  
		
  			if (!empty($city)){			
				
					if (!empty($state)){
					
						if(!empty($voice)){
						
							if(!empty($roles)){
								mail( $senderemail, "Sing-in09 registration", $message, "From: $email1" );
  								mail( $email, "Sing-in09 registration", $message, "From: $senderemail" );
								//mail( 'spencer_brody@brown.edu', "Sing-in08 registration", $message, "From: $senderemail" );
  								
							}
							else{
								echo '<script language="javascript">
								history.back(); 
								alert("Please enter your preferred role(s).  If you just want to be in the chorus, write \"chorus\"")
								</script>;';

							}
						}
						else{
							echo '<script language="javascript">
							history.back(); 
							alert("Please enter your voice part.")
							</script>;';
						}
					}
		
					else{
						echo '<script language="javascript">
						history.back(); 
						alert("Please enter your home state.")
						</script>;';
						
					}
			}					
			else{
				echo '<script language="javascript">
				history.back(); 
				alert("Please enter your home city.")
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
  
  if($mailingList){
  	$emailToUser = "This message is to inform you that your request to be added to the BUGS(Brown University Gilburt and Sullivan) listserv is being processed.  You should recieve a confirmation email when you have been successfully added.";
	$emailToListservAdmin = "$name ($senderemail) has requested to be added to the BUGS listserv.  Please send him/her a confirmation email when he/she has been added.  Thank you.";
	mail( $senderemail,"BUGS listserv",$emailToUser,"From: $listservOwnerEmail");
	mail( $listservOwnerEmail,"BUGS listserv request",$emailToListservAdmin, "From: BUGS Website");
  }
  header( "Location: http://www.brown.edu/Students/BUGS/events/sing-in/sing-in09/register/thanks.htm");
  exit;
?>