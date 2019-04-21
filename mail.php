<?php

$recepient = "sudakov5@yandex.ru";
$sitename = "Akvanale";

$name = trim($_POST["name"]); // поля формы 
$phone = trim($_POST["phone"]);
$question = trim($_POST["question"]);
$hidden = trim($_POST["hidden"]);
$message = "Имя: $name \nТелефон: $phone \nСообщение: $question \nОткуда поступила заявка: $hidden";

$pagetitle = "Новая заявка с сайта \"$sitename\"";

 

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
