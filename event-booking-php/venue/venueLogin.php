<?php
    require('connectdb.php');
    require('venueHandler.php');

    header('Access-Control-Allow-Origin: *');
    // try to allow all
    //header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

    // enable the global session array
    session_start();

    if(isset($_SESSION['myID']))
    {
      session_destroy();
      exit();
    }

    // get the user and password from front end login submission
    $content_length = (int) $_SERVER['CONTENT_LENGTH'];
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $data = [];
    $data[0]['length'] = $content_length;
    foreach ($request as $k => $v)
    {
      $data[0][''.$k] = $v;
    }
    $email = $data[0]['email'];
    $password = $data[0]['password'];

    // get the password for this email from the database
    $check_email = getVenue_by_email($email);
    // if the email is not there at all, then
    if (count($check_email) == 0){
        $data[0]['email'] = 'BAD EMAIL';
        echo json_encode(['content'=>$data]);
        exit();
    }
    $password_from_db = $check_email[0]['password'];

    // check to make sure that the passwords exist
    if ($password_from_db === MD5($password)){

        $_SESSION['venue'] = "venue";
        $_SESSION['myID'] = $check_email[0]['venue_id'];

        // give them the entire object
        echo json_encode(['content'=>$check_email]);
    } else {
        // respond to front end that it didn't work
        $data[0]['password'] = 'BAD PASSWORD';
        echo json_encode(['content'=>$data]);
        exit();
    }


?>
