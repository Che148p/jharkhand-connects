<?php
header("Content-Type: application/json");

// Load SOS data
$dataFile = "sosData.json";

if (!file_exists($dataFile)) {
    echo json_encode([
        "status" => "error",
        "message" => "SOS data file not found."
    ]);
    exit;
}

$data = json_decode(file_get_contents($dataFile), true);

// Read input
$input = json_decode(file_get_contents("php://input"), true);
$city = $input['city'] ?? "";

if (empty($city)) {
    echo json_encode([
        "status" => "error",
        "message" => "No city provided."
    ]);
    exit;
}

// Normalize city name
$city = ucfirst(strtolower(trim($city)));

// Check if city exists in data
if (array_key_exists($city, $data)) {
    echo json_encode([
        "status" => "success",
        "city" => $city,
        "contacts" => $data[$city]
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "City not found in database."
    ]);
}
?>
