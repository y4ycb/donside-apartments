<?php

// Лог в файл

$logFile = '/var/www/u3333878/data/deploy.log';

file_put_contents($logFile, "=== Deploy at ".date('Y-m-d H:i:s')." ===\n", FILE_APPEND);


// Разрешаем только POST

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {

    file_put_contents($logFile, "Only POST allowed\n", FILE_APPEND);

    echo "Only POST allowed";

    exit;

}


$payload = file_get_contents('php://input');

file_put_contents($logFile, "Payload: $payload\n", FILE_APPEND);


// Переходим в папку сайта из-под пользователя

$repoPath = '/var/www/u3333878/data/www/donside.ru';


chdir($repoPath);


// Выполняем git pull

exec("git pull 2>&1", $output, $returnCode);


file_put_contents($logFile, "Git output:\n".implode("\n", $output)."\n\n", FILE_APPEND);


// Ответ GitHub

echo json_encode([

    "ok" => $returnCode === 0,

    "output" => $output

]);
