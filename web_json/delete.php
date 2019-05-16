<?php
    include_once 'database.php';

    header('Content-Type: application/json');
    $id = $_POST["id"];

    $delete_db = mysqli_query($mysql, 'DELETE FROM pengunjung WHERE id = '.$id);

    if($delete_db){
        $response["success"] = true;
        $response["message"] = "Berhasil menghapus data";
    
        echo json_encode($response);
    }else{
        $response["success"] = false;
        $response["message"] = "Gagal menghapus data";

        echo json_encode($response);
    }