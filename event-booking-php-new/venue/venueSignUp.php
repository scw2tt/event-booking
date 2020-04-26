<?php
require('connectdb.php');
require('venueHandler.php');

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

// Extract json format to PHP array
$request = json_decode($postdata);

$data = [];
$data[0]['length'] = $content_length;
foreach ($request as $k => $v)
{
  $data[0][''.$k] = $v;
}


// Don't add to the website if the email is taken
$check_email = getVenue_by_email($data[0]['email']);
$check_name = getVenue_by_name($data[0]['name']);


if (count($check_email) > 0){
    // if there is already an email taken for that performer, then don't touch it.
    $data[0]['email'] = 'BAD EMAIL';
    echo json_encode(['content'=>$data]); // send the data back, but with the altered email
    exit();

}elseif (count($check_name) > 0) {
    // if there is already an email taken for that performer, then don't touch it.
    $data[0]['name'] = 'BAD NAME';
    echo json_encode(['content'=>$data]); // send the data back, but with the altered email
    exit();
}
else {

  echo json_encode(['content'=>$data]);
  $add_name = $data[0]['name'];
  $add_password = $data[0]['password'];
  $add_capacity = $data[0]['capacity'];
  $add_address_line_1 = $data[0]['address_line_1'];
  $add_address_line_2 = $data[0]['address_line_2'];
  $add_city = $data[0]['city'];
  $add_country = $data[0]['country'];
  $add_state = $data[0]['state'];
  $add_zipcode = $data[0]['zipcode'];
  $add_link = $data[0]['link'];
  $add_email = $data[0]['email'];
  $add_about_me = $data[0]['about_me'];

  // hash password so it is not in plaintext in DB

  $add_password = MD5($add_password);

  addVenue($add_name, $add_password, $add_capacity, $add_address_line_1,
  $add_address_line_2, $add_city, $add_country, $add_state, $add_zipcode,
  $add_link, $add_email, $add_about_me);



}


?>
