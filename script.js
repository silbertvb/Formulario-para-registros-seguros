// Espera a que todo el HTML esté cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {

    // ===== REFERENCIAS AL FORMULARIO =====
    // Obtiene el formulario por su ID
    const form = document.getElementById("registerForm");

    // Obtiene cada campo Input del formulario
    const username = document.getElementById("username");  // Input de nombre de usuario
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const phone = document.getElementById("phone");
    const rememberMe = document.getElementById("rememberMe");

    // ===== EXPRESIONES REGULARES (REGEX) =====
    // Valida usuario: mínimo 4 caracteres, letras, números o guion bajo
    const usernameRegex = /^[a-zA-Z0-9_]{4,}$/;  

    // Email: formato básico usuario@dominio.extensión
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Contraseña:
    // - mínimo 8 caracteres
    // - al menos una mayúscula
    // - una minúscula
    // - un número
    // - un símbolo
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    // Teléfono: números, espacios, paréntesis y guiones
    const phoneRegex = /^[+]?[\d\s()-]{7,}$/;

    // ===== FUNCIONES DE VALIDACIÓN VISUAL =====

    //Muestra un mensaje de error y marca el input como inválido
    function showError(input, message) {
        input.classList.add("invalid");                                    // marca el campo como inválido
        input.classList.remove("valid");                                   // marca el campo como válido
        document.getElementById(input.id + "Error").textContent = message; // muestra el mensaje
    }

    // Marca el input como válido y elimina mensajes de error
    function showValid(input) {
        input.classList.remove("invalid");      
        input.classList.add("valid");           
        document.getElementById(input.id + "Error").textContent = "";       // limpia el mensaje de error
    }

    // ===== FUNCIONES DE VALIDACIÓN POR CAMPO =====
    // Validar nombre de usuario
    function validateUsername() {
        usernameRegex.test(username.value)  // Verifica el formato del nombre de usuario
            ? showValid(username)
            : showError(username, "Mínimo 4 caracteres (letras, números o _).");
    }
    // Validar formato de correo electrónico
    function validateEmail() {
        emailRegex.test(email.value)
            ? showValid(email)
            : showError(email, "Correo electrónico no válido.");
    }
    // Validar la fortaleza de la contraseña
    function validatePassword() { 
        passwordRegex.test(password.value) // Varifica si la contraseña es fuerte (fortaleza mínima)
            ? showValid(password)
            : showError(
                password,
                "Debe tener 8 caracteres, mayúscula, minúscula, número y símbolo."
              );
    }
    // Comprueba que ambas contraseñas coincidan 
    function validateConfirmPassword() {
        confirmPassword.value === password.value && confirmPassword.value !== "" // Evita confirmar si está vacío y coincide 
            ? showValid(confirmPassword)
            : showError(confirmPassword, "Las contraseñas no coinciden."); 
    }

    function validatePhone() {
        // El teléfono es opcional
        if (phone.value === "") {
            showValid(phone);
            return;
        }

        phoneRegex.test(phone.value)
            ? showValid(phone)
            : showError(phone, "Formato de teléfono no válido.");
    }

    // ===== EVENTOS DE VALIDACIÓN =====
    // Se validan los campos cuando el usuario sale del input aplicando un estilo moderno addEventLister (blur)
    username.addEventListener("blur", validateUsername);
    email.addEventListener("blur", validateEmail);
    password.addEventListener("blur", validatePassword);
    confirmPassword.addEventListener("blur", validateConfirmPassword);
    phone.addEventListener("blur", validatePhone);

    // Muestra la fuerza de la contraseña mientras se escribe
    password.addEventListener("input", () => {
        const strength = document.getElementById("passwordStrength");  // Elemento para mostrar la fuerza
        strength.textContent = passwordRegex.test(password.value)  
            ? "Contraseña fuerte ✅" // Indicadores simples de fuerza
            : "Contraseña débil ❌"; 
    });

    // ===== MANEJO DE COOKIES =====

    //Guarda una cookie con nombre, valor y duración en días
    function setCookie(name, value, days) {
        if (!navigator.cookieEnabled) { // Verifica si las cookies están habilitadas, si no, muestra un mensaje
            document.getElementById("cookieMessage").textContent = 
                "Las cookies están deshabilitadas en este navegador.";
            return;
        }

        // Establece la cookie con la fecha de expiración
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    }

    // Obtiene el valor de una cookie por su nombre
    function getCookie(name) {
        return document.cookie
            .split("; ")
            .find(row => row.startsWith(name + "="))
            ?.split("=")[1];
    }

    // Autocompleta el nombre de usuario si existe la cookie
    const savedUser = getCookie("username");
    if (savedUser) {
        username.value = savedUser;
        showValid(username);
    }

    // ===== ENVÍO DEL FORMULARIO =====
    // Evita el envío automático del formulario, recarga de la página, cambie la URL, etc.
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        // Ejecuta todas las validaciones
        validateUsername();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        validatePhone();

        // Comprueba si hay campos inválidos
        const invalids = document.querySelectorAll(".invalid");

        // Si no hay errores, simula el registro exitoso
        if (invalids.length === 0) {
            // Guarda el usuario si "Recordarme" está marcado
            if (rememberMe.checked) {
                setCookie("username", username.value, 7);
            }

            alert("Registro completado con éxito (simulado)");
            form.reset(); // Limpia el formulario
        }
    });

});
