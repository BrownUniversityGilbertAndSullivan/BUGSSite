<?
/*
author: Amandeep K. Gill
date: November 15, 2006
version: 1.3

I don't care if you take this php file and reuse it to your own needs.  And you were expecting a claim of intellectual property.  This program simply sends an email to the form owner at $email and sends the same email to $senderemail.  It also prevents people from leaving blank any form field except for their own email address by using javascript to send the user an alert and to return them to the form page.
*/

  $email = 'njml@brown.edu';
  $fname = $_REQUEST['fname'] ;
  $lname = $_REQUEST['lname'] ;
  $year = $_REQUEST['year'] ;
  $phone = $_REQUEST['phone'] ;
  $senderemail = $_REQUEST['email'] ;
  $sullivan = $_REQUEST['sullivan'] ;
  $q1 = $_REQUEST['q1'] ;
  $q2 = $_REQUEST['q2'] ;
  $q3 = $_REQUEST['q3'] ;
  $q4 = $_REQUEST['q4'] ;
  $q5 = $_REQUEST['q5'] ;


  
  $message = 
  
"BUGS Director Application:

Name: $fname $lname
Year: $year
Phone: $phone
Email: $senderemail
________________________________________________________________
If you have a preference for a music director, please indicate the one person you would feel most comfortable working with.

$sullivan
________________________________________________________________
List all past theatre experience you have that you consider relevant.  Please provide the task(s) (acting, stage-managing, set design, etc) you performed, the year of the show, and the company.

$q1
________________________________________________________________
Describe any other experiences (including musical ones) that you think may be relevant to the board's decision and to your directorial experience.

$q2
________________________________________________________________
List all expected commitments for next semester (club meetings, jobs, class, lab, etc.). 

$q3

________________________________________________________________
Explain what you envision your task as director to be.  Be sure to include how you will find a production staff and how you will work with them.

$q4

________________________________________________________________
In a 1-2 page (300-600 words) statement, explain your proposal.  Try to answer the following questions: why does this show excite you?; what is your underlying creative vision for the production (feel free to reference other performances you may have seen)?; and why are you the best person for the job?

$q5
________________________________________________________________
http://www.brown.edu/Students/BUGS/";

  if (!empty($fname)){  
  
  		if (!empty($lname)){  
		
  			if (!empty($year)){			
				
					if (!empty($phone)){
						
						if (!empty($senderemail)){
							
							if (!empty($q1)){
							
								if (!empty($q2)){
							
									if (!empty($q3)){
							
										if (!empty($q4)){
							
											if (!empty($q5)){
							
							
													mail( $senderemail, "BUGS Director Application", $message, "From: Spencer_Brody@brown.edu" );
  													mail( $email, "BUGS Director Application", $message, "From: $senderemail" );
  													header( "Location: http://www.brown.edu/Students/BUGS/productions/soliciting/output.htm" );
									
													}
		
													else{
													echo '<script language="javascript">
													history.back(); 
													alert("Please answer the short essay question (question 5).")
													</script>;';
													}
											}
		
											else{
												echo '<script language="javascript">
												history.back(); 
												alert("Please describe how you see yourself accomplishing the tasks of a director (question 4).")
												</script>;';
											}
									
									}
		
									else{
										echo '<script language="javascript">
										history.back(); 
										alert("Please list prior time commitments (question 3).")
										</script>;';
									}
								}
		
								else{
								echo '<script language="javascript">
								history.back(); 
								alert("Please describe relevant non-theater experience (question 2).")
								</script>;';
								}
							}
		
							else{
								echo '<script language="javascript">
								history.back(); 
								alert("Please list previous theater experience (question 1).")
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
  		alert("Please enter your last name.")
  		</script>;';
		}	
  }
  
  else{
  echo '<script language="javascript">
  history.back(); 
  alert("Please enter your first name.")
  </script>;';
  }
  exit;
?>