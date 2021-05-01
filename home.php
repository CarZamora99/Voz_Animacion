<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font Awesome -->
    <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet"/>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"/>
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css" rel="stylesheet" />
    <style>
  #search-form button {
  background-color: white;
  color: #0079F3;
  border: 2px solid #0079F3;
  padding: 10px 30px; 
  border-radius: 50%;
}
</style>
    <title>Inicio</title>
</head>
<body>
    <!--Navbar-->
<!-- As a heading -->
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand mb-0 h1 text-light" href="index.html">Animación por Voz</a>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a data-scroll class="nav-link active text-light" href="home.php" >Home</a>
            <a data-scroll class="nav-link active text-light" href="ayuda.html" >Ayuda del sitio</a>
          </div>
        </div>
      </div>
    </nav>

  <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-6">
					<div class="row">
						<div class="col-md-12">
            <div class="p-1"></div> 
            <h2 style="color: #FF0000;" align="center">Subir imagen</h2>
            <div class="p-1"></div>
            <p>Ingresa la URL de la imagen respectiva</p>
                <form action="home.php" method="post">
                <div class="form-outline">
                <input type="text" id="typeText" name="URL" class="form-control form-control-lg" />
              <label class="form-label" for="typeText">Ingresa dirección imagen</label>
                </div>
                <div class="p-1"></div>
                <button type="submit" class="btn btn-primary btn-block">Buscar</button>
                </form>
						</div>
					</div>
          <div class="p-3"></div>
					<div class="row">
						<div class="col-md-12 text-center">
            <h2 style="color: #CB4335;" align="center">Animación por Voz</h2>
            <div class="p-1"></div>
            <form action="https:/" method="get" target="_blank" id="search-form">
        <div class="form-outline">
        <input class="form-control" name="q" type="text" value="Comando.." autocomplete="off" autofocus>
<!--         <button type="button"><i class="fas fa-microphone"></i></button> -->     
          <div class="col-md-5 p-2">
          </div>
        </div>
      </form>
      <div class="p-1"></div>
      <p class="info" style="color: black"><strong>Comandos de Voz:</strong></p>
      <ul align="left">
        <li>Derecha</li>
        <li>Parpadeo</li>
        <li>Salta</li>
        <li>Respiración</li>
        <li>Arriba</li>
        <li>Izquierda</li>
        <li>Abajo</li>
        <li>Gira</li>
        <li>Gira crece</li>
        <li>Mortal</li>
        <li>Ayuda del sitio</li>
        <li>Salir del sitio</li>
      </ul>
      <div class="p-5"></div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
        <div class="p-1"></div> 
          <h1 style="color: #3A5FD3;" align="center">Ver Animación</h1>
          <div class="p-5"></div>
        <div class="ball d-flex justify-content-center">
        <img width="200px" height="200px" src="<?php 
        if(empty($_POST['URL'])){
          echo 'https://agroworldspain.com/img/noimage.png';
        } 
        else{
        echo $_POST['URL'];
        }
        ?>">
        </div>
				</div>
			</div>
		</div>
	</div>
</div>

      <!--Footer-->
      <div class="fixed-bottom">
        <footer class="bg-dark text-center text-lg-start">
            <!-- Copyright -->
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            <p class="text-light" >© 2021 Copyright: Carlos Zamora</p>
            </div>
            <!-- Copyright -->
        </footer>
    </div>

    <span class="ir-arriba icon-arrow-up2"></span>
  <!-- Librerias de Animación -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"></script>
   <!-- partial -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.6.2/web-animations.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/just-animate/2.6.2/just-animate-all.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/just-animate/2.6.2/just-animate-tools.min.js'></script>
<script  src="./script.js"></script>
    <!-- MDB -->
<script type="text/javascript"src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"></script>
</body>
</html>