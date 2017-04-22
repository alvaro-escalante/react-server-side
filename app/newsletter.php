<?php
  $name = $_POST['name'];
  $contacto = $_POST['contacto'];
  $message = $_POST['message'];
  $from = 'Enquiry'; 
  $to = 'alvaro@builtvisible.com'; 
  $subject = 'Website Contact';
   
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/plain; charset=iso-8859-1' . "\r\n";
  $headers .= "From: $contacto" . "\r\n";
			
  $body = "From: $name\n E-Mail: $contacto\n Message:\n $message" ;
				
  if ($_POST['submit']) {				 
    if (mail ($to, $subject, $body, $headers)) { 
			echo ("<script language='JavaScript'>
			  window.alert('Thank you for joining our newsletter')
			  window.location.href='index.php';
			    </script>");
		 
		} else { 
	    echo '<p>Something went wrong, go back and try again!</p>'; 
		} 
	}
?>