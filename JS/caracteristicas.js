import caracteristicasData from './dataJs/dataCaract.js';

export function renderizarCaracteristicas() {
    const filaCaracteristicas = document.getElementById('featuresRow');

    caracteristicasData.forEach(caracteristica => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-4 text-center mb-4';

        colDiv.innerHTML = `
            <svg class="bd-placeholder-img" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <image href="${caracteristica.imagen}" width="140" height="130" />
            </svg>
            <h3 class="fw-bold pb-4 pt-4">${caracteristica.titulo}</h3>
            <p class="text-justify">${caracteristica.texto}</p>
        `;

        filaCaracteristicas.appendChild(colDiv);
    });
}






















/*// Datos de las características
const featuresData = [
    {
        img: './assets/images/icono1.svg',
        title: 'SEGURIDAD',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut harum, voluptate tenetur reiciendis tempora accusamus amet exercitationem maxime eaque molestias excepturi, suscipit asperiores expedita optio numquam ratione praesentium, ad animi?',
    },
    {
        img: './assets/images/icono2.svg',
        title: 'EL MEJOR PRECIO',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut harum, voluptate tenetur reiciendis tempora accusamus amet exercitationem maxime eaque molestias excepturi, suscipit asperiores expedita optio numquam ratione praesentium, ad animi?',
    },
    {
        img: './assets/images/icono3.svg',
        title: 'A TIEMPO',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut harum, voluptate tenetur reiciendis tempora accusamus amet exercitationem maxime eaque molestias excepturi, suscipit asperiores expedita optio numquam ratione praesentium, ad animi?',
    },
];

// Función para crear y añadir características dinámicamente
function renderFeatures() {
    const featuresRow = document.getElementById('featuresRow');

    featuresData.forEach(feature => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-4 text-center mb-4';

        colDiv.innerHTML = `
            <svg class="bd-placeholder-img" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <image href="${feature.img}" width="140" height="130" />
            </svg>
            <h3 class="fw-bold pb-4 pt-4">${feature.title}</h3>
            <p>${feature.text}</p>
        `;

        featuresRow.appendChild(colDiv);
    });
}

// Llamar a la función para renderizar las características al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderFeatures();
});
*/