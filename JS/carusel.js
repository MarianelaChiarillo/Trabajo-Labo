import propiedades from './dataJs/dataCarusel.js';

export function mostrarCarusel() {
    const carruselInterno = document.querySelector('.carousel-inner');

    const tamanoGrupo = 3;
    const gruposPropiedades = [];
    for (let i = 0; i < propiedades.length; i += tamanoGrupo) {
        gruposPropiedades.push(propiedades.slice(i, i + tamanoGrupo));
    }

    carruselInterno.innerHTML = gruposPropiedades.map((grupo, indice) => `
        <div class="carousel-item ${indice === 0 ? 'active' : ''}">
            <div class="row g-6">
                ${grupo.map(propiedad => `
                    <article class="col-lg-4 col-md-6">
                        <div class="property-article">
                            <img src="${propiedad.imagen}" alt="${propiedad.titulo}" class="img-fluid">
                            <div class="article-details">
                                <h5>${propiedad.titulo}</h5>
                                <p>${propiedad.descripcion}</p>
                                <div class="property-icons">
                                    <div class="icon baths"><img src="../assets/images/icono_wc.svg" alt="Baños"> <span class="number">${propiedad.baños}</span></div>
                                    <div class="icon beds"><img src="../assets/images/icono_dormitorio.svg" alt="Camas"> <span class="number">${propiedad.dormitorios}</span></div>
                                    <div class="icon cars"><img src="../assets/images/icono_estacionamiento.svg" alt="Autos"> <span class="number">${propiedad.estacionamiento}</span></div>
                                </div>
                                <a href="#" class="property-article btn-orange" data-bs-toggle="modal" data-bs-target="#propertyModal"
                                    onclick="mostrarDetalles({
                                        imagen: '${propiedad.imagen}',
                                        titulo: '${propiedad.titulo}',
                                        descripcion: '${propiedad.descripcion}',
                                        baños: ${propiedad.baños},
                                        dormitorios: ${propiedad.dormitorios},
                                        estacionamiento: ${propiedad.estacionamiento}
                                    })">Ver propiedad</a>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    `).join('');
}

window.mostrarDetalles = function(detalles) {
    const objetos = {
        imagen: 'modalPropertyImage',
        titulo: 'modalPropertyTitle',
        descripcion: 'modalPropertyDescription',
        baños: 'modalPropertyBaths',
        dormitorios: 'modalPropertyBeds',
        estacionamiento: 'modalPropertyCars'
    };

    for (let key in detalles) {
        if (key === 'imagen') {
            document.getElementById(objetos[key]).src = detalles[key];
        } else {
            document.getElementById(objetos[key]).textContent = detalles[key];
        }
    }
}
export function mostrarTodasPropiedades() {
    const contenedorTodasPropiedades = document.getElementById('allPropertiesContainer');

    contenedorTodasPropiedades.innerHTML = propiedades.map(propiedad => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="property-article" onclick="mostrarDetalles({
                imagen: '${propiedad.imagen}',
                titulo: '${propiedad.titulo}',
                descripcion: '${propiedad.descripcion}',
                baños: ${propiedad.baños},
                dormitorios: ${propiedad.dormitorios},
                estacionamiento: ${propiedad.estacionamiento}
            })" data-bs-toggle="modal" data-bs-target="#propertyModal">
                <img src="${propiedad.imagen}" alt="${propiedad.titulo}" class="img-fluid">
                <div class="article-details">
                    <h5>${propiedad.titulo}</h5>
                </div>
            </div>
        </div>
    `).join('');

    const modalTodasPropiedades = new bootstrap.Modal(document.getElementById('allPropertiesModal'));
    modalTodasPropiedades.show();
}




