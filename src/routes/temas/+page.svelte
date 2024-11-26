<script>
	import '$lib/CSS/temas.css';

	// Importamos imágenes
	import imagenWpp from '$lib/IMAGES/img_temas/Imagen_de_WhatsApp_2024-10-31_a_las_11.07.24_227c309c-removebg-preview.png';
	import guerra from '$lib/IMAGES/img_temas/guerrasmundiales.jpg';
	import participacion from '$lib/IMAGES/img_temas/participacion.png';
	import tratado from '$lib/IMAGES/img_temas/tratado.webp';
	import fria from '$lib/IMAGES/img_temas/guerrafria.webp';
	import depresion from '$lib/IMAGES/img_temas/depresion.png';
	import ramas from '$lib/IMAGES/img_temas/ramasdepoder.jpg';

	// Array de temas
	const temas = [
		{
			id: 1,
			titulo: 'GUERRAS MUNDIALES',
			descripcion: 'Dos conflictos épicos que moldearon el rumbo de la humanidad, cambiando para siempre nuestras ideas de paz, poder y progreso. Conoce las causas, las grandes batallas y las profundas consecuencias de estas guerras.',
			imagen: guerra,
			enlace: '/examen_guerraM'
		},
		{
			id: 2,
			titulo: 'MECANISMOS DE PARTICIPACION',
			descripcion:
				'En esta sección, descubrirás las herramientas y espacios que te permiten ser un ciudadano activo. Desde el voto hasta los cabildos abiertos, entenderás cómo influir en las decisiones que construyen nuestro país.',
			imagen: participacion,
			enlace: '/examen_mecanismos'
		},
		{
			id: 3,
			titulo: 'TRATADO DE VERSALLES',
			descripcion: 'Un pacto que prometió el fin de la Primera Guerra Mundial, pero terminó sembrando la semilla de nuevas tensiones. Aquí verás sus términos, sus promesas, y el impacto que tuvo en el mapa político mundial.',
			imagen: tratado,
			enlace: '/examen_tratadov'
		},
		{
			id: 4,
			titulo: 'LA GUERRA FRIA',
			descripcion: 'Una batalla sin armas entre dos potencias. Conoce cómo Estados Unidos y la Unión Soviética compitieron en ideología, tecnología y poder, creando una era de tensiones globales que nos afectó a todos.',
			imagen: fria,
			enlace: '/examen_guerraF'
		},
		{
			id: 5,
			titulo: 'LA GRAN DEPRESION',
			descripcion: 'La crisis económica que paralizó al mundo. Explora cómo una caída en la bolsa de valores desencadenó una crisis sin precedentes, afectando a millones de personas y dando origen a nuevas políticas.',
			imagen: depresion,
			enlace: '/examen_gran_depresion'
		},
		{
			id: 6,
			titulo: 'RAMAS DE PODER PUBLICO',
			descripcion: 'Cómo se organiza el poder en Colombia? Aquí descubrirás las tres ramas que lo componen: Ejecutiva, Legislativa y Judicial, y cómo trabajan juntas para dirigir el país.',
			imagen: ramas,
			enlace: '/examen_ramasPoder'
		}
	];

	let searchQuery = ''; // Query del buscador
	let temasFiltrados = temas; // Temas filtrados por el buscador

	// Función para manejar el buscador
	function handleSearch() {
		temasFiltrados = temas.filter(
			(tema) =>
				tema.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
				tema.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}
</script>

<nav class="navbar">
	<div class="logo">
		<h4>SOCIOLAB🌎</h4>
	</div>
	<ul class="nav-links">
		<li>
			<div class="search-container">
				<input
					type="text"
					class="search-input"
					placeholder="Buscar..."
					bind:value={searchQuery}
					on:input={handleSearch}
				/>
				<button class="search-button">Buscar</button>
			</div>
		</li>
		<li>
			<a href="/" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Inicio</a
			>
		</li>
		<li>
			<a
				href="/sobre_nosotros"
				class="nav-item"
				data-sveltekit-preload-data="tap"
				data-sveltekit-reload>Sobre nosotros</a
			>
		</li>
		<li>
			<a href="/servicios" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload
				>Servicios</a
			>
		</li>
	</ul>
</nav>

<main>
	<section class="hero">
		<div class="container">
			<div class="hero-content">
				<img src={imagenWpp} alt="Imagen principal" class="hero-image" />
				<div class="hero-text">
					<h1>¡Bienvenido a tu nueva aventura en Ciencias Sociales! 🌎✨</h1>
					<p>Aquí podrás explorar temas apasionantes, ver videos, leer información clave, y poner a prueba tus conocimientos con exámenes interactivos. ¿Listo para sumergirte en el conocimiento? ¡Vamos a empezar! 🚀📚</p>
				</div>
			</div>
		</div>
	</section>

	<section class="options">
		<div class="container">
			<h2>NUESTROS TEMAS 🌍🎓📖</h2>
			<div class="options-grid">
				{#each temasFiltrados as tema}
					<div class="option-card">
						<img src={tema.imagen} alt={tema.titulo} class="option-image" />
						<div class="option-content">
							<h3>{tema.titulo}</h3>
							<p>{tema.descripcion}</p>
							<a href={tema.enlace} data-sveltekit-preload-data="tap" data-sveltekit-reload>
								<button class="btn">Entrar</button>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>

<footer>
	<div class="container">
		<p>&copy; 2024 SOCIOLAB. Todos los derechos reservados.</p>
	</div>
</footer>

<style>
	.option-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 400px; /* Fijar ancho */
		height: 600px; /* Fijar altura */
		margin: 1rem;
		padding: 1rem;
		border: 1px solid #ddd;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		background-color: #fff;
		transition: transform 0.2s;
	}

	.option-card img {
		width: 100%;
		height: 200px; /* Fijar altura de imagen */
		object-fit: cover; /* Asegura que la imagen se ajuste bien */
		border-radius: 5px;
	}

	.option-card h3 {
		font-size: 1.25rem;
		margin: 0.5rem 0;
		text-align: center;
	}

	.option-card p {
		font-size: 0.9rem;
		text-align: center;
		flex-grow: 1; /* Mantiene el texto distribuido */
		overflow: hidden; /* Evita desbordamiento */
		text-overflow: ellipsis; /* Texto largo se corta */
		line-clamp: 3; /* Muestra máximo 3 líneas (con soporte moderno) */
	}

	.option-card .btn {
		display: inline-block;
		background-color: #f03a9e;
		padding: 13px 30px;
		border-radius: 25px;
		color: black;
		text-transform: capitalize;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
		margin-top: 30px;
	}

	.option-card .btn:hover {
		background-color: aqua;
	}
	
</style>
