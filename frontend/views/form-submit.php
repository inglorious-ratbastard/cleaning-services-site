<?php

if(isset($_POST['submmit'])) {
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $mailTo = "phoenixfiremind77@gmail.com";
  $headers = "From: ".$mailFrom;
  $txt = "You have recieved an email from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: contact.ejs?mailsend");
}

?>