<?
/*
author: Amandeep K. Gill
date: November 15, 2006
version: 1.3

I don't care if you take this php file and reuse it to your own needs.  And you were expecting a claim of intellectual property.  This program simply sends an email to the form owner at $email and sends the same email to $senderemail.  It also prevents people from leaving blank any form field except for their own email address by using javascript to send the user an alert and to return them to the form page.
*/

  // Constants
  $showname = 'Gondoliers';
  $email = 'bugs@brown.edu';
  $max_tickets = 10; // The max number of tixets that one person can reserve
  $dbhost = 'localhost';
  $dbname = 'BUGS';
  $dbusername = 'bugs';
  $dbpasswd = 'bu031008';
  $dbtable = 'reservations';
  
  // User data
  $senderemail = $_REQUEST['email'] ;
  $name = $_REQUEST['name'] ;
  $number = $_REQUEST['number'];
  $performance = $_REQUEST['show'];
  switch ($performance) {
  	case 1:
  		$perfname = "Friday August 7th 8pm";
			break;
  	case 2:
  		$perfname = "Saturday August 8th 2pm";
			break;
  	case 3:
  		$perfname = "Saturday August 8th 8pm";
			break;
  	case 4:
  		$perfname = "Sunday August 9th 2pm";
			break;
	default:
		$perfname = '';
  }
  $message = 
  
"Hello $name, this email confirms that you have reserved tickets for the BUGS production of $showname.

You have requested $number tickets for this show: $perfname

Please note that reservations must be made at least 12 hours prior to showtime, or they may not be processed -- even if you get this email.

The production will be in Alumnae Hall of the Brown University Campus.
Campus Map: http://www.brown.edu/Facilities/Facilities_Management/snormalsearch.php?txtSearch=%22Alumnae+hall%22

Seating for reserve ticket holders begins half an hour before the show.  Open seating will begin fifteen minutes before the curtain, so please arrive at least fifteen minutes in advance to ensure priority seating.

Admission is free, but BUGS depends on audience donations.

http://www.brown.edu/Students/BUGS/";

  if (!empty($name)){  
  
  		if (!empty($senderemail) && validEmail($senderemail)){  
		
  			if (!empty($number) && $number > 0 && $number <= $max_tickets){			
				
					if (!empty($performance) && $performance != 0){
						$conn = mysql_connect($dbhost, $dbusername, $dbpasswd);
						if (!conn) {
							die("Could not connect to database:" . mysql_error($conn));
						}
						mysql_select_db($dbname, $conn);
						
						// validate input to prevent SQL injection
						$name = mysql_real_escape_string($name, $conn);
						$senderemail = mysql_real_escape_string($senderemail, $conn);
						settype($performance, 'integer');
						settype($number, 'integer');
						
						//$query = "INSERT INTO $dbtable (name, email, show, numtix) " . 
						//			"VALUES('$name', '$senderemail', '$performance', '$number')";
						$query = "INSERT INTO $dbtable " . 
									"VALUES('$name', '$senderemail', $performance, $number)";
						echo $query;
						$res = mysql_query($query, $conn);
						if (!$res) {
							die("Couldn't insert into database:" . mysql_error($conn));
						}
						
						mysql_close($conn);
						// Send confirmation email
						mail( $senderemail, "$showname Reservation", $message, "From: $email" );
  						//mail( $email, "Iolanthe Reservation", $message, "From: $senderemail" );
  						header( "Location: http://www.brown.edu/Students/BUGS/reservations/output.htm" );
					}
		
					else{
						echo "<script language='javascript'>
						history.back(); 
						alert('Please select a show time.')
						</script>;";
						
					}
			}					
			else{
			$res = '<script language="javascript"> history.back(); ';
			if ($number > $max_tickets) {
				$res .= "alert('The max number of tickets that can be reserved is $max_tickets.')";
			} else if ($number <= 0) {
				$res .= 'alert("Please enter a positive number of tickets to reserve.")';
			} else {
				$res .= 'alert("Please enter a number of tickets that you would like to reserve.")';
			}
			$res .= '</script>;';
			echo $res;
			}
  		}
	
		else{
		echo '<script language="javascript">
  		history.back(); 
  		alert("Please enter a valid email address.")
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
  
/**
Validate an email address.
Provide email address (raw input)
Returns true if the email address has the email 
address format and the domain exists.

This function taken from http://www.linuxjournal.com/article/9585
**/
function validEmail($email)
{
   $isValid = true;
   $atIndex = strrpos($email, "@");
   if (is_bool($atIndex) && !$atIndex)
   {
      $isValid = false;
   }
   else
   {
      $domain = substr($email, $atIndex+1);
      $local = substr($email, 0, $atIndex);
      $localLen = strlen($local);
      $domainLen = strlen($domain);
      if ($localLen < 1 || $localLen > 64)
      {
         // local part length exceeded
         $isValid = false;
      }
      else if ($domainLen < 1 || $domainLen > 255)
      {
         // domain part length exceeded
         $isValid = false;
      }
      else if ($local[0] == '.' || $local[$localLen-1] == '.')
      {
         // local part starts or ends with '.'
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $local))
      {
         // local part has two consecutive dots
         $isValid = false;
      }
      else if (!preg_match('/^[A-Za-z0-9\\-\\.]+$/', $domain))
      {
         // character not valid in domain part
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $domain))
      {
         // domain part has two consecutive dots
         $isValid = false;
      }
      else if (!preg_match('/^(\\\\.|[A-Za-z0-9!#%&`_=\\/$\'*+?^{}|~.-])+$/',
                 str_replace("\\\\","",$local)))
      {
         // character not valid in local part unless 
         // local part is quoted
         if (!preg_match('/^"(\\\\"|[^"])+"$/',
             str_replace("\\\\","",$local)))
         {
            $isValid = false;
         }
      }
      if ($isValid && !(checkdnsrr($domain,"MX") || checkdnsrr($domain,"A")))
      {
         // domain not found in DNS
         $isValid = false;
      }
   }
   return $isValid;
}
?>