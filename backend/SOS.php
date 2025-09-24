<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("sosData.json"), true);

$input = json_decode(file_get_contents("php://input"), true);
$city = $input['city'] ?? "";

if (!$city) {
    echo json_encode([
        "status" => "error",
        "message" => "No city provided"
    ]);
    exit;
}

$city = ucfirst(strtolower(trim($city)));

if (array_key_exists($city, $data)) {
    echo json_encode([
        "status" => "success",
        "city" => $city,
        "contacts" => $data[$city]
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "City not found in database"
    ]);
}
?>
