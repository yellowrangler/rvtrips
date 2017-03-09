<?php

include_once ('../class/class.Log.php');
include_once ('../class/class.ErrorLog.php');
include_once ('../class/class.AccessLog.php');

// var_dump($_POST);
// die();

//
// post input
//
$tripid = $_POST['membertripid'];
$memberid =  $_POST['memberid'];

//
//  set global values
//
$msgtext = "ok";

// print_r($_POST);
// die()

//
// get date time for this transaction
//
$datetime = date("Y-m-d H:i:s");

// create time stamp versions for insert to mysql
$enterdateTS = date("Y-m-d H:i:s", strtotime($datetime));

// messaging
//
$returnArrayLog = new AccessLog("logs/");
// $returnArrayLog->writeLog("Add trip request started" );

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
	$log->writeLog("DB error: $dberr - Error mysql connect. Unable to delete trip for rvtripdbs trip $tripname.");

	$rv = "";
	exit($rv);
}

if (!mysql_select_db($DBschema, $dbConn)) 
{
	$log = new ErrorLog("logs/");
	$dberr = mysql_error();
	$log->writeLog("DB error: $dberr - Error selecting db Unable to delete trip for rvtripdbs trip $tripname.");

	$rv = "";
	exit($rv);
}

//
// delete trip
//

$sql = "DELETE FROM tripstbl WHERE memberid = '$memberid' AND id = '$tripid' "; 

$sql_result = @mysql_query($sql, $dbConn);
if (!$sql_result)
{
	$log = new ErrorLog("logs/");
	$sqlerr = mysql_error();
	$log->writeLog("SQL error: $sqlerr - Error doing update to db Unable to delete trip for rvtripdbs tripname $tripname.");
	$log->writeLog("SQL: $sql");

	$rc = -100;
	$msgtext = "System Error: $sqlerr. sql = $sql";

	exit($msgtext);
}

//
// close db connection
//
mysql_close($dbConn);

//
// pass back info
//
exit($msgtext);
?>
