<?php
require('connectdb.php');
require('bookingHandler.php');


header('Access-Control-Allow-Origin: *');
// try to allow all
//header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
session_start();


// get the size of incoming data
$content_length = (int) $_SERVER['CONTENT_LENGTH'];

// retrieve data from the request
$postdata = file_get_contents("php://input");

// get the data from the php
$request = json_decode($postdata);

$data = [];
$data[0]['length'] = $content_length;
foreach ($request as $k => $v)
{
    $data[0][''.$k] = $v;
}


// get the id of the sender
$receiver_id = $check_receiver[0]['performer_id'];
$sender_id = $_SESSION["myID"];
$sender_is_venue = $_SESSION["venue"];
$status = 'live';


// construct the object, add the booking
echo json_encode(['content'=>$data]);

$add_receiver_id = $receiver_id;
$add_sender_id = $sender_id;
$add_sender_is_venue = $sender_is_venue;
$add_event_date = $data[0]['event_date'];
$add_expiry_date = $data[0]['expiry_date'];
$add_status = $status;
$add_details = $data[0]['details'];

addBooking($add_receiver_id, $add_sender_id,
$add_sender_is_venue, $add_event_date, $add_expiry_date,
$add_status, $add_details);


?>
