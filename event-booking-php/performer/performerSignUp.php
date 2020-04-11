<?php
require('connectdb.php');
require('performerHandler.php');

header('Access-Control-Allow-Origin: http://localhost:4200');
// try to allow all
//header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');


// get the size of incoming data
$content_length = (int) $_SERVER['CONTENT_LENGTH'];

// retrieve data from the request
$postdata = file_get_contents("php://input");

// Process data
// (this example simply extracts the data and restructures them back)

// Extract json format to PHP array
$request = json_decode($postdata);

$data = [];
$data[0]['length'] = $content_length;
foreach ($request as $k => $v)
{
  $data[0]['post_'.$k] = $v;
}

// Don't add to the website if the email is taken
$check_email = getPerformer_by_email($data[0]['post_email']);

if (count($check_email) === 0){
    // Send response (in json format) back the front end
    echo json_encode(['content'=>$data]);
    $add_about_me = $data[0]['post_about_me'];
    $add_email = $data[0]['post_email'];
    $add_genre = $data[0]['post_genre'];
    $add_link = $data[0]['post_link'];
    $add_location = $data[0]['post_location'];
    $add_name = $data[0]['post_name'];
    $add_password = $data[0]['post_password'];
    addPerformer($add_about_me, $add_email, $add_genre, 
    $add_link, $add_location, $add_name, $add_password);

    echo json_encode(['content'=>$data]);
} else {
    // if there is already an email taken for that performer, then don't touch it.
    $data[0]['post_email'] = 'bad';
}


?>