
export function mostrarModalF() {
    let modal = document.getElementById('contactModal');
    let modalContent = modal.querySelector('.modal-content');
    modal.style.display = 'block';
    setTimeout(() => {
        modalContent.classList.add('show');
    }, 50);
}

export function cerrarModal() {
    let modal = document.getElementById('contactModal');
    let modalContent = modal.querySelector('.modal-content');
    modalContent.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

export function mostrarModalEnvio() {
    let confirmModal = document.getElementById('confirmModal');
    let confirmMod = confirmModal.querySelector('.modal-content-confirm');
    
    if (confirmModal.style.display !== 'block') {
        confirmModal.style.display = 'block';
        setTimeout(() => {
            confirmMod.classList.add('show');
        }, 50);
    }
}
export function cerrarModalConfirm() {
    let confirmModal = document.getElementById('confirmModal');
    let confirmMod = confirmModal.querySelector('.modal-content-confirm');
    confirmMod.classList.remove('show');
    setTimeout(() => {
        confirmModal.style.display = 'none';
    }, 300);
}

export function limpiarCamposFormulario(form) {
    form.reset();
}






















