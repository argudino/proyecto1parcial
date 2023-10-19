document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const usuario = registroForm.querySelector('input[type="text"]').value;
        const nombre = registroForm.querySelector('input[type="text"]').value;
        const email = registroForm.querySelector('input[type="email"]').value;
        const password = registroForm.querySelector('input[type="password"]').value;
        const telefono = registroForm.querySelector('input[type="tel"]').value;

        // Expresiones regulares para validar el correo, contraseña y número de teléfono
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = /^.{4,15}$/;
        const telefonoRegex = /^\d{10}$/;

        let error = false;

        if (!usuario || !nombre || !email || !password || !telefono) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, complete todos los campos',
                icon: 'error',
                position: 'top-end',
                toast: true,
                showConfirmButton: false,
                timer: 3000,
            });
            error = true;
        } else {
            if (!emailRegex.test(email)) {
                Swal.fire({
                    title: 'Error',
                    text: 'Por favor, ingrese un correo válido',
                    icon: 'error',
                    position: 'top-end',
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                });
                error = true;
            }

            if (!passwordRegex.test(password)) {
                Swal.fire({
                    title: 'Error',
                    text: 'La contraseña debe tener entre 4 y 15 caracteres',
                    icon: 'error',
                    position: 'top-end',
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                });
                error = true;
            }

            if (!telefonoRegex.test(telefono)) {
                Swal.fire({
                    title: 'Error',
                    text: 'El número de teléfono debe contener 10 dígitos numéricos',
                    icon: 'error',
                    position: 'top-end',
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                });
                error = true;
            }
        }

        if (!error) {
            Swal.fire({
                title: 'Éxito',
                text: 'Registro exitoso',
                icon: 'success',
                position: 'top-end',
                toast: true,
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                // Redirige al usuario o realiza otra acción después de 3 segundos
                window.location.href = 'usuarios.html';
            });
        }
    });
});
