<?
/*
author: Amandeep K. Gill
date: November 15, 2006
version: 1.3

I don't care if you take this php file and reuse it to your own needs.  And you were expecting a claim of intellectual property.  This program simply sends an email to the form owner at $email and sends the same email to $senderemail.  It also prevents people from leaving blank any form field except for their own email address by using javascript to send the user an alert and to return them to the form page.
*/

  $email = 'christopher_bullock@brown.edu';
  $name = $_REQUEST['name'] ;
  $year = $_REQUEST['year'] ;
  $phone = $_REQUEST['phone'] ;
  $senderemail = $_REQUEST['senderemail'] ;
  $show = $_REQUEST['show'];
  $gilbert = $_REQUEST['gilbert'] ;
  $q1 = $_REQUEST['q1'] ;
  $q2 = $_REQUEST['q2'] ;
  $q3 = $_REQUEST['q3'] ;
  $q4 = $_REQUEST['q4'] ;
  $q5 = $_REQUEST['q5'] ;
  $q6 = $_REQUEST['q6'] ;
  $q7 = $_REQUEST['q7'] ;
  $q8 = $_REQUEST['q8'] ;


  
  $message = 
  
"BUGS Music Director Application:

Name: $name
Year: $year
Phone: $phone
Email: $senderemail
Show: $show
________________________________________________________________

Do you have a preference for working under a particular director?  If so, who?

$gilbert
________________________________________________________________
What experience do you have with singing and vocal coaching?  If you don't feel that you are prepared to work with vocalists, who do you plan to take on as a vocal coach?

$q1
________________________________________________________________
What experience do you have with pit orchestras and conducting?  If you don't feel that you are prepared to conduct an orchestra, who do you plan to take on as a conductor?

$q2
________________________________________________________________
What other expected commitments do you have for next semester (club meetings, jobs, class, lab, etc.)?

$q3
________________________________________________________________
How do you see yourself working with the choruses?  You should focus on how you will teach them their music, how you will lead vocal warm-ups, etc.

$q4
________________________________________________________________
How do you see yourself working with the choruses?  You should focus on how you will teach them their music, how you will lead vocal warm-ups, etc.

$q5
________________________________________________________________
How do you see yourself working with leads?  You should focus on how you will polish their music, the amount of artistic liberty you will give them, etc.

$q6
________________________________________________________________
Do you see yourself needing a rehearsal pianist?  If so, how do you plan on recruiting one?

$q7
________________________________________________________________
Is there anything else you would like the board to know?

$q8
________________________________________________________________
http://www.brown.edu/Students/BUGS/";

  if (!empty($name)){  
  
  		if (!empty($year)){			
				
				if (!empty($phone)){
						
					if (!empty($senderemail)){
						
						if (!empty($show)) {
							
							if (!empty($q1)){
								
									if (!empty($q2)){
								
										if (!empty($q3)){
								
											if (!empty($q4)){
												if (!empty($q5)){
													if (!empty($q6)){
														if (!empty($q7)){
											
								
													mail( $senderemail, "BUGS Music Director Application", $message, "From: $email" );
													mail( $email, "BUGS Music Director Application", $message, "From: $senderemail" );
													header( "Location: http://www.brown.edu/Students/BUGS/Applications/musDirAppOutput.php" );
			
} 
			
												
										else{
												echo '<script language="javascript">
												history.back(); 
												alert("Please answer all questions.")
												</script>;';}
}
			
												
												else{
													echo '<script language="javascript">
													history.back(); 
													alert("Please answer all questions.")
													</script>;';}
													}
			
												
												else{
													echo '<script language="javascript">
													history.back(); 
													alert("Please answer all questions.")
													</script>;';}
													}
			
												
											else{
												echo '<script language="javascript">
												history.back(); 
												alert("Please answer all questions.")
												</script>;';
											}
										}
			
										else{
											echo '<script language="javascript">
											history.back(); 
											alert("Please answer all questions.")
											</script>;';
										}
										
									}
			
									else{
										echo '<script language="javascript">
										history.back(); 
										alert("Please answer all questions.")
										</script>;';
									}
										
								}
			
								else{
									echo '<script language="javascript">
									history.back(); 
									alert("Please answer all questions.")
									</script>;';
								}
							}
							
							else{
								echo '<script language="javascript">
								history.back(); 
								alert("Please enter your preferred show.")
								</script>;';
							}
						}
							
						else{
							echo '<script language="javascript">
							history.back(); 
							alert("Please enter your email address.")
							</script>;';
						}
					}
		
					else{
						echo '<script language="javascript">
						history.back(); 
						alert("Please enter a phone number.")
						</script>;';
					}
			}					
			else{
			echo '<script language="javascript">
			history.back(); 
			alert("Please enter your year.")
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