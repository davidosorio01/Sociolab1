<script>
    import '$lib/CSS/recuperar.css';

    let email = ""; // Variable para almacenar el correo
    let password = ""; // Variable para almacenar la nueva contraseña
    let showPasswordStep = false;

    // Cambia a la etapa de contraseña
    function handleSendCode(event) {
        event.preventDefault(); // Prevenir la recarga por defecto del formulario
        if (!email) {
            alert("Por favor, ingresa un correo válido.");
            return;
        }
        showPasswordStep = true; // Cambiar a la etapa de contraseña
    }

    // Manejo del envío de la nueva contraseña
    async function handlePasswordSubmit(event) {
        event.preventDefault(); // Prevenir la recarga por defecto del formulario

        if (!password) {
            alert("Por favor, ingresa una nueva contraseña.");
            return;
        }

        // Crear y enviar los datos al servidor
        const formData = new FormData();
        formData.append("correo", email); // Agregar el correo
        formData.append("password", password); // Agregar la contraseña

        try {
            const response = await fetch('/recuperar?/recuperar', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                 // Redirigir a login
            } else {
                alert("¡Contraseña actualizada! Redirigiendo a inicio de sesión...");
                window.location.href = "/login";
            }
        } catch (error) {
            alert("Error en el servidor: " + error);
        }
    }
</script>

<div class="container">
    <div class="card">
        <h1>Verificación de Cuenta</h1>
        <p>Ingrese su correo y verifique su contraseña</p>

        {#if !showPasswordStep}
            <!-- Formulario para enviar el correo -->
            <form on:submit={handleSendCode}>
                <div id="emailStep" class="step">
                    <label for="email">Correo Electrónico</label>
                    <input
                        name="correo"
                        type="email"
                        id="email"
                        bind:value={email}
                        placeholder="correo@ejemplo.com"
                        required
                    />
                    <button type="submit">Continuar</button>
                </div>
            </form>
        {:else}
            <!-- Formulario para cambiar la contraseña -->
            <form on:submit={handlePasswordSubmit}>
                <div id="passwordStep" class="step">
                    <label for="password">Contraseña Nueva</label>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        bind:value={password}
                        placeholder="Ingrese su contraseña"
                        required
                    />
                    <button type="submit">Cambiar Contraseña</button>
                </div>
            </form>
        {/if}
    </div>
</div>

<footer>
    <p>&copy; 2024 SOCIOLAB. Todos los derechos reservados.</p>
</footer>

<style>
    .step  a{
        color: black;
        text-decoration: none;
    }
</style>