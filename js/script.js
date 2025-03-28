function openModal(type) {
    document.getElementById(`modal-${type}`).style.display = 'flex';
}

function closeModal(type) {
    document.getElementById(`modal-${type}`).style.display = 'none';
}