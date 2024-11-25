const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();
    const respuesta = await fetch('https://api.sheetbest.com/sheets/2a9ae411-bafb-41f7-b353-1c5ff2f2db5a', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'aplicaition/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.name.value,
            "Cumpleaños": formulario.start.value,
            "Correo": formulario.email.value,
            "Contraseña": formulario.password.value
        })
    });

    console.log(respuesta)

    registro.classList.remove('activo');
    exito.classList.add('activo');

} );