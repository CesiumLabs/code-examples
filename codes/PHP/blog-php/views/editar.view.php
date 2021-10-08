<?php require 'header.php'; ?>

	<div class="contenedor">
		<div class="post">
			<article>
				<h2 class="titulo">Editar</h2>
				<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" class="formulario" enctype="multipart/form-data" method="post">
					<input type="hidden" name="id" value="<?php echo $post['id']; ?>">
					<input type="text" name="titulo" value="<?php echo $post['titulo'] ?>">
					<input type="text" name="extracto" value="<?php echo $post['extracto']; ?>">
					<textarea name="texto"><?php echo $post['texto']; ?></textarea>
					<input type="file" name="thumb">
					<input type="hidden" name="thumb-guardada" value="<?php echo $post['thumb']; ?>">

					<input type="submit" value="Guardar Datos">
				</form>
			</article>
		</div>
	</div>

<?php require 'footer.php'; ?>