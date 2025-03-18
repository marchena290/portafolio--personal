document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#menuToggle');
    const mobileMenu = document.querySelector('#mobileMenu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle')
    const html = document.documentElement;

    if(localStorage.getItem('darkMode') === 'true') {
        html.classList.add('dark')
    };

    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark')
        localStorage.setItem('darkMode', html.classList.contains('dark'))
    });
});



// funcion para mostrar respuesta seleccionada

function showAnswer(id) {
    const answerContent = document.getElementById('answerContent');
    const buttons = document.querySelectorAll('#sobre-mi button');
    let content = '';

    // limpiar parrafo previo
    answerContent.innerHTML = '';

    //eliminar las clases de bontones
    buttons.forEach(button => {
        button.classList.remove('bg-gray-100', 'dark:bg-gray-700')
    });

    // Agregando la clase activa con el boton correspondiente
    document.getElementById(`${id}-btn`).classList.add('bg-gray-100', 'dark:bg-gray-700')

    switch(id){
        case 'quien':
            content = 'Soy un estudiate de ingeniería en sistemas y desarrollador front-end, apasionado por crear experiencias web atractivas y funcionales.'
            break;
        case 'trabajos':
            content = 'Me especializo en el desarrollo front-end, donde diseño y construyo sitios web responsivos y aplicaciones web interactivas. Trabajo con tecnologias como HTML, CSS, JavaScript, y frameworks como React, Angular y Vue. Tambien me enfocó en mejorar la experiencia del usuario, optimizando el rendimiento y asegurando que los sitios sean accesibles y fáciles de usar.'
            break;
        case 'actualizado':
            content = 'Me mantengo actualizado a través de cursos de plataformas como Udemy y Coursera, donde aprendo nuevas tecnologías y mejores prácticas. Tambien sigo blogs, participo en comunidades de desarrollo eb github y X, y asisto a webinars. Me gusta aplicar lo aprendido en proyectos personales para seguir mejorando.'
            break;
        case 'certificaciones':
            content = 'Aunque actualemente estoy en segundo año de la carrera de ingenía en sistemas, ya he obtenido una certificación como Front-End Developer, impartida por VLA Academy. Además, he completado varios cursos en Udemy y Coursera, enfocándome en tecnologías como React, Angular y Vuejs, JavaScript. Estas certificaciones complementan lo que aprendo en la universidad, permitiéndome aplicar hablilidades en mis proyectos y mantener actualizado en el campo de desarrollo web.'
            break;
    }

    // crear el nuevo parrafo
    const parrafo = document.createElement('p');
    parrafo.textContent = content;
    
    // Agrega a el parrafo al contenedor
    answerContent.appendChild(parrafo);
};

document.addEventListener('DOMContentLoaded', () =>{
    showAnswer('quien');
});

