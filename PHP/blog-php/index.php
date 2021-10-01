<?php

require 'admin/config.php';
require 'functions.php';

// Asi es nuestro codigo antes de hacer una funcion para conectarnos a la base de datos.

// try {
// 	$conexion = new PDO('mysql:host=localhost;dbname='.$bd_config['basedatos'], $bd_config['usuario'], $bd_config['pass']);
// 	$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// // Prepared Statement
// 	// 1.- Preparamos nuestra sentencia SQL
// 	$statement = $conexion->prepare('SELECT * FROM articulos');

// 	// 2.- Ejecutamos
// 	$statement->execute();
// 	$resultados = $statement->fetchAll();
	

// } catch (PDOException $e) {
// 	echo 'ERROR:' . $e->getMessage();
// 	// Si hay algun error podemos redirigir al usuario a una pagina de error

// 	header('Location: error.php');
// 	die('Problemas con la conexion');
// }

$conexion = conexion($bd_config);

if (!$conexion) {
	header('Location: error.php');
}

# Este codigo es el que usaremos antes de programar la paginacion

// $sentencia = $conexion->prepare("SELECT * FROM articulos LIMIT $post_por_pagina");
// $sentencia->execute();
// $posts = $sentencia->fetchAll();

// Traemos los post dependiendo de cuantos por pagina y en que pagina nos encontremos

// 2.- Convertimos todo el codigo en funciones para poder reutilizarlas en la paginacion del admin

// Obtenemos los post
$posts = obtener_post($blog_config['post_por_pagina'], $conexion);

// Si no hay post entonces redirigimos
if(!$posts){
	header('Location: error.php');
}

require 'views/index.view.php';

?>