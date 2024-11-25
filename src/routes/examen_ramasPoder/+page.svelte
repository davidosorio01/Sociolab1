<script>
	import '$lib/CSS/examen_ramasPoder.css';
	import uno from '$lib/IMAGES/img_ramaPoder/1.jpeg';
	import dos from '$lib/IMAGES/img_ramaPoder/2.jpeg';
	import tres from '$lib/IMAGES/img_ramaPoder/3.jpeg';

	let activeTab = 'video';

	let nombre = '';
	let email = '';
	let respuestas = {}; // Almacenar las respuestas del usuario
	let correctas = 0;
	let incorrectas = 0;
	let mensajeResultado = '';
	let mostrarResultado = false;

	// Respuestas correctas
	const correctAnswers = {
		q1: 'c', // El asesinato del archiduque Francisco Fernando
		q2: 'b', // Aliados: Francia, Reino Unido, Rusia, EE.UU.; Potencias Centrales: Alemania, Austria-Hungría, Imperio Otomano, Bulgaria
		q3: 'a', // Nacionalismo, militarismo, imperialismo y alianzas
		q4: 'c', // Guerra de trincheras
		q5: 'a', // Tratado de Versalles; sancionó duramente a Alemania
		q6: 'b', // Crisis económica y devastación en muchos países europeos
		q7: 'c', // Porque generaron resentimiento en Alemania, facilitando el ascenso del nazismo
		q8: 'c', // Alemania, Italia y Japón
		q9: 'a', // Inició la Guerra Fría
		q10: 'c' // La ONU
	};

	// Preguntas y opciones
	const preguntas = [
		{
			id: 'q1',
			texto: '¿Qué evento fue el detonante de la Primera Guerra Mundial?',
			opciones: {
				a: 'La invasión de Polonia',
				b: 'El bombardeo de Pearl Harbor',
				c: 'El asesinato del archiduque Francisco Fernando',
				d: 'La Revolución Rusa'
			}
		},
		{
			id: 'q2',
			texto: '¿Cuáles fueron las principales alianzas en la Primera Guerra Mundial?',
			opciones: {
				a: 'Aliados: Alemania, Austria-Hungría; Potencias Centrales: Francia, Reino Unido',
				b: 'Aliados: Francia, Reino Unido, Rusia, EE.UU.; Potencias Centrales: Alemania, Austria-Hungría, Imperio Otomano, Bulgaria',
				c: 'Aliados: Italia, Alemania, Japón; Potencias Centrales: Rusia, China',
				d: 'Aliados: España, Portugal; Potencias Centrales: Francia, Italia'
			}
		},
		{
			id: 'q3',
			texto: '¿Cuáles fueron las principales causas de la Primera Guerra Mundial?',
			opciones: {
				a: 'Nacionalismo, militarismo, imperialismo y alianzas',
				b: 'Industrialización y globalización',
				c: 'Descubrimientos científicos',
				d: 'Reformas económicas y políticas'
			}
		},
		{
			id: 'q4',
			texto: '¿Qué tipo de guerra caracterizó la Primera Guerra Mundial?',
			opciones: {
				a: 'Guerra naval',
				b: 'Guerra aérea',
				c: 'Guerra de trincheras',
				d: 'Guerra cibernética'
			}
		},
		{
			id: 'q5',
			texto: '¿Qué tratado puso fin a la Primera Guerra Mundial?',
			opciones: {
				a: 'El Tratado de Versalles; sancionó duramente a Alemania',
				b: 'El Tratado de París',
				c: 'El Tratado de Roma',
				d: 'El Pacto de Varsovia'
			}
		},
		{
			id: 'q6',
			texto: '¿Qué efectos tuvo la Primera Guerra Mundial en Europa?',
			opciones: {
				a: 'Aumento de las reservas de oro',
				b: 'Crisis económica y devastación en muchos países europeos',
				c: 'Crecimiento demográfico',
				d: 'Unificación inmediata de Europa'
			}
		},
		{
			id: 'q7',
			texto:
				'¿Por qué se dice que las consecuencias de la Primera Guerra Mundial prepararon el terreno para la Segunda Guerra Mundial?',
			opciones: {
				a: 'Porque fortalecieron la democracia',
				b: 'Porque estimularon el comercio internacional',
				c: 'Porque generaron resentimiento en Alemania, facilitando el ascenso del nazismo',
				d: 'Porque promovieron la neutralidad global'
			}
		},
		{
			id: 'q8',
			texto: '¿Qué países formaron las Potencias del Eje en la Segunda Guerra Mundial?',
			opciones: {
				a: 'Reino Unido, Francia y China',
				b: 'EE.UU., la Unión Soviética y Brasil',
				c: 'Alemania, Italia y Japón',
				d: 'Australia, India y Canadá'
			}
		},
		{
			id: 'q9',
			texto: '¿Qué ocurrió inmediatamente después de la Segunda Guerra Mundial?',
			opciones: {
				a: 'Inició la Guerra Fría',
				b: 'Hubo una segunda revolución industrial',
				c: 'Se firmó un tratado de paz con todas las naciones involucradas',
				d: 'Se disolvió la ONU'
			}
		},
		{
			id: 'q10',
			texto:
				'¿Qué organismo internacional se fundó tras la Segunda Guerra Mundial para promover la paz?',
			opciones: {
				a: 'La OTAN',
				b: 'El Pacto de Varsovia',
				c: 'La ONU',
				d: 'La Unión Europea'
			}
		}
	];

	function enviarExamen(event) {
		event.preventDefault();
		correctas = 0;
		incorrectas = 0;

		preguntas.forEach(({ id }) => {
			if (respuestas[id] === correctAnswers[id]) {
				correctas++;
			} else {
				incorrectas++;
			}
		});

		mensajeResultado = `
            Nombre: ${nombre}
            Correo: ${email}
            
            Correctas: ${correctas}
            Incorrectas: ${incorrectas}
        `;

		mostrarResultado = true;
	}

	function openTab(tab) {
		activeTab = tab;
	}
</script>

<!-- Navbar -->
<nav class="navbar">
	<div class="logo">
		<h4>SOCIOLAB🌎</h4>
	</div>
	<ul class="nav-links">
		<li>
			<a href="/temas" data-sveltekit-preload-data="tap" data-sveltekit-reload class="nav-item"
				>Inicio</a
			>
		</li>
		<li><a href="/sobre_nosotros" class="nav-item">Nosotros</a></li>
		<li><a href="/" class="nav-item">Contacto</a></li>
	</ul>
	<div class="burger">
		<div class="line1"></div>
		<div class="line2"></div>
		<div class="line3"></div>
	</div>
</nav>

<!-- Content Section with Tabs -->
<div class="content">
	<div class="tabs">
		<button class="tab {activeTab === 'video' ? 'active' : ''}" on:click={() => openTab('video')}>
			Video
		</button>
		<button class="tab {activeTab === 'pdf' ? 'active' : ''}" on:click={() => openTab('pdf')}>
			Información
		</button>
		<button class="tab {activeTab === 'examen' ? 'active' : ''}" on:click={() => openTab('examen')}>
			Examen
		</button>
	</div>

	<!-- Video Tab -->
	{#if activeTab === 'video'}
		<div id="video" class="tab-content active">
			<h2>VIDEO DE APOYO</h2>
			<p>Observa atentamente el video.</p>
			<iframe
				width="100%"
				height="480"
				src="https://www.youtube.com/embed/epDBRxITROg"
				title="Las Ramas del Poder Público"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	{/if}

	<!-- PDF Tab -->
	{#if activeTab === 'pdf'}
		<div class="tab-content active">
			<h1>Ramas del Poder Público</h1>
			<p>
				Las ramas del poder público son el conjunto de instituciones que ejercen las funciones del
				Estado de manera permanente...
			</p>

			<!-- Executive Branch Section -->
			<h2>Rama Ejecutiva</h2>
			<img src={uno} alt="Imagen de la Rama Ejecutiva" style="width:100%; height:auto;" />
			<p>
				Es la responsable de la implementación y ejecución de las leyes y políticas del Estado...
			</p>

			<h3>¿Quiénes conforman la rama Ejecutiva?</h3>
			<p>Está representada por el presidente de la República...</p>

			<h3>Funciones de la Rama Ejecutiva:</h3>
			<ul>
				<li>Promover el desarrollo económico y social del país.</li>
				<li>Garantizar la seguridad y el orden público.</li>
				<li>Dirigir la política exterior y representar al país en el ámbito internacional.</li>
				<li>Administrar los recursos y presupuestos del Estado.</li>
				<li>Ejecutar las decisiones judiciales.</li>
			</ul>

			<!-- Legislative Branch Section -->
			<h2>Rama Legislativa</h2>
			<img src={dos} alt="Imagen de la Rama Legislativa" style="width:100%; height:auto;" />
			<p>Se encarga de la elaboración y aprobación de leyes...</p>

			<h3>¿Quiénes conforman la rama Legislativa?</h3>
			<p>Está conformada por el Congreso de la República, que se divide en dos...</p>

			<h3>Funciones de la Rama Legislativa:</h3>
			<ul>
				<li>
					Elaborar, discutir y aprobar leyes que regulan la convivencia y el funcionamiento del
					Estado.
				</li>
				<li>Representar a los ciudadanos y sus intereses en el ámbito legislativo.</li>
				<li>Ejercer el control político sobre el Gobierno y las entidades estatales.</li>
				<li>
					Fiscalizar el manejo de los recursos públicos y promover la transparencia en la gestión
					pública.
				</li>
			</ul>

			<!-- Judicial Branch Section -->
			<h2>Rama Judicial</h2>
			<img src={tres} alt="Imagen de la Rama Judicial" style="width:100%; height:auto;" />
			<p>Responsable de administrar justicia y garantizar el cumplimiento de las leyes...</p>

			<h3>¿Quiénes conforman la rama Judicial?</h3>
			<p>Está integrada por la Corte Suprema de Justicia, la Corte Constitucional...</p>

			<h3>Funciones de la Rama Judicial:</h3>
			<ul>
				<li>Administrar justicia de manera independiente e imparcial.</li>
				<li>Resolver conflictos legales y aplicar las leyes vigentes.</li>
				<li>Proteger los derechos fundamentales de los ciudadanos.</li>
				<li>Velar por el cumplimiento de las decisiones judiciales.</li>
			</ul>

			<h2>Bibliografía</h2>
			<p>
				<a
					href="https://programas.uniandes.edu.co/blog/ramas-del-poder-publico#:~:text=Se%20dividen%20en%20Ejecutiva%2C%20Legislativa,y%20la%20separaci%C3%B3n%20de%20poderes"
					>Enlace a la fuente</a
				>
			</p>
		</div>
	{/if}

	<!-- Exam Tab -->
	{#if activeTab === 'examen'}
		<div class="tab-content active">
			{#if !mostrarResultado}
				<form on:submit={enviarExamen}>
					<label for="nombre">Nombre:</label>
					<input type="text" id="nombre" bind:value={nombre} required />

					<label for="email">Correo Electrónico:</label>
					<input type="email" id="email" bind:value={email} required />

					{#each preguntas as { id, texto, opciones }, index}
						<div class="question">
							<p>{index + 1}. {texto}</p>
							<div class="options">
								{#each Object.entries(opciones) as [key, value]}
									<label>
										<input
											type="radio"
											name={id}
											value={key}
											bind:group={respuestas[id]}
											required
										/>
										{value}
									</label>
								{/each}
							</div>
						</div>
					{/each}

					<button type="submit">Enviar Examen</button>
				</form>
			{:else}
				<div>
					<h2>Resultados del Examen</h2>
					<pre>{mensajeResultado}</pre>
					<button on:click={() => (mostrarResultado = false)}>Volver</button>
				</div>
			{/if}
		</div>
	{/if}
</div>
