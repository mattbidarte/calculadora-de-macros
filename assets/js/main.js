console.error("¿Qué haces mirando esto?");

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío predeterminado

    const formData = new FormData(this); // Obtener los datos del formulario

    fetch('/', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Almacenar indicador en localStorage
            localStorage.setItem('emailSuccess', 'true');
            
            // Redirigir a emailAceptado.html inmediatamente
            window.location.href = '../pages/emailAceptado.html';
        } else {
            Toastify({
                text: "Error al guardar el correo, volve a intentarlo.",
                duration: 5000,
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
            text: "Error inesperado, volve a intentarlo.",
            duration: 5000,
            close: true,
            gravity: "top",
            position: 'right',
            backgroundColor: "red",
        }).showToast();
    });

    this.reset();
});
