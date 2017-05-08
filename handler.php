<?php

$con = mysqli_connect('localhost', 'root', '', 'ajax-crud');

$query = mysqli_query($con, "SELECT * FROM users");

foreach($query as $data){
    echo '<tr>';
    echo '<td>' . $data . '</td>';
    echo '</tr>';
}
