<?php
  if(isset($_POST['submit'])){
    $fName = $_POST['fn'];
    $lName = $_POST['ln'];
    $visitor_email = $_POST['email'];
    $message = $_POST['msg'];

    $fullName = $fName."".$lName;
    $subject = "Website contact form";

    $mailTo = "17026121@student.hhs.nl";
    $headers = "From: ".$visitor_email;
    $txt = "You have received an e-mail from: ".$fullName.".\n\n".$message;
    if(!empty($fName) && !empty($lName) && !empty($visitor_email) && !empty($message)){
      mail($mailTo, $subject, $txt, $headers);
    }
  }
?>﻿
