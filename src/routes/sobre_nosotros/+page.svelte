<script>
    import '$lib/CSS/sobre_nosotros.css'
    import globo from '$lib/IMAGES/images/globo.jpg'
    import estu from '$lib/IMAGES/images/ilustracion-concepto-leccion-geografia_114360-19843.jpg'
    import equipo from '$lib/IMAGES/images/ilustracion-vector-concepto-educacion_109722-3616.jpg'
    import mision from '$lib/IMAGES/images/fondo-plano-concepto-universitario_52683-11176.avif'

</script>
<nav class="navbar">
    <div class="logo">
    <h4>SOCIOLAB🌎</h4>
    </div>
    <ul class="nav-links">
        <li><a href="/" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Inicio</a></li>
        <li><a href="/servicios" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Servicios</a></li>
       
    </ul>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</nav>

<main>
    <section id="inicio" class="section">
        <div class="section-text">
            <h1 class="typing">Sobre Nosotros</h1>
            <p>¡Bienvenidos a SOCIOLAB! Somos un equipo de estudiantes de la Carlos Vieco Ortiz dedicados a proporcionar ayudas visuales, información concreta y actividades para así generar un beneficio en los estudiantes que nos visualicen y requieran del estudio de los temas del área de sociales que se encuentren en la página.</p>
        </div>
        <div class="section-image">
            <img src={globo} alt="Equipo de trabajo" class="floating">
        </div>
    </section>

    <section id="historia" class="section">
        <div class="section-text">
            <h2 class="typing">Nuestra Historia</h2>
            <p>SOCIOLAB fue creada en el año 2023 a partir de la creatividad de 4 estudiantes que debían decidir un tema para su página de la media técnica. En el 2024 el proyecto ha crecido a partir de los conocimientos entregados por parte de los docentes del Pascual Bravo y de la Carlos Vieco Ortiz, permitiendo que los estudiantes avancen en la creación  de SOCIOLAB y así, innoven y beneficien a los demás estudiantes de la institución.</p>
        </div>
        <div class="section-image">
            <img src={estu} alt="Línea de tiempo de la empresa" class="floating">
        </div>
    </section>

    <section id="equipo" class="section">
        <div class="section-text">
            <h2 class="typing">Nuestro Equipo</h2>
            <p>SOCIOLAB cuenta con un equipo formado por 4 estudiantes de la Carlos Vieco Ortiz. Nos presentamos, somos Samuel Deosa de 16 años, Alejandro Guisao de 17 años, Sarah Restrepo de 16 años y Yhosselin Ríos de 17 años. Somos un equipo que tiene diversas habilidades y que está comprometido con reaizar un excelente trabajo que le permita a los demás estudiantes aprender y adquirir conocimientos que serán necesarios en su vida estudiantil o a la hora de realizar pruebas como por ejemplos las ICFES.</p>
        </div>
        <div class="section-image">
            <img src={equipo} alt="Miembros del equipo" class="floating">
        </div>
    </section>

    <section id="mision" class="section">
        <div class="section-text">
            <h2 class="typing">Nuestra Misión</h2>
            <p>Nuestra misión es proporcionar información de alta calidad que impulse el aprendizaje y las habilidades en el área de sociales de los estudiantes que accedan a la página con el objetivo de que se preparen para los últimos grados de bachillerato y a su vez para múltiples pruebas que se puedan presentar.</p>
        </div>
        <div class="section-image">
            <img src={mision}  alt="Representación de nuestra misión" class="floating"  style="height: 2500px; width: auto;">
        </div>
    </section>
</main>

<footer>
    <p>&copy; 2024 SOCIOLAB. Todos los derechos reservados.</p>
</footer>