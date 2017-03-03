<?php

include_once ('../class/class.Log.php');
include_once ('../class/class.ErrorLog.php');
include_once ('../class/class.AccessLog.php');

// var_dump($_POST);
// die();

//
// post input
//
$tripname = $_POST['tripname'];
$tripdescription = $_POST['tripdescription'];
$tripstartdate = $_POST['tripstartdate'];
$tripenddate =  $_POST['tripenddate'];
$memberid =  $_POST['memberid'];


$tripiscurrent = 0;

if( isset($_POST['tripiscurrent']) )
{
     $tripiscurrent = 1;
}

//
// get string date and create mysql timestamp
// 
$unixTS = strtotime($tripstartdate);
$mysqlTS = date("Y-m-d H:i:s", $unixTS);
$tripstartdateTS = $mysqlTS;

$unixTS = strtotime($tripenddate);
$mysqlTS = date("Y-m-d H:i:s", $unixTS);
$tripenddateTS = $mysqlTS;

// echo "unixTS $unixTS";
// echo "mysqlTS $mysqlTS";
// echo "tripstartdateTS $tripstartdateTS";
// die();
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
	$log->writeLog("DB error: $dberr - Error mysql connect. Unable to add trip for rvtripdbs trip $tripname.");

	$rv = "";
	exit($rv);
}

if (!mysql_select_db($DBschema, $dbConn)) 
{
	$log = new ErrorLog("logs/");
	$dberr = mysql_error();
	$log->writeLog("DB error: $dberr - Error selecting db Unable to add trip for rvtripdbs trip $tripname.");

	$rv = "";
	exit($rv);
}

//
// now encode string. Must be done  after mysql connect
//
$tripdescription = mysql_real_escape_string($tripdescription);

//---------------------------------------------------------------
// check if tripname already exists
//---------------------------------------------------------------
$sql = "SELECT * FROM tripstbl WHERE tripname = '$tripname'";
// print $sql;

$sql_result = @mysql_query($sql, $dbConn);
if (!$sql_result)
{
	$log = new ErrorLog("logs/");
	$sqlerr = mysql_error();
	$log->writeLog("SQL error: $sqlerr - Error doing select to db Unable to add trip for rvtripdbs tripname $tripname.");
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
if ($count == 1)
{
	$msgtext = "Trip name $tripname already is a trip!";

	exit($msgtext);
}
	
//
// insert new trip
//

$sql = "INSERT INTO tripstbl
	(memberid,
	tripname, 
	description, 
	startdate, 
	enddate, 
	iscurrent
	) 
	VALUES ('$memberid',
	'$tripname',
	'$tripdescription', 
	'$tripstartdateTS',
	'$tripenddateTS',
	'$tripiscurrent'
	)"; 

$sql_result = @mysql_query($sql, $dbConn);
if (!$sql_result)
{
	$log = new ErrorLog("logs/");
	$sqlerr = mysql_error();
	$log->writeLog("SQL error: $sqlerr - Error doing insert to db Unable to add trip for rvtripdbs tripname $tripname.");
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
