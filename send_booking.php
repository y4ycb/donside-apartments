<?php
// send_booking.php
// Принимает JSON { "message": "..." } и шлёт его в Telegram в несколько чатов

header('Content-Type: application/json; charset=utf-8');

// Читаем JSON-данные из тела запроса
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

// Проверяем, что есть поле message
if (!$data || empty($data['message'])) {
    http_response_code(400);
    echo json_encode([
        'ok'    => false,
        'error' => 'No message field in request',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$message = $data['message'];

// ====== НАСТРОЙКИ TELEGRAM ======
// TODO: вставь сюда РЕАЛЬНЫЙ токен бота
$botToken = '8569135069:AAGxg4hOGcSIaemwy1vusiHfNbkTflV5sKk';

// Список всех чатов, куда слать заявки:
// - твой личный ID
// - ID группы (отрицательный, с -100...)
$chatIds = [
    '2121761373',      // личный
    '-1003253038474',  // группа DonSide
];
// ===============================

// Базовый URL Telegram API
$apiUrl = "https://api.telegram.org/bot{$botToken}/sendMessage";

// Отправляем сообщение во все чаты
$okAll = true;

foreach ($chatIds as $chatId) {
    $params = [
        'chat_id'    => $chatId,
        'text'       => $message,
        'parse_mode' => 'HTML', // можно оставить, даже если без HTML-разметки
    ];

    $ch = curl_init($apiUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200) {
        $okAll = false;
        // при желании здесь можно логировать $response или $httpCode
    }
}

// Возвращаем ответ фронту
if ($okAll) {
    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
} else {
    http_response_code(500);
    echo json_encode([
        'ok'    => false,
        'error' => 'Telegram error for one or more chatIds',
    ], JSON_UNESCAPED_UNICODE);
}