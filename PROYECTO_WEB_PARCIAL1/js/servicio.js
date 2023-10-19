document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const id = registroForm.querySelector('input[name="id"]').value;
        const nombre = registroForm.querySelector('input[name="nombre"]').value;
        const encargado = registroForm.querySelector('input[name="encargado"]').value;
        const estado = registroForm.querySelector('select[name="estado"]').value;

        let error = false;

        if (!id || !nombre || !encargado || estado === "Selecciona una opción") {
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
            });
            window.location.href = 'servicios.html';
        }
    });
});
