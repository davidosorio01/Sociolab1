<script>
	import '$lib/CSS/examen_guerraF.css';
	import guerra from '$lib/IMAGES/img_examen_guerraF/guerra-fria.jpeg';
	let activeTab = 'video';

	let nombre = '';
	let email = '';
	let respuestas = {}; // Almacenar las respuestas del usuario
	let correctas = 0;
	let incorrectas = 0;
	let mensajeResultado = '';
	let mostrarResultado = false;

	const preguntas = [
		{
			id: 'q1',
			texto: '¿Qué período histórico abarca la Guerra Fría?',
			opciones: {
				a: '1945-1980',
				b: '1947-1991',
				c: '1939-1945',
				d: '1950-1975'
			},
			correcta: 'b'
		},
		{
			id: 'q2',
			texto: '¿Cuáles eran los dos bloques principales en la Guerra Fría?',
			opciones: {
				a: 'Liberal y autoritario',
				b: 'Occidental y oriental',
				c: 'Capitalista y socialista',
				d: 'Democrático y totalitario'
			},
			correcta: 'c'
		},
		{
			id: 'q3',
			texto: '¿Qué evento se considera el inicio del conflicto que dio lugar a la Guerra Fría?',
			opciones: {
				a: 'Fin de la Segunda Guerra Mundial',
				b: 'Bloqueo de Berlín',
				c: 'Revolución Rusa',
				d: 'Conferencia de Yalta'
			},
			correcta: 'a'
		},
		{
			id: 'q4',
			texto: '¿Cuál de las siguientes crisis ocurrió durante la Guerra Fría?',
			opciones: {
				a: 'Guerra de Vietnam',
				b: 'Crisis de los misiles cubanos',
				c: 'Guerra de Irak',
				d: 'Crisis del petróleo'
			},
			correcta: 'b'
		},
		{
			id: 'q5',
			texto: '¿Cuál era uno de los principales objetivos de Estados Unidos durante la Guerra Fría?',
			opciones: {
				a: 'Expandir el comunismo',
				b: 'Defender el comunismo',
				c: 'Contener el comunismo',
				d: 'Aislar a la URSS'
			},
			correcta: 'c'
		},
		{
			id: 'q6',
			texto: '¿Qué buscaba la Unión Soviética durante la Guerra Fría?',
			opciones: {
				a: 'Promover el libre mercado',
				b: 'Expandir la influencia del comunismo',
				c: 'Mantener relaciones con los países de Europa Occidental',
				d: 'Establecer democracias en Europa del Este'
			},
			correcta: 'b'
		},
		{
			id: 'q7',
			texto: '¿Cuál de las siguientes fue una consecuencia de la Guerra Fría?',
			opciones: {
				a: 'Alianzas con países neutrales',
				b: 'Carrera armamentista',
				c: 'Descolonización pacífica',
				d: 'Estabilidad política global'
			},
			correcta: 'b'
		},
		{
			id: 'q8',
			texto: '¿Qué evento simbolizó de manera más clara el fin de la Guerra Fría?',
			opciones: {
				a: 'La disolución de la URSS',
				b: 'La caída del Muro de Berlín',
				c: 'La llegada del hombre a la Luna',
				d: 'La firma del Tratado de Versalles'
			},
			correcta: 'b'
		},
		{
			id: 'q9',
			texto: '¿Qué reformas en la URSS ayudaron a contribuir al fin de la Guerra Fría?',
			opciones: {
				a: 'Glasnost y Perestroika',
				b: 'Marshall y Lend-Lease',
				c: 'Nueva Política Económica',
				d: 'Seguridad Social y Educación'
			},
			correcta: 'a'
		},
		{
			id: 'q10',
			texto: '¿Qué efecto tuvo la política exterior de Ronald Reagan sobre la Guerra Fría?',
			opciones: {
				a: 'Aumentó la cooperación con la URSS',
				b: 'Incrementó la presión económica sobre la URSS',
				c: 'Promovió el comunismo en Europa del Este',
				d: 'Estableció la paz en Oriente Medio'
			},
			correcta: 'b'
		}
	];

	function enviarExamen(event) {
		event.preventDefault();
		correctas = 0;
		incorrectas = 0;

		preguntas.forEach(({ id, correcta }) => {
			if (respuestas[id] === correcta) {
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
		
	</ul>
	<div class="burger">
		<div class="line1"></div>
		<div class="line2"></div>
		<div class="line3"></div>
	</div>
</nav>
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

	{#if activeTab === 'video'}
		<div id="video" class="tab-content active">
			<h2>VIDEO DE APOYO</h2>
			<p>Observa atentamente el video .</p>
			<iframe
				width="681"
				height="383"
				src="https://www.youtube.com/embed/EXijvhBQ-u8"
				title="La Guerra Fría en 7 minutos"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	{/if}

	{#if activeTab === 'pdf'}
		<div class="tab-content active">
			<h1>La Guerra Fría</h1>
			<img src={guerra} alt="Mapa de la Unión Soviética" style="width: 100%;" />

			<p>
				La Guerra Fría fue un período caracterizado por un conflicto o enfrentamiento a nivel
				político, económico, social, ideológico y propagandístico entre Estados Unidos y la Unión
				Soviética (URSS) entre 1947 y 1991, es decir que tuvo lugar luego de la Segunda Guerra
				Mundial. El conflicto se dio por bloques principales: el bloque occidental o capitalista y
				el bloque oriental o comunista.
			</p>
			<p>
				El inicio de este conflicto se remonta al año 1945 debido a que los Estados Unidos temían la
				expansión del comunismo y buscaban frenar la influencia soviética en Europa. El término
				“guerra fría” fue atribuido por primera vez al período correspondiente a 1945, por el
				escritor británico George Orwell, autor de la novela <em>1984</em>.
			</p>

			<h2>Crisis destacadas durante la Guerra Fría</h2>
			<ul>
				<li>Bloqueo de Berlín (1948-1949)</li>
				<li>Segunda fase de la guerra civil china (1946-1949)</li>
				<li>Guerra de Corea (1950-1953)</li>
				<li>Crisis de Suez (1956)</li>
				<li>Insurrección húngara (1956)</li>
				<li>Crisis de Berlín (1961)</li>
				<li>Crisis de los misiles cubanos (1962)</li>
			</ul>

			<h2>Objetivos de Estados Unidos con la Guerra Fría</h2>
			<ul>
				<li>Contener el comunismo</li>
				<li>Defender la democracia y el libre mercado</li>
				<li>Mantener su hegemonía global</li>
			</ul>

			<h2>Objetivos de la Unión Soviética con la Guerra Fría</h2>
			<ul>
				<li>Expandir la influencia del comunismo</li>
				<li>Tener seguridad de evitar ataques futuros</li>
				<li>Contrarrestar la hegemonía capitalista</li>
			</ul>

			<h2>Causas de la Guerra Fría</h2>
			<ol>
				<li>Choque ideológico entre Estados Unidos (capitalista) y la URSS (comunista)</li>
				<li>Consecuencias de la Segunda Guerra Mundial generando zonas de influencia</li>
				<li>Desconfianza entre países por las invasiones</li>
				<li>La posesión de nuevas armas nucleares por parte de EE. UU. y la URSS</li>
			</ol>

			<h2>Consecuencias de la Guerra Fría</h2>
			<ol>
				<li>Carrera armamentista y amenaza nuclear</li>
				<li>Carrera espacial entre EE. UU. y la URSS</li>
				<li>Guerras de terceros o “guerras por el poder”</li>
				<li>División del mundo en dos bloques</li>
				<li>Revoluciones y movimientos sociales en el tercer mundo</li>
				<li>Caída del Muro de Berlín (1989) y fin de la URSS (1991)</li>
			</ol>

			<h2>Características de la Guerra Fría</h2>
			<ul>
				<li>Polarización del mundo en bloques capitalistas y comunistas</li>
				<li>Carrera armamentista</li>
				<li>Carrera espacial</li>
				<li>Guerras de poder indirectas</li>
				<li>Espionaje y propaganda</li>
				<li>Alianzas militares como la OTAN y el Pacto de Varsovia</li>
				<li>Descolonización y conflictos en el Tercer Mundo</li>
			</ul>

			<p>
				Para resumir, la Guerra Fría se caracterizó por la confrontación indirecta, la división
				ideológica, la carrera armamentista y tecnológica, y los conflictos en terceros países.
			</p>

			<h2>Factores que llevaron al fin de la Guerra Fría</h2>
			<ol>
				<li>Reformas de Perestroika y Glasnost</li>
				<li>Agotamiento del modelo soviético</li>
				<li>Caída del Muro de Berlín (1989)</li>
				<li>Fin del Pacto de Varsovia</li>
				<li>Disolución de la Unión Soviética (1991)</li>
				<li>Política exterior de Ronald Reagan y presión económica hacia la URSS</li>
			</ol>

			<h2>Bibliografías</h2>
			<ul>
				<li>
					<a href="https://www.nationalgeographicla.com/historia/2022/11/que-fue-la-guerra-fria"
						>National Geographic</a
					>
				</li>
				<li><a href="https://es.wikipedia.org/wiki/Guerra_Fr%C3%ADa">Wikipedia</a></li>
			</ul>
		</div>
	{/if}

	{#if activeTab === 'examen'}
		<div class="tab-content active">
			{#if !mostrarResultado}
				<h2>Examen de Opción Múltiple</h2>
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
