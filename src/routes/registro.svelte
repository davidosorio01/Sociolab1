<script>
    let isSignUpMode = false;
    function toggleMode() {
        isSignUpMode = !isSignUpMode;
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   
    .logo {
        color: #303030;
        font-size: 10px;
        font-weight: 200;
        width: 210px;
        height: 170px;
    }
    body,
    input {
        font-family: "Poppins", sans-serif;
    }
    .container {
        position: relative;
        width: 100%;
        background-color: #fff;
        min-height: 100vh;
        overflow: hidden;
    }
    .forms-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: 1s 0.7s ease-in-out;
        transform: translateX(calc(100% * var(--sign-up-mode, 0)));
    }
    .signin-signup {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: calc(var(--sign-up-mode, 0) * 50%);
        width: 50%;
        display: grid;
        grid-template-columns: 1fr;
    }
    /* Add other styles as needed */
</style>

<header>
    <img class="logo" src="logo_socio_lab-removebg-preview.png" alt="Logo">
</header>

<div class={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
    <div class="forms-container">
        <div class="signin-signup">
            <form action="#" class="sign-in-form">
                <h2 class="title">Iniciar sesión</h2>
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <input type="submit" value="Login" class="btn solid" />
                <p class="social-text">O Iniciar sesión con plataformas sociales</p>
                <div class="social-media">
                    <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-google"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </form>
            <form action="#" class="sign-up-form">
                <h2 class="title">Registrarse</h2>
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div class="input-field">
                    <i class="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" />
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <input type="submit" class="btn" value="Sign up" />
                <p class="social-text">O Regístrese con las plataformas sociales</p>
                <div class="social-media">
                    <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-google"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </form>
        </div>
    </div>
    <div class="panels-container">
        <div class="panel left-panel">
            <div class="content">
                <h3>Nuevo aquí?</h3>
                <p>¡Regístrate y conocénos!</p>
                <button class="btn transparent" on:click={toggleMode}>registrarse</button>
            </div>
            <img src="undraw_mobile_content_xvgr.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
            <div class="content">
                <h3>¿Ya eres uno de nosotros?</h3>
                <p>Nos alegra verte de nuevo :D</p>
                <button class="btn transparent" on:click={toggleMode}>Iniciar sesión</button>
            </div>
            <img src="undraw_electricity_k2ft.svg" class="image" alt="" />
        </div>
    </div>
</div>
