import blogData from './dataJs/dataBlog.js';

export function renderizarBlog() {
    const seccionBlog = document.getElementById('blogSection');
    seccionBlog.innerHTML = ''; 

    blogData.forEach((articulo, indice) => {
        const articuloHTML = `
            <div class="col-md-12">
                <article class="blog-article ml-4" data-index="${indice}">
                    <img src="${articulo.imagen}" alt="${articulo.titulo}" class="img-fluid">
                    <div class="article-details">
                        <h5>${articulo.titulo}</h5>
                        <div class="separator"></div>
                        <p class="date">
                            <span style="color: #555;">Escrito el <span style="color: orange;">${articulo.fecha}</span> por <span style="color: orange;">${articulo.autor}</span></span>
                        </p>
                        <p style="color: #555;">${articulo.descripcion}</p>
                    </div>
                </article>
            </div>
        `;
        seccionBlog.insertAdjacentHTML('beforeend', articuloHTML);
    });


    const articulos = document.querySelectorAll('.blog-article');
    articulos.forEach(articulo => {
        articulo.addEventListener('click', () => {
            const indice = articulo.dataset.index;
            mostrarModal(indice);
        });
    });
}

export  function mostrarModal(indice) {
    const mapeos = {
        imagen: 'modalImage',
        titulo: 'modalArticleTitle',
        descripcion: 'modalArticleDescription',
        fecha: 'modalArticleDate',
        autor: 'modalArticleAuthor'
    };

    const articuloSeleccionado = blogData[indice];

    for (let clave in articuloSeleccionado) {
        const elemento = document.getElementById(mapeos[clave]);
        if (elemento) {
            if (clave === 'imagen') {
                elemento.src = articuloSeleccionado[clave];
                elemento.alt = articuloSeleccionado.titulo;
            } else {
                elemento.textContent = articuloSeleccionado[clave];
            }
        }
    }

    const modal = new bootstrap.Modal(document.getElementById('articleModal'));
    modal.show();
}

document.addEventListener('DOMContentLoaded', renderizarBlog);






















/*const blogData = [
    {
        imagen: "../assets/images/blog1.jpg",
        titulo: "Terraza en el techo de tu casa",
        fecha: "20/10/2024",
        autor: "Admin",
        descripcion: "Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero."
    },
    {
        imagen: "../assets/images/blog2.jpg",
        titulo: "Guía para la decoración de tu hogar",
        fecha: "20/10/2024",
        autor: "Admin",
        descripcion: "Maximiza el espacio en tu hogar con esta guía, aprende a combinar muebles y colores para darle vida a tu espacio."
    },
    {
        imagen: "../assets/images/blog3.jpg",
        titulo: "Cómo organizar tu cocina eficientemente",
        fecha: "21/10/2024",
        autor: "Admin",
        descripcion: "Ideas para organizar y maximizar el espacio en tu cocina, haciendo que cocinar sea más placentero y eficiente."
    },
    {
        imagen: "../assets/images/blog4.jpg",
        titulo: "Decoración de jardines pequeños",
        fecha: "22/10/2024",
        autor: "Admin",
        descripcion: "Consejos para decorar y aprovechar al máximo el espacio en jardines pequeños, creando un oasis verde en tu hogar."
    }
];

// Función para renderizar dinámicamente el contenido del blog
function renderBlog() {
    const blogSection = document.getElementById('blogSection');
    blogSection.innerHTML = ''; // Limpiar contenido previo al renderizar

    // Renderizar todos los artículos del blog
    blogData.forEach((article, index) => {
        const articleHTML = `
            <div class="col-md-12">
                <article class="blog-article ml-4" data-index="${index}">
                    <img src="${article.imagen}" alt="${article.titulo}" class="img-fluid">
                    <div class="article-details">
                        <h5>${article.titulo}</h5>
                        <div class="separator"></div>
                        <p class="date">
                            <span style="color: #555;">Escrito el <span style="color: orange;">${article.fecha}</span> por <span style="color: orange;">${article.autor}</span></span>
                        </p>
                        <p style="color: #555;">${article.descripcion}</p>
                    </div>
                </article>
            </div>
        `;
        blogSection.insertAdjacentHTML('beforeend', articleHTML);
    });

    // Añadir evento clic a cada artículo del blog para mostrar el modal
    const articles = document.querySelectorAll('.blog-article');
    articles.forEach(article => {
        article.addEventListener('click', () => {
            const index = article.dataset.index;
            displayModal(index);
        });
    });

    // Función para mostrar el modal con los detalles completos del artículo
    function displayModal(index) {
        const modal = new bootstrap.Modal(document.getElementById('articleModal'));
        const modalImage = document.getElementById('modalImage');
        const modalArticleTitle = document.getElementById('modalArticleTitle');
        const modalArticleDescription = document.getElementById('modalArticleDescription');
        const modalArticleDate = document.getElementById('modalArticleDate');
        const modalArticleAuthor = document.getElementById('modalArticleAuthor');

        // Obtener el artículo seleccionado
        const selectedArticle = blogData[index];

        // Mostrar los datos del artículo en el modal
        modalImage.src = selectedArticle.imagen;
        modalImage.alt = selectedArticle.titulo;
        modalArticleTitle.textContent = selectedArticle.titulo;
        modalArticleDescription.textContent = selectedArticle.descripcion;
        modalArticleDate.textContent = `Fecha: ${selectedArticle.fecha}`;
        modalArticleAuthor.textContent = `Autor: ${selectedArticle.autor}`;

        // Mostrar el modal
        modal.show();
    }
}

// Llamar a la función para renderizar el contenido del blog al cargar la página
document.addEventListener('DOMContentLoaded', renderBlog);*/