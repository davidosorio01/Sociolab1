<script>
	import '$lib/CSS/examen_mecanismos.css';
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
			texto:
				'¿Cuál de los siguientes mecanismos de participación permite a los ciudadanos votar sobre una decisión importante?',
			opciones: {
				a: 'Consulta Popular',
				b: 'Iniciativa Legislativa Popular',
				c: 'Cabildo Abierto',
				d: 'Presupuestos Participativos'
			},
			correcta: 'a'
		},
		{
			id: 'q2',
			texto:
				'¿Qué mecanismo permite a los ciudadanos proponer cambios a las leyes recolectando firmas?',
			opciones: {
				a: 'Referendo',
				b: 'Revocatoria del Mandato',
				c: 'Iniciativa Legislativa Popular',
				d: 'Consulta Popular'
			},
			correcta: 'c'
		},
		{
			id: 'q3',
			texto: 'Las consultas populares son utilizadas principalmente para:',
			opciones: {
				a: 'Proponer nuevas leyes',
				b: 'Expresar opiniones sobre decisiones locales o nacionales',
				c: 'Discutir el presupuesto municipal',
				d: 'Elegir representantes políticos'
			},
			correcta: 'b'
		},
		{
			id: 'q4',
			texto:
				'¿Cuál de los siguientes mecanismos busca destituir a un funcionario electo antes de que termine su mandato?',
			opciones: {
				a: 'Cabildo Abierto',
				b: 'Iniciativa Legislativa Popular',
				c: 'Revocatoria del Mandato',
				d: 'Consulta Popular'
			},
			correcta: 'c'
		},
		{
			id: 'q5',
			texto: 'Los cabildos abiertos son espacios donde:',
			opciones: {
				a: 'Solo se presentan proyectos de ley',
				b: 'La ciudadanía discute temas de interés con las autoridades',
				c: 'Se realizan elecciones generales',
				d: 'Se vota en referendos'
			},
			correcta: 'b'
		},
		{
			id: 'q6',
			texto:
				'Caso: Propuestas para mejorar el sistema educativo. Un grupo de padres y maestros está preocupado por la calidad de la educación. Desean implementar cambios en el sistema educativo y buscan la manera más efectiva de hacerlo. ¿Cuál es el mecanismo adecuado?',
			opciones: {
				a: 'Iniciativa Legislativa Popular (proponer una nueva ley)',
				b: 'Consulta Popular (preguntar a la ciudadanía si apoyan los cambios)',
				c: 'Cabildo Abierto (discutir directamente con las autoridades educativas)',
				d: 'Revocatoria del Mandato (intentar destituir a un funcionario)'
			},
			correcta: 'a'
		},
		{
			id: 'q7',
			texto:
				'Caso: Críticas a la gestión del alcalde. Un alcalde ha recibido duras críticas de los ciudadanos por su gestión y un grupo quiere intentar destituirlo antes de que finalice su mandato. ¿Cuál es el mecanismo adecuado?',
			opciones: {
				a: 'Revocatoria del Mandato',
				b: 'Cabildo Abierto',
				c: 'Consulta Popular',
				d: 'Referendo'
			},
			correcta: 'a'
		},
		{
			id: 'q8',
			texto:
				'Caso: Proyecto de construcción en la comunidad. La comunidad está preocupada por un nuevo proyecto de construcción que afectará su entorno. Desean expresar su opinión sobre el mismo. ¿Cuál es el mecanismo adecuado?',
			opciones: {
				a: 'Cabildo Abierto (discutir con las autoridades locales)',
				b: 'Consulta Popular (votar sobre si están de acuerdo o en contra)',
				c: 'Iniciativa Legislativa Popular (proponer una ley de protección)',
				d: 'Presupuestos Participativos (decidir cómo se asigna el presupuesto)'
			},
			correcta: 'b'
		},
		{
			id: 'q9',
			texto:
				'Caso: Decidir sobre el uso del presupuesto municipal. La municipalidad tiene un nuevo presupuesto y desea saber cómo la comunidad quiere invertir una parte del mismo en mejoras locales. ¿Cuál es el mecanismo adecuado?',
			opciones: {
				a: 'Presupuestos Participativos (decidir en qué proyectos invertir)',
				b: 'Cabildo Abierto (discutir y proponer proyectos)',
				c: 'Consulta Popular (votar sobre diversas opciones)',
				d: 'Plebiscito (para decidir sobre un asunto específico)'
			},
			correcta: 'a'
		},
		{
			id: 'q10',
			texto:
				'Caso: Influencia en elecciones locales. Un grupo de ciudadanos desea asegurarse de que sus voces se escuchen en la elección de sus representantes locales y pretenden expresar su opinión sobre quién debería ser elegido. ¿Cuál es el mecanismo adecuado?',
			opciones: {
				a: 'Voto (participar en la elección)',
				b: 'Cabildo Abierto (discutir con la comunidad sobre los candidatos)',
				c: 'Referendo (para decidir sobre un tema específico)',
				d: 'Consulta Popular (preguntar sobre candidatos)'
			},
			correcta: 'a'
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

	import voto from '$lib/IMAGES/img_examen_mecanismo/voto.webp';
	import referendo from '$lib/IMAGES/img_examen_mecanismo/referendo.webp';
	import plebicito from '$lib/IMAGES/img_examen_mecanismo/plebiscito.jpg';
	import iniciativa from '$lib/IMAGES/img_examen_mecanismo/Iniciativa-Populaer.jpg';
	import popular from '$lib/IMAGES/img_examen_mecanismo/propuesta_consulta_popular.jpg';
	import cabildo from '$lib/IMAGES/img_examen_mecanismo/cabildo.jpg';
	import revocatoria from '$lib/IMAGES/img_examen_mecanismo/revocatoria.jpeg';
	import participativo from '$lib/IMAGES/img_examen_mecanismo/presupuestoparticipativo.jpeg';
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
				src="https://www.youtube.com/embed/qwU-WM_EAWk"
				title="MECANISMOS DE PARTICIPACION - Video Explicativo"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	{/if}

	{#if activeTab === 'pdf'}
		<div class="tab-content active">
			<section id="ww1" class="war-section">
				<h1>Mecanismos de Participación Ciudadana en Colombia</h1>

				<p>
					En Colombia, los mecanismos de participación ciudadana están diseñados para que los
					ciudadanos puedan involucrarse activamente en la toma de decisiones que afectan su
					entorno. Aquí se explican los principales mecanismos con ejemplos:
				</p>

				<div class="image-placeholder">
					<img src={voto} alt="Personas votando en elecciones" style="width:100%; height:auto;" />
				</div>

				<h2>1. Voto</h2>
				<p>
					El voto es el mecanismo más importante de participación democrática, mediante el cual los
					ciudadanos eligen a sus representantes. Se usa en elecEjemplo: en 2003, se realizó un
					referendo propuesto por el presidente Álvaro Uribe, donde se votó sobre una serie de
					reformas políticas, aunque la falta de quórum impidió su implementación. Como ejemplo
					adicional, en 2016, el Reino Unido realizó un referendo sobre su permanencia en la Unión
					Europea, conocido como el "Brexit", donde los ciudadanos votaron mayoritariamente por
					salir de la UE.ciones presidenciales, legislativas, locales y en plebiscitos. Por ejemplo,
					los colombianos eligen a su presidente y a los miembros del Congreso cada cuatro años.
				</p>
				<p>
					Ejemplo: cada cuatro años, los colombianos eligen al presidente y a los miembros del
					Congreso. También es usado en casos como la elección de alcaldes y gobernadores. En
					Estados Unidos, el voto se utiliza para elegir representantes locales, como senadores o
					miembros de la Cámara de Representantes. Un ejemplo es la elección de los gobernadores de
					estado cada cuatro años.
				</p>

				<!-- Imagen del referendo -->
				<div class="image-placeholder">
					<img
						src={referendo}
						alt="Personas participando en un referendo"
						style="width:100%; height:auto;"
					/>
				</div>

				<h2>2. Referendo</h2>
				<p>
					El referendo permite a los ciudadanos aprobar o derogar leyes. Puede ser convocado por el
					Congreso o por iniciativa ciudadana mediante firmas. Ejemplo: en 2003, se realizó un
					referendo sobre reformas políticas impulsado por el presidente Álvaro Uribe, aunque no
					alcanzó el quórum necesario para su aprobación.
				</p>
				<p>
					Ejemplo: en 2003, se realizó un referendo propuesto por el presidente Álvaro Uribe, donde
					se votó sobre una serie de reformas políticas, aunque la falta de quórum impidió su
					implementación. Como ejemplo adicional, en 2016, el Reino Unido realizó un referendo sobre
					su permanencia en la Unión Europea, conocido como el "Brexit", donde los ciudadanos
					votaron mayoritariamente por salir de la UE.
				</p>

				<!-- Imagen del plebiscito -->
				<div class="image-placeholder">
					<img src={plebicito} alt="Votación en un plebiscito" style="width:100%; height:auto;" />
				</div>

				<h2>3. Plebiscito</h2>
				<p>
					El plebiscito es una consulta nacional donde los ciudadanos expresan su apoyo o rechazo a
					decisiones importantes del gobierno. Un ejemplo relevante fue el plebiscito de 2016 sobre
					los acuerdos de paz con las FARC, donde la mayoría votó por el “No”.
				</p>
				<p>
					Ejemplo: un caso emblemático fue el plebiscito de 2016, donde se consultó a la población
					sobre los acuerdos de paz con las FARC. El resultado fue un “No” mayoritario, aunque
					posteriormente se renegociaron y aprobaron los acuerdos. En 2015, se realizó un plebiscito
					en Grecia para decidir si aceptar las condiciones de un acuerdo de rescate propuesto por
					los acreedores internacionales. La población votó “No”, lo que influyó en las
					negociaciones del gobierno griego.
				</p>

				<!-- Imagen de firma de documentos -->
				<div class="image-placeholder">
					<img
						src={iniciativa}
						alt="Recolección de firmas para una iniciativa"
						style="width:100%; height:auto;"
					/>
				</div>

				<h2>4. Iniciativa Legislativa Popular</h2>
				<p>
					Este mecanismo permite a los ciudadanos proponer leyes mediante la recolección de firmas.
					Un caso destacado fue la Ley Anticorrupción de 2018, promovida por la ciudadanía y llevada
					al Congreso tras obtener suficientes firmas.
				</p>
				<p>
					Ejemplo: la Ley Anticorrupción, que surgió gracias a la movilización ciudadana y la
					recolección de firmas que impulsaron la discusión de la ley en el parlamento. En México,
					la iniciativa de ley denominada Ley de Protección de Datos Personales fue impulsada por la
					ciudadanía a través de la recolección de firmas, lo que exigió al Congreso discutir y
					eventualmente aprobar la ley.
				</p>

				<!-- Imagen de consulta pública -->
				<div class="image-placeholder">
					<img
						src={popular}
						alt="Consulta popular en una comunidad"
						style="width:100%; height:auto;"
					/>
				</div>

				<h2>5. Consulta Popular</h2>
				<p>
					La consulta popular se utiliza para que los ciudadanos opinen sobre decisiones de interés
					local o nacional. En 2017, varios municipios decidieron mediante consultas si permitir o
					no la explotación minera, como en Cajamarca, donde se votó en contra de estas actividades.
				</p>
				<p>
					Ejemplo: en 2017, varios municipios llevaron a cabo consultas populares para decidir sobre
					proyectos de minería y extracción de recursos naturales. En municipios como Cajamarca, la
					población votó abrumadoramente en contra de las actividades mineras. En 2018, en Colombia,
					se llevó a cabo una consulta popular sobre el fracking en varias regiones, donde en
					Cajamarca la población votó en contra de esta técnica de explotación de recursos
					naturales, resguardando su medio ambiente.
				</p>

				<!-- Imagen de cabildo abierto -->
				<div class="image-placeholder">
					<img
						src={cabildo}
						alt="Cabildo abierto en una comunidad"
						style="width:100%; height:auto;"
					/>
				</div>

				<h2>6. Cabildos Abiertos</h2>
				<p>
					Un cabildo abierto es una reunión pública donde los ciudadanos pueden discutir temas con
					las autoridades locales. Se han realizado cabildos en Bogotá para debatir proyectos de
					infraestructura y planes de desarrollo.
				</p>
				<p>
					Ejemplo: en Bogotá se han organizado cabildos para debatir proyectos de infraestructura y
					planes de desarrollo urbano. En la ciudad de Medellín, se han convocado cabildos abiertos
					para discutir la seguridad ciudadana, donde los vecinos expresan sus inquietudes y
					propuestas directamente a las autoridades locales.
				</p>

				<!-- Imagen de reunión comunitaria -->
				<div class="image-placeholder">
					<img
						src={revocatoria}
						alt="Reunión para revocatoria de un mandato"
						style="width:100%; height:auto;"
					/>
				</div>

				<h2>7. Revocatoria del Mandato</h2>
				<p>
					La revocatoria del mandato permite destituir a un mandatario elegido antes de terminar su
					periodo. En 2018, hubo un intento de revocar al alcalde de Bogotá, Enrique Peñalosa,
					aunque no se lograron las firmas necesarias para convocar la votación.
				</p>
				<p>
					Ejemplo: un caso reciente fue el intento de revocatoria del alcalde de Bogotá, Enrique
					Peñalosa, que aunque fue promovido por un amplio sector de la ciudadanía, no logró el
					umbral necesario. En Venezuela, en 2016, se realizó un intento de revocatoria del mandato
					del presidente Nicolás Maduro. La oposición recolectó firmas para convocar un referendo,
					aunque finalmente el proceso enfrentó obstáculos legales y políticos.
				</p>

				<!-- Imagen de presupuesto comunitario -->
				<div class="image-placeholder">
					<img
						src={participativo}
						alt="Presupuesto participativo en una ciudad"
						style="width:100%; height:auto;"
					/>
				</div>

				<h2>8. Presupuestos Participativos</h2>
				<p>
					Mediante este mecanismo, los ciudadanos deciden cómo se distribuyen los recursos del
					presupuesto local. En Medellín, por ejemplo, los residentes participan en la asignación de
					fondos para proyectos comunitarios como educación y salud.
				</p>
				<p>
					Medellín es un ejemplo destacado donde la ciudadanía participa activamente en la elección
					de proyectos comunitarios, como la mejora de espacios públicos, educación y salud. En
					Porto Alegre, Brasil, se implementó un sistema de presupuestos participativos donde los
					ciudadanos discuten directamente y votan sobre los proyectos que se financiarán con el
					presupuesto municipal, priorizando así las necesidades de la comunidad. pasa esto pasa
					sesto a html con imagen y separacion de parrafos
				</p>

				<h3>Bibliografía</h3>
				<ul>
					<li>
						Gobierno y Constitución Colombiana: Mecanismos de participación ciudadana establecidos
						por la Constitución de 1991.
					</li>
					<li>
						Universidad Pontificia Bolivariana: Explicaciones y ejemplos de mecanismos de
						participación.
					</li>
					<li>Blog UP: Casos y ejemplos recientes de participación ciudadana en Colombia.</li>
				</ul>
			</section>
		</div>
	{/if}

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

<style>
	.tab-content {
		display: none;
	}
	.tab-content.active {
		display: block;
	}
</style>
