<?php require '../views/header.php'; ?>
<div class="contenedor">
	<h2>Panel de Control</h2>
	<a href="nuevo.php" class="btn">Nuevo Post</a>
	<a href="cerrar.php" class="btn">Cerrar Sesion</a>

	<?php foreach($posts as $post): ?>
	<section class="post">
		<article>
			<h2 class="titulo"><?php echo $post['id'] . '.- ' . $post['titulo']; ?></h2>
			<a href="editar.php?id=<?php echo $post['id']; ?>">Editar</a>
			<a href="../single.php?id=<?php echo $post['id']; ?>">Ver</a>
			<a href="borrar.php?id=<?php echo $post['id']; ?>">Borrar</a>
		</article>
	</section>
	<?php endforeach; ?>
</div>

<?php require '../paginacion.php'; ?>

<?php require '../views/footer.php'; ?>