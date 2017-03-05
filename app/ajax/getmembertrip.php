<?php

include_once ('../class/class.Log.php');
include_once ('../class/class.ErrorLog.php');
include_once ('../class/class.AccessLog.php');

// var_dump($_POST);
// die();

//
// post input
//
$membertripid = $_POST['membertripid'];
$memberid = $_POST['memberid'];

//
//  set global values
//
$msgtext = "ok";

//
// get date time for this transaction
//
$datetime = date("Y-m-d H:i:s");

// create time stamp versions for insert to mysql
$enterdateTS = date("Y-m-d H:i:s", strtotime($datetime));

// messaging
//
$returnArrayLog = new AccessLog("logs/");
// $returnArrayLog->writeLog("get trip  request started" );

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
	$log->writeLog("DB error: $dberr - Error mysql connect. Unable to get  trip for rvtripdbs.");

	$rv = "";
	exit($rv);
}

if (!mysql_select_db($DBschema, $dbConn)) 
{
	$log = new ErrorLog("logs/");
	$dberr = mysql_error();
	$log->writeLog("DB error: $dberr - Error selecting db Unable to get  trip for rvtripdbs.");

	$rv = "";
	exit($rv);
}

//---------------------------------------------------------------
// get all trip info for member 
//---------------------------------------------------------------
$sql = "SELECT tripname, 
	id as membertripid, 
	description as tripdescription, 
	DATE_FORMAT(startdate, '%Y/%m/%d') as tripstartdate, 
	DATE_FORMAT(enddate, '%Y/%m/%d') as tripenddate, 
	iscurrent as tripiscurrent 
	FROM tripstbl 
	WHERE memberid = '$memberid'
	AND id = '$membertripid'";
// print $sql;

$sql_result = @mysql_query($sql, $dbConn);
if (!$sql_result)
{
	$log = new ErrorLog("logs/");
	$sqlerr = mysql_error();
	$log->writeLog("SQL error: $sqlerr - Error doing select to db Unable to get  trip for rvtripdbs tripname $tripname.");
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
	$jsrow = "{ 'membertripname': 'No Trips', 'membertripid': '0' }";

	exit($jsrow);
}

if ($count > 1)
{
	$jsrow = "{ 'membertripname': 'Error > 1', 'membertripid': '0' }";

	exit($jsrow);
}

//
// fill the variable
//
$membertrip = mysql_fetch_assoc($sql_result); 
    
//
// close db connection
//
mysql_close($dbConn);

//
// pass back info
//
exit(json_encode($membertrip));
?>
