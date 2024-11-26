<script>
    import '$lib/CSS/servicios.css'
    import imagen1 from "$lib/IMAGES/images/Imagen1.png"
    import imgexamen from '$lib/IMAGES/images/exams-concept-illustration_114360-2754.avif'
    import imgcolegio from '$lib/IMAGES/images/college-students-concept-illustration_114360-10205.avif'

</script>

<nav class="navbar">
    <div class="logo">
    <h4>SOCIOLAB🌎</h4>
    </div>
    <ul class="nav-links">
      
        <li><a href="/temas" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Inicio</a></li>
        <li><a href="/sobre_nosotros" data-sveltekit-preload-data="tap" data-sveltekit-reload>nosotros</a></li>
        
 
       
    </ul>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</nav>

<main class="services">
    <div class="container">
        <h1>Nuestros Servicios</h1>
        <div class="services-grid">
            <div class="service-card">
                <img src={imagen1} alt="Diseño Web">
                <h2>Educacion </h2>
                <p>Buscamos formar personas las cuales tengan bases en el área de sociales que sirvan para distintas pruebas que se presenten en la vida, como por ejemplos las pruebas ICFES.
                </p>
            </div>
            <div class="service-card">
                <img src={imgexamen} alt="Desarrollo de Aplicaciones">
                <h2>Preparacion</h2>
                <p>La intención de SocioLab es preparar y enseñar a estudiantes para que adquieran el conocimiento necesario del ámbito social para pruebas o actividades donde se requiera y que es necesario para salir a la vida.
                </p>
            </div>
            <div class="service-card">
                <img src={imgcolegio} alt="Marketing Digital">
                <h2>Futuro</h2>
                <p>SocioLab planea preparar a los distintos estudiantes con la información necesaria para poder obtener buenos puntajes en pruebas donde se requiera el conocimiento, de igual manera se proyecta como una herramienta de la institución en la que se encuentre para así poder beneficiar a los estudiantes.</p>
            </div>
           
        </div>
    </div>
</main>

<footer>
    <div class="container">
        <p>&copy; 2024 SOCIOLAB🌎. Todos los derechos reservados.</p>
    </div>
</footer>