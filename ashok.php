
<?php
echo "First PHP Program on XAMP Mac OS\n";
echo "<br>";
$servername = "localhost";
$username   = "root";
//$password   = "";
$dbname = "ashokDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    echo "<br>";
    die("Connection failed: " . mysqli_connect_error());
  }
  echo "Connected successfully\n";
  echo "<br>";

/* Create database
$sql = "CREATE DATABASE ashokDB";
if ($conn->query($sql) === TRUE) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . $conn->error;
}

// select DB
$db = "use ashokDB";
if ( $conn->query($db) === TRUE) {
    echo "SELECTED ashokDB successfully";
} else {
    echo "ERROR SELECTING ashokDB " . $conn->Error;
}

// sql to create table
$sql = "CREATE TABLE MyGuests (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
  } else {
    echo "Error creating table: " . $conn->error;
  }


$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John1', 'Doe1', 'john1@example.com')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
*/

$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
  }
} else {
  echo "0 results";
}

mysqli_close($conn)

?>