<?php
    include_once 'database.php';

    header('Content-Type: application/json');
    $id = $_POST["id"];
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $no_telp = $_POST["no_telp"];
    $kesan = $_POST["kesan"];

    $update_db = mysqli_query($mysql, 'UPDATE pengunjung SET nama = "'.$nama.'", email = "'.$email.'", no_telp = "'.$no_telp.'", kesan = "'.$kesan.'" WHERE id = '.$id);

    if($update_db){
        $response["success"] = true;
        $response["message"] = "Berhasil mengedit data";
        $response["data"]["id"] = $id;
        $response["data"]["nama"] = $nama;
        $response["data"]["email"] = $email;
        $response["data"]["no_telp"] = $no_telp;
        $response["data"]["kesan"] = $kesan;
    
        echo json_encode($response);
    }else{
        $response["success"] = false;
        $response["message"] = "Gagal mengedit data";

        echo json_encode($response);
    }