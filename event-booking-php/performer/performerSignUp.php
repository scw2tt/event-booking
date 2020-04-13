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
  $data[0][''.$k] = $v;
}

// Don't add to the website if the email is taken
$check_email = getPerformer_by_email($data[0]['email']);
$check_name = getPerformer_by_name($data[0]['name']);

if (count($check_email) > 0){
    // if there is already an email taken for that performer, then don't touch it.
    $data[0]['email'] = 'BAD EMAIL';
    echo json_encode(['content'=>$data]); // send the data back, but with the altered email
    exit();
} elseif(count($check_name) > 0){
    $data[0]['name'] = 'BAD NAME';
    echo json_encode(['content'=>$data]); // send the data back, but with the altered email
    exit();
} else {
    // Send response (in json format) back the front end
    echo json_encode(['content'=>$data]);
    $add_about_me = $data[0]['about_me'];
    $add_email = $data[0]['email'];
    $add_genre = $data[0]['genre'];
    $add_link = $data[0]['link'];
    $add_location = $data[0]['location'];
    $add_name = $data[0]['name'];
    $add_password = $data[0]['password'];
    addPerformer($add_about_me, $add_email, $add_genre, 
    $add_link, $add_location, $add_name, $add_password);

} 


?>