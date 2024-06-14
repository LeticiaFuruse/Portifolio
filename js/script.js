// const modal = document.querySelector(".container-modal")

// function AbrirModal() {
//     modal.classList.add("active")
// }


// function FecharModal() {
//     modal.classList.remove("active") 
// }

// Função para abrir o modal
function AbrirModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

// Função para fechar o modal
function FecharModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Adiciona eventos de clique às imagens
document.querySelectorAll('.divIcones .icone').forEach(function(icone) {
    icone.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        AbrirModal(modalId);
    });
});
