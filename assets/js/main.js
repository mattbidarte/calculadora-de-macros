console.error("¿Que haces mirando esto?");

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío predeterminado

    const formData = new FormData(this); // Obtener los datos del formulario

    fetch('/', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        console.log(response)
        if (response.ok) {
            Toastify({
                text: "¡Correo guardado con éxito!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: 'right',
                backgroundColor: "green",
            }).showToast();
        } else {
            Toastify({
                text: "Error al guardar el correo.",
                duration: 3000,
                close: true,
                gravity: "top",
                position: 'right',
                backgroundColor: "red",
            }).showToast();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        Toastify({
            text: "Error en la conexión.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: 'right',
            backgroundColor: "red",
        }).showToast();
    });

    this.reset();
});