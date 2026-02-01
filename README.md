
# Formulario de Registro Interactivo y Seguro – ConnectHub

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un **formulario de registro interactivo y robusto** para la startup ficticia **ConnectHub**, aplicando buenas prácticas de **HTML, CSS y JavaScript** del lado del cliente.

El formulario ofrece **validación en tiempo real**, **feedback visual inmediato**, uso de **expresiones regulares (Regex)** y **gestión de cookies** para mejorar la experiencia de usuario y la calidad de los datos introducidos.

[📝 Testear el Formulario](https://silbertvb.github.io/Formulario-para-registros-seguros/)

---

## Objetivos

- Crear un formulario accesible y semántico.
- Validar los datos introducidos antes del envío.
- Proporcionar mensajes de error claros y constructivos.
- Mejorar la usabilidad mediante feedback visual.
- Persistir información del usuario mediante cookies.
- Aplicar buenas prácticas de seguridad en el cliente.

---

## Tecnologías utilizadas

- **HTML5** – Estructura semántica y accesible.
- **CSS3** – Diseño responsive y feedback visual.
- **JavaScript (ES6)** – Gestión de eventos, validaciones y cookies.

---

## Estructura del formulario (HTML)

El archivo `index.html` define una estructura clara y accesible:

- Uso de `<!DOCTYPE html>` y etiquetas semánticas (`<main>`).
- Cada campo dispone de su correspondiente `<label>`.
- Campos incluidos:
  - Nombre de usuario
  - Correo electrónico
  - Contraseña
  - Confirmación de contraseña
  - Teléfono (opcional)
  - Checkbox **“Recordarme”**
  - Botón de envío
- Elementos `<small>` para mostrar mensajes de error.
- Uso de atributos HTML5 como `required` y tipos de input adecuados.

---

## Manejo de eventos (JavaScript)

En el archivo `script.js` se implementa un modelo moderno de gestión de eventos con `addEventListener`:

- `DOMContentLoaded` para asegurar la carga completa del DOM.
- Evento `blur` para validar los campos individualmente.
- Evento `input` para mostrar la fortaleza de la contraseña en tiempo real.
- Evento `submit` para realizar una validación global y prevenir el envío si existen errores.

---

## Validación de datos

La validación se realiza **antes del envío del formulario**, tanto de forma individual como global:

- **Nombre de usuario**  
  - Mínimo 4 caracteres  
  - Solo letras, números y `_`

- **Correo electrónico**  
  - Formato válido `usuario@dominio.ext`

- **Contraseña**  
  - Mínimo 8 caracteres  
  - Mayúscula, minúscula, número y símbolo

- **Confirmación de contraseña**  
  - Debe coincidir exactamente con la contraseña

- **Teléfono**  
  - Campo opcional, validado solo si se introduce

---

## Uso de expresiones regulares (Regex)

Se utilizan expresiones regulares específicas para garantizar validaciones eficaces:

- Email: validación de estructura básica.
- Contraseña: uso de *lookaheads* para cumplir todos los requisitos.
- Teléfono: formatos flexibles (espacios, paréntesis y guiones).

---

## Feedback visual y mensajes de error

El sistema de validación incluye:

- Mensajes claros y constructivos bajo cada campo.
- Clases CSS `.valid` y `.invalid`.
- Eliminación automática de errores al corregir la entrada.
- Feedback visual inmediato:
  - Verde → campo válido
  - Rojo → campo inválido

---

## Gestión de cookies

Se implementa persistencia de datos mediante cookies:

- Si el usuario marca **“Recordarme”**:
  - Se guarda el nombre de usuario durante **7 días**.
  - Se define `path=/`.
- Se comprueba si el navegador tiene cookies habilitadas.
- Si la cookie existe, el campo **Nombre de usuario** se rellena automáticamente al recargar la página.

---

## Diseño y usabilidad (CSS)

El archivo `styles.css` proporciona:

- Diseño limpio y profesional.
- Formulario centrado y responsive.
- Adaptación a distintos tamaños de pantalla.
- Estilos visuales para:
  - Errores
  - Estados válidos
  - Botón de envío
- Mejora notable de la experiencia de usuario, incluyendo vista móvil.

---

## Seguridad básica (lado cliente)

Aunque no existe backend, se aplican buenas prácticas:

- Prevención del envío con errores (`preventDefault`).
- No se envían datos si hay campos inválidos.
- Mensajes informativos sin revelar información sensible.
- Validación redundante (HTML5 + JavaScript).

---

## Conclusión

El proyecto cumple correctamente todos los requisitos planteados:

- ✔️ HTML semántico y accesible  
- ✔️ Gestión moderna de eventos  
- ✔️ Validación robusta con Regex  
- ✔️ Feedback visual inmediato  
- ✔️ Uso correcto de cookies  
- ✔️ Diseño responsive y usable  

