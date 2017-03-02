USE rvtripsdb;

DROP TABLE IF EXISTS membertbl;
CREATE TABLE membertbl (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  membername varchar(255) DEFAULT NULL,
  membernameprofileind int(11) DEFAULT NULL,
  screenname varchar(255) DEFAULT NULL,
  gender varchar(25) DEFAULT NULL,
  genderprofileind int(11) DEFAULT NULL,
  avatar varchar(255) DEFAULT NULL,
  role varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  emailprofileind int(11) DEFAULT NULL,
  street varchar(255) DEFAULT NULL,
  city varchar(255) DEFAULT NULL,
  state varchar(255) DEFAULT NULL,
  zip varchar(255) DEFAULT NULL,
  addressprofileind int(11) DEFAULT NULL,
  phonenumber varchar(255) DEFAULT NULL,
  phonenumberprofileind int(11) DEFAULT NULL,
  noemail int(11) DEFAULT NULL,
  biography varchar(10000) DEFAULT NULL,
  biographyprofileind varchar(12) NOT NULL,
  passwd varchar(255) DEFAULT NULL,
  status varchar(25) DEFAULT NULL,
  PRIMARY KEY (id)
); 

DROP TABLE IF EXISTS tripstbl;
CREATE TABLE tripstbl (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  tripname varchar(255) NULL,
  comment varchar(255) DEFAULT NULL,
  startdate datetime,
  enddate datetime,  
  PRIMARY KEY (id)
); 

DROP TABLE IF EXISTS servicetripstatstbl;
CREATE TABLE servicetripstatstbl (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  memberid bigint(20) unsigned DEFAULT NULL,
  tripid bigint(20) unsigned DEFAULT NULL,
  totalmiles int(11) DEFAULT NULL,
  totalgallons decimal(13,2) DEFAULT NULL,
  avecostpergallon decimal(13,2) DEFAULT NULL,
  avempg decimal(13,2) DEFAULT NULL,
  totalcost decimal(13,2) DEFAULT NULL,
  PRIMARY KEY (id)
); 


DROP TABLE IF EXISTS servicestopstbl;
CREATE TABLE servicestopstbl (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  memberid bigint(20) unsigned DEFAULT NULL,
  tripid bigint(20) unsigned DEFAULT NULL,
  servicestationid bigint(20) unsigned DEFAULT NULL,
  pdate datetime,
  amount decimal(13,2) DEFAULT NULL,
  gallons decimal(13,2) DEFAULT NULL,
  costpergallon decimal(13,2) DEFAULT NULL,
  odometer int(11) DEFAULT NULL,
  miles int(11) DEFAULT NULL,
  mpg decimal(13,2) DEFAULT NULL,
  city varchar(255) DEFAULT NULL,
  state varchar(255) DEFAULT NULL,
  comment varchar(255) DEFAULT NULL,
  enterdate datetime,
  createdate datetime,
  PRIMARY KEY (id)
); 

DROP TABLE IF EXISTS servicestationstbl;
CREATE TABLE servicestationstbl (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) NULL,
  iconname varchar(255) NULL,
  url varchar(255) NULL,
  status INT DEFAULT NULL,
  enterdate datetime DEFAULT NULL,
  createdate datetime DEFAULT NULL,
  PRIMARY KEY (id)
); 

INSERT INTO membertbl
  (id, membername, membernameprofileind, screenname, gender, genderprofileind, 
  avatar, role, email, emailprofileind, street, city, state, zip, addressprofileind, 
  phonenumber, phonenumberprofileind, noemail, biography, biographyprofileind, passwd, status) 
  VALUES 
  (1,"Tarrant Cutler",1,"AirDreamer","Male",1,
  "airstream.png","admin","tarrant.cutler@gmail.com",1,"68 Barley Neck Rd","Orleans","MA","02653",1,
  "781-342-0204",1,0,"Love to travel and meet people",1,"tarryc","active");



Service
  Add Service Stop
  Add Maintenance Stop
  Current Service Stats
  Trip Service Stats
Waypoint
  Add Waypoint
  Current Waypoint Stats
  Trip Waypoint Stats
Vehicle Info
  RV Aisrtream
  Tow Vehicle
Admin
  Add service station
  Edit service station
  Add Member
  Edit Member
  Edit Service Stop
  Edit Waypoint Stop  
  Edit Maintenance Stop
  Add Vehicle Info
  Edit Vehicle Info


Service Stop (this will take in data and click snapshot );
Waypoint

Admin
  


