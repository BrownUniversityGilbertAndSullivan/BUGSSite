<?
/*
author: Amandeep K. Gill
date: November 15, 2006
version: 1.3

I don't care if you take this php file and reuse it to your own needs.  And you were expecting a claim of intellectual property.  This program simply sends an email to the form owner at $email and sends the same email to $senderemail.  It also prevents people from leaving blank any form field except for their own email address by using javascript to send the user an alert and to return them to the form page.
*/

  $email = 'browngilbertandsullivan@gmail.com';
  $email2 = 'bugswebmaster@gmail.com';
  $name = $_REQUEST['name'] ;
  $city = $_REQUEST['city'] ;
  $state = $_REQUEST['state'] ;
  $roles = $_REQUEST['roles'] ;
  $senderemail = $_REQUEST['senderemail'] ;
  $comments = $_REQUEST['comments'] ;
  


  
  $message = 
  
"BUGS Sing-In registration form:

Name: $name
Email: $senderemail
Home city: $city
Home state: $state
Preferred roles: $roles
Other comments:
$comments
________________________________________________________________
http://www.brown.edu/Students/BUGS/";

  if (!empty($name)){  
  
  		if (!empty($senderemail)){			
				
			if (!empty($city)){
						
				if (!empty($state)){
							
					if (!empty($roles)){
							
								//if (!empty($comments)){
								
									
													mail( $senderemail, "BUGS Sing-In registration", $message, "From: $senderemail" );
													mail( $email, "BUGS Sing-In registration", $message, $senderemail );
													mail( $email2, "BUGS Sing-In registration", $message, "From: $senderemail" );
													header( "Location: http://www.brown.edu/Students/BUGS/Applications/sing-in_output.php" );
										
												}
			
								//		else{
								//			echo '<script language="javascript">
								//			history.back(); 
								//			alert("Please enter your preferred roles.")
								//			</script>;';
								//		}
								//	}
			
							else{
								echo '<script language="javascript">
								history.back(); 
								alert("Please enter your preferred roles.")
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
			alert("Please enter your e-mail address.")
			</script>;';
			}
  		}
	
  else{
  echo '<script language="javascript">
  history.back(); 
  alert("Please enter your full name.")
  </script>;';
  }
  exit;
?>
