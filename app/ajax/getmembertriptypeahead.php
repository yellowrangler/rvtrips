<?php

include_once ('../class/class.Log.php');
include_once ('../class/class.ErrorLog.php');
include_once ('../class/class.AccessLog.php');

// var_dump($_POST);
// die();

//
// post input
//
$memberid = $_POST['memberid'];

//
//  set global values
//
$msgtext = "ok";

// print_r($_POST);
// die();

//
// get date time for this transaction
//
$datetime = date("Y-m-d H:i:s");

// create time stamp versions for insert to mysql
$enterdateTS = date("Y-m-d H:i:s", strtotime($datetime));

// messaging
//
$returnArrayLog = new AccessLog("logs/");
// $returnArrayLog->writeLog("get trip typeahead request started" );

//------------------------------------------------------
// get db trip info
//------------------------------------------------------
// open connection to host
$DBhost = "localhost";
$DBschema = "rvtripsdb";
$DBuser = "tarryc";
$DBpassword = "tarryc";

//
// connect to db
//
$dbConn = @mysql_connect($DBhost, $DBuser, $DBpassword);
if (!$dbConn) 
{
	$log = new ErrorLog("logs/");
	$dberr = mysql_error();
	$log->writeLog("DB error: $dberr - Error mysql connect. Unable to get typeahead trip for rvtripdbs.");

	$rv = "";
	exit($rv);
}

if (!mysql_select_db($DBschema, $dbConn)) 
{
	$log = new ErrorLog("logs/");
	$dberr = mysql_error();
	$log->writeLog("DB error: $dberr - Error selecting db Unable to get typeahead trip for rvtripdbs.");

	$rv = "";
	exit($rv);
}

//---------------------------------------------------------------
// get all trip info for member 
//---------------------------------------------------------------
$sql = "SELECT tripname as membertripname, id as membertripid 
	FROM tripstbl 
	WHERE memberid = '$memberid'
	ORDER BY tripname";
// print $sql;

$sql_result = @mysql_query($sql, $dbConn);
if (!$sql_result)
{
	$log = new ErrorLog("logs/");
	$sqlerr = mysql_error();
	$log->writeLog("SQL error: $sqlerr - Error doing select to db Unable to get typeahead trip for rvtripdbs tripname $tripname.");
	$log->writeLog("SQL: $sql");

	$rc = -100;
	$msgtext = "System Error: $sqlerr";

	exit($msgtext);
}

//
// check if tripname already exists
//
$count = 0;
$count = mysql_num_rows($sql_result);
if ($count == 0)
{
	$jsrow = "{ 'label': 'No Trips', 'value': '0' }";

	exit($msgtext);
}

//
// fill the array
//
$membertrips = array();
while($r = mysql_fetch_assoc($sql_result)) {
    $membertrips[] = $r;
}
//
// close db connection
//
mysql_close($dbConn);


//
// pass back info
//
exit(json_encode($membertrips));
?>
