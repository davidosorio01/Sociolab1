<script>
	import '$lib/CSS/examen_tratado.css';
	import firma from '$lib/IMAGES/img_examen_tratado/firma.jpeg';
	import destruccion from '$lib/IMAGES/img_examen_tratado/destruccion.webp';
	import mapa from '$lib/IMAGES/img_examen_tratado/mapa.jpeg';
	import tratado from '$lib/IMAGES/img_examen_tratado/tratado.webp';

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
			texto: '¿Cuándo fue firmado el Tratado de Versalles?',
			opciones: {
				a: '28 de junio de 1914',
				b: '28 de junio de 1919',
				c: '28 de junio de 1923',
				d: '28 de junio de 1939'
			},
			correcta: 'b'
		},
		{
			id: 'q2',
			texto: '¿Qué evento desencadenó la Primera Guerra Mundial?',
			opciones: {
				a: 'La firma del Tratado de Versalles',
				b: 'La unificación de Alemania',
				c: 'El asesinato del archiduque Francisco Fernando',
				d: 'La creación de la Sociedad de Naciones'
			},
			correcta: 'c'
		},
		{
			id: 'q3',
			texto: 'Uno de los objetivos del Tratado de Versalles era:',
			opciones: {
				a: 'Fortalecer a Alemania militarmente',
				b: 'Mantener la paz a largo plazo sin restricciones',
				c: 'Debilitar a Alemania militarmente',
				d: 'Colonizar nuevas regiones'
			},
			correcta: 'c'
		},
		{
			id: 'q4',
			texto: '¿Cuál de las siguientes fue una consecuencia económica del Tratado de Versalles?',
			opciones: {
				a: 'Éxito económico inmediato en Alemania',
				b: 'Hiperinflación masiva en 1923',
				c: 'Crecimiento de la economía francesa',
				d: 'Estabilidad financiera en Europa'
			},
			correcta: 'b'
		},
		{
			id: 'q5',
			texto: '¿Qué cláusula se incluyó en el Tratado en relación con Alemania?',
			opciones: {
				a: 'Cláusula de neutralidad',
				b: 'Cláusula de culpabilidad de guerra',
				c: 'Cláusula de colaboración',
				d: 'Cláusula de paz eterna'
			},
			correcta: 'b'
		},
		{
			id: 'q6',
			texto: '¿Qué organización se creó como parte del esfuerzo de corrección diplomática?',
			opciones: {
				a: 'La OTAN',
				b: 'La Sociedad de Naciones',
				c: 'La Liga de las Naciones',
				d: 'La Conferencia de París'
			},
			correcta: 'b'
		},
		{
			id: 'q7',
			texto:
				'¿Cuál fue una de las principales demandas de los aliados hacia Alemania tras la guerra?',
			opciones: {
				a: 'Reparaciones económicas',
				b: 'Alianzas militares',
				c: 'Redistribución de colonias',
				d: 'Ampliación territorial'
			},
			correcta: 'a'
		},
		{
			id: 'q8',
			texto: '¿Qué estados emergieron o se fortalecieron tras el Tratado de Versalles?',
			opciones: {
				a: 'Austria y Hungría',
				b: 'Polonia, Checoslovaquia y Yugoslavia',
				c: 'Alemania y Francia',
				d: 'Italia y España'
			},
			correcta: 'b'
		},
		{
			id: 'q9',
			texto: '¿Qué sentimiento prevaleció en Alemania tras la imposición del tratado?',
			opciones: {
				a: 'Orgullo nacional',
				b: 'Alegría por la paz',
				c: 'Humillación y resentimiento',
				d: 'Indiferencia'
			},
			correcta: 'c'
		},
		{
			id: 'q10',
			texto: '¿Qué limitación fue impuesta a Alemania en el tratado?',
			opciones: {
				a: 'Prohibición de trade',
				b: 'Limitación del tamaño de su ejército',
				c: 'Prohibición de alianzas',
				d: 'Restricción de la industria cultural'
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

	let activeTab = 'video';

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
				width="100%"
				height="480"
				src="https://www.youtube.com/embed/dkdc0Py3s8Y"
				title="¿Qué fue el Tratado de Versalles? - Resumen | Cláusulas y Consecuencias."
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	{/if}

	{#if activeTab === 'pdf'}
		<div class="tab-content active">
			<h1>Tratado de Versalles</h1>
			<p>
				<img src={firma} alt="Firma del Tratado de Versalles" style="width:100%; height:auto;" />
				El Tratado de Versalles fue un acuerdo firmado el 28 de junio de 1919 entre los principales victoriosos
				de la Primera Guerra Mundial (1914-1918), fue firmado cinco años después del atentado de Sarajevo
				en el que fue asesinado el archiduque Francisco Fernando, la causa directa de la Primera Guerra
				Mundial. El tratado fue firmado en la Galería de los Espejos del Palacio de la ciudad de Versalles,
				Francia, y terminó oficialmente con el estado de guerra entre la Alemania del segundo Reich y
				los Aliados de la Primera Guerra Mundial. El tratado culpó y castigó a Alemania.
			</p>

			<h2>Causas del Tratado de Versalles</h2>
			<p>
				<img
					src={destruccion}
					alt="Destrucción tras la Primera Guerra Mundial"
					style="width:100%; height:auto;"
				/>
				1. <strong>La devastación de la Primera Guerra Mundial:</strong> Las grandes potencias quedaron
				económica y militarmente devastadas, por lo cual se buscaban garantías de seguridad para evitar
				futuras invasiones.
			</p>
			<p>
				2. <strong>Responsabilidad de Alemania:</strong> Muchos países pensaban que Alemania había sido
				el principal responsable de desencadenar el conflicto al apoyar a Austria-Hungría tras el asesinato
				del archiduque Francisco Fernando, por lo cual se condujo a la inclusión de la cláusula de culpabilidad
				de guerra en la que se responsabilizaba oficialmente a Alemania por el conflicto.
			</p>
			<p>
				3. <strong>Presión política en los países aliados:</strong> Francia, Reino Unido y Estados Unidos
				estaban a favor de que Alemania recibiera un castigo para garantizar que no volviera a ser una
				amenaza.
			</p>

			4.<strong>Objetivo de debilitar a Alemania militarmente:</strong>
			<ul>
				<li>
					Uno de los principales objetivos del tratado era reducir el poder militar de Alemania para
					que no pudiera desatar otro conflicto. La experiencia de la guerra había convencido a los
					aliados de que Alemania debía ser desmilitarizada y limitada en su capacidad de armarse
					nuevamente. Por lo tanto, se impusieron restricciones severas sobre el tamaño de su
					ejército, la prohibición de conscripción y la limitación del armamento.
				</li>
			</ul>

			5.<strong>Demandas de reparaciones económicas:</strong>
			<ul>
				<li>
					Los países aliados, en especial Francia y Bélgica, estaban profundamente endeudados debido
					a los enormes costos de la guerra, y sus economías habían sufrido daños severos. Exigieron
					que Alemania pagara reparaciones como compensación por los daños causados durante la
					guerra. Esta fue una demanda central en las negociaciones de paz y condujo a la inclusión
					de elevadas reparaciones en el tratado.
				</li>
				<li>
					Las reparaciones no solo buscaban reparar el daño material, sino también castigar a
					Alemania económicamente, impidiendo su recuperación y, por ende, su capacidad de emprender
					acciones agresivas en el futuro.
				</li>
			</ul>

			6.<strong>Tensiones entre las potencias europeas antes de la guerra:</strong>
			<ul>
				<li>
					Antes de la Primera Guerra Mundial, las potencias europeas ya habían estado compitiendo
					por la supremacía política, militar y económica. Alemania, que se había unificado en 1871,
					había emergido como una potencia industrial y militar, lo que inquietaba a naciones como
					Francia y el Reino Unido.
				</li>
				<li>
					Las potencias aliadas utilizaron la oportunidad del fin de la guerra para reducir la
					influencia de Alemania en Europa y redistribuir su poder. La pérdida de territorios,
					colonias y la limitación militar eran formas de contener el ascenso alemán.
				</li>
			</ul>

			<img src={mapa} alt="Rediseño del mapa de Europa" style="width:100%; height:auto;" />
			7. <strong>Rediseño del mapa de Europa:</strong>
			<ul>
				<li>
					El fin de la Primera Guerra Mundial también ofreció la oportunidad de rediseñar el mapa de
					Europa, en especial en áreas como Europa Central y del Este, donde la caída de los
					imperios austrohúngaro, ruso y otomano había creado un vacío de poder. Los aliados querían
					establecer un nuevo orden político basado en el principio de autodeterminación de los
					pueblos.
				</li>
				<li>
					El Tratado de Versalles permitió la creación o el fortalecimiento de nuevos estados como
					Polonia, Checoslovaquia y Yugoslavia. Para hacerlo, Alemania tuvo que ceder territorios y
					aceptar cambios fronterizos que redujeron su tamaño e influencia.
				</li>
			</ul>

			8.<strong>Fracaso de la diplomacia previa:</strong>
			<ul>
				<li>
					El fracaso de la diplomacia europea antes de la guerra, como el sistema de alianzas y la
					falta de un organismo internacional efectivo para mediar en conflictos, se consideraba una
					de las causas de la Primera Guerra Mundial. El Tratado de Versalles intentó, en parte,
					corregir este problema mediante la creación de la Sociedad de Naciones, que sería un foro
					para la resolución pacífica de disputas internacionales.
				</li>
				<li>
					Aunque este fue un objetivo a largo plazo, las tensiones entre los países y la dureza de
					las condiciones impuestas a Alemania demostraron ser más divisorias que reconciliadoras.
				</li>
			</ul>

			<h2>Consecuencias del Tratado de Versalles</h2>

			<img
				src={tratado}
				alt="Consecuencias del Tratado de Versalles"
				style="width:100%; height:auto;"
			/>
			1. <strong>Humillación y resentimiento en Alemania:</strong>
			<ul>
				<li>
					Las duras condiciones impuestas a Alemania generaron un profundo resentimiento y un
					sentimiento de humillación entre los alemanes, que consideraban el tratado como injusto y
					excesivo. Este descontento se convirtió en terreno fértil para el crecimiento del
					nacionalismo y la radicalización política, lo que eventualmente facilitó el ascenso de
					Adolf Hitler y el Partido Nazi al poder en 1933.
				</li>
			</ul>

			2.<strong>Inestabilidad económica:</strong>
			<ul>
				<li>
					Las reparaciones y las pérdidas territoriales, combinadas con la destrucción provocada por
					la guerra, debilitaron gravemente la economía alemana. Esto llevó a una hiperinflación
					masiva en 1923 y una crisis económica que se agravó con la Gran Depresión a fines de la
					década de 1920 y principios de la de 1930.
				</li>
			</ul>

			3.<strong>Crisis política en Europa:</strong>
			<ul>
				<li>
					El tratado reconfiguró las fronteras de Europa, creando nuevos estados como Polonia,
					Checoslovaquia y Yugoslavia, pero también dejó a muchas minorías étnicas en condiciones
					vulnerables y a algunos estados insatisfechos, lo que generó tensiones.
				</li>
				<li>
					El resentimiento alemán por el tratado fue una de las causas principales de la Segunda
					Guerra Mundial. Hitler utilizó la oposición al tratado para movilizar a la población
					alemana y llevar adelante sus políticas expansionistas.
				</li>
			</ul>

			4.<strong>Fracaso de la Sociedad de Naciones:</strong>
			<ul>
				<li>
					Aunque la Sociedad de Naciones fue creada con el propósito de prevenir guerras futuras, su
					falta de poder real para imponer decisiones y sanciones, junto con la ausencia de
					potencias clave como Estados Unidos, debilitó su eficacia. Este fracaso quedó evidente con
					el estallido de nuevos conflictos en la década de 1930, como la invasión de Manchuria por
					Japón y la expansión nazi.
				</li>
			</ul>

			<h2>Bibliografía</h2>
			<p>
				<a
					href="https://www.pucv.cl/pucv/noticias/vida-universitaria/instituto-de-historia-conmemoro-los-100-anos-del-tratado-de-versalles"
				>
					Tratado de Versalles - Qué fue, causas y consecuencias
				</a>
			</p>
			<p>
				<a
					href="https://www.nationalgeographic.es/historia/2019/06/tratado-versalles-fin-primera-guerra-mundial-inicio-segunda"
				>
					National Geographic - Fin de la Primera Guerra Mundial e inicio de la Segunda
				</a>
			</p>
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
