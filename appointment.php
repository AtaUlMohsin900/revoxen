<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $services = trim($_POST["services"]);
        $approx_sf = trim($_POST["sf"]);
        $phone = trim($_POST["phone"]);
        $zip = trim($_POST["zip"]);
        $address = trim($_POST["address"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($services) OR empty($approx_sf) OR empty($phone) OR empty($zip) OR empty($address) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Update this to your desired email address.
        $recipient = "contact@yourdomain.com";
		$subject = "Appointment from $name";

        // Email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Subject: $subject\n\n";
        $email_content .= "Service: $services\n\n";
        $email_content .= "Approx SF: $approx_sf\n\n";
        $email_content .= "Phone No: $phone\n\n";
        $email_content .= "ZIP Code: $zip\n\n";
        $email_content .= "Address: $address\n\n";

        // Email headers.
        $email_headers = "From: $name <$email>\r\nReply-to: <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your appointment has been completed.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>