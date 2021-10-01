<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>Blog con PHP y MySQL</title>
	<link rel="stylesheet" href="<?php echo RUTA; ?>/css/estilos.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
</head>
<body>
	<header>
		<div class="contenedor">
			<div class="logo izquierda">
				<p><a href="<?php echo RUTA; ?>">Blog con PHP y MySQL</a></p>
			</div>

			<div class="derecha">
				<form action="<?php echo RUTA; ?>/buscar.php" method="get" name="busqueda" class="buscar">
					<input type="text" name="busqueda" placeholder="Buscar">
					<button type="submit" class="icono fa fa-search"></button>
				</form>
				
				<nav class="menu">
					<ul>
						<li>
							<a href="https://www.instagram.com/reinaldo1515/?hl=es-la" target="_blank"><i class="fa fa-instagram"></i></a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/reinaldo-m%C3%A1rquez-5b4a24113/" target="_blank"><i class="fa fa-linkedin"></i></a>
						</li>
						<li><a href="login.php">Iniciar Sesion<i class="icono fa fa-user"></i></a></li>
					</ul>
				</nav>
			</div>
			
		</div>
	</header>