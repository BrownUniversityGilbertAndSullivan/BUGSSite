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
  $sullivan = $_REQUEST['sullivan'] ;
  $assdirector1 = $_REQUEST['assdirector1'] ;
  $assdirector2 = $_REQUEST['assdirector2'] ;
  $q1 = $_REQUEST['q1'] ;
  $q2 = $_REQUEST['q2'] ;
  $q3 = $_REQUEST['q3'] ;
  $q4 = $_REQUEST['q4'] ;
  $q5 = $_REQUEST['q5'] ;
  $q6 = $_REQUEST['q6'] ;
  $q7 = $_REQUEST['q7'] ;


  
  $message = 
  
"BUGS Director Application:

Your full name: $name
Year: $year
Phone number: $phone
Email: $senderemail
Show: $show
________________________________________________________________
Do you have a preference for a particular music director?  If so, who?

$sullivan
________________________________________________________________

Who would you prefer to have as your assistant director, and what would your working dynamic be like?  (If you do not have one, please skip this question and answer the question below.

$assdirector1
________________________________________________________________
Would you like us to find you an assistant director?  If not, please explain in detail why you would prefer to work alone. (If you answered the above question, please skip this one.)

$assdirector2
________________________________________________________________
What relevant theater experience have you had?  Please provide the task(s) (acting, stage-managing, set design, etc) you performed, the year of the show, and the company.

$q1
________________________________________________________________
What other expected commitments do you have for next semester (club meetings, jobs, class, lab, etc.)?

$q2
________________________________________________________________
How do you see yourself working with and managing the cast?  You should include your plan for casting and auditioning.

$q3
________________________________________________________________
How do you see yourself working with and managing a production team?  You should include your plan for recruiting designers and other tech crew.

$q4
________________________________________________________________
Why are you the best person for the job?

$q5
________________________________________________________________
In a statement of 300-600 words, explain your proposal.  You should address the following questions: Why does this show excite you? What is your underlying vision for the production? (Feel free to reference other performances of this show.) How do you see yourself portraying the characters? How will you utilize technical aspects (set, lights, costumes, etc.) to aid your vision?

$q6
________________________________________________________________
Is there anything else that you would like the board to know?

$q7
________________________________________________________________
http://www.brown.edu/Students/BUGS/";

  if (!empty($name)){  
  
  		if (!empty($year)){			
				
					if (!empty($phone)){
						
						if (!empty($senderemail)){
						
							if (!empty($show)) {
							
								if (!empty($q1)){
								
									if (!empty($q5)){
								
										if (!empty($q3)){
								
											if (!empty($q4)){
								
												if (!empty($q6)){
	
								
													mail( $senderemail, "BUGS Director Application", $message, "From: $email" );
													mail( $email, "BUGS Director Application", $message, "From: $senderemail" );
													header( "Location: http://www.brown.edu/Students/BUGS/Applications/dirAppOutput.php" );
										
												}
			
												else{
													echo '<script language="javascript">
													history.back(); 
													alert("Please answer the short essay question (question 6).")
													</script>;';
												}
										
											}
			
											else{
												echo '<script language="javascript">
												history.back(); 
												alert("Please describe how you see yourself working with the production team. (question 4).")
												</script>;';
											}
										}
			
										else{
											echo '<script language="javascript">
											history.back(); 
											alert("Please answer how you see yourself working with the cast. (question 3)")
											</script>;';
										}
										
									}
			
									else{
										echo '<script language="javascript">
										history.back(); 
										alert("Please answer why you are the best person for the job (question 5).")
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