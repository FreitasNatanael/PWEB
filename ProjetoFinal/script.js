const modal = document.getElementById('novo-card');
const btnAdicionar = document.querySelector('.btn-adicionar');
const btnFechar = document.querySelector('.fechar');
const formCard = document.getElementById('form-novo-card');
const colunaParaEstudar = document.querySelector('.coluna-kanban1'); 
const tituloModal = document.querySelector('.conteudo h2'); // Para mudar o título do modal

// Variável que guarda qual card estamos editando (null = criando novo)
let cardSendoEditado = null; 

// Quando clica no "+" (Criar novo)
btnAdicionar.addEventListener('click', () => {
    cardSendoEditado = null; // Avisa que é uma criação
    formCard.reset(); // Limpa o formulário
    tituloModal.textContent = "Novo Card de Estudo"; // Muda título
    modal.style.display = 'flex';
});

// Quando clica para fechar o modal
btnFechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Função responsável por montar/atualizar o HTML do card e guardar os dados nele
function atualizarCard(card, dados) {
    // Guarda os dados "escondidos" no elemento HTML para facilitar a edição depois
    card.dataset.titulo = dados.titulo;
    card.dataset.desc = dados.desc;
    card.dataset.tags = dados.tags.join(',');
    card.dataset.prioridade = dados.prioridade;
    card.dataset.vencimento = dados.vencimento;
    card.dataset.responsaveis = dados.responsaveis;

    // Monta as tags
    let tagsHtml = '';
    dados.tags.forEach(tag => {
        if(tag.trim() !== '') {
            tagsHtml += `<span class="tag">${tag.trim()}</span>`;
        }
    });

    // Insere o HTML (com o novo botão de editar)
    card.innerHTML = `
        <div class="card-title">
            <h3>${dados.titulo}</h3>
            <div class="card-actions">
                <button class="close-btn" title="Excluir">×</button>
                <button class="edit-btn" title="Editar">✏️</button>
            </div>
        </div>
        <p>${dados.desc}</p>
        <div class="card-tags">
            ${tagsHtml}
        </div>
        <div class="card-detalhes">
            <span>📅 ${dados.vencimento}</span>
            <span>👤 ${dados.responsaveis}</span>
            <span class="prio-${dados.prioridade}">${dados.prioridade}</span>
        </div>
    `;

    // Como recriamos o innerHTML, precisamos colocar os eventos de click de volta nos botões
    const btnExcluir = card.querySelector('.close-btn');
    btnExcluir.addEventListener('click', () => {
        card.remove(); 
    }); 

    const btnEditar = card.querySelector('.edit-btn');
    btnEditar.addEventListener('click', () => {
        // Define que este é o card que vai ser editado
        cardSendoEditado = card;
        tituloModal.textContent = "Editar Card de Estudo";

        // Preenche o formulário com os dados que guardamos no dataset
        document.getElementById('titulo').value = card.dataset.titulo;
        document.getElementById('descricao').value = card.dataset.desc;
        document.getElementById('tags').value = card.dataset.tags;
        document.getElementById('prioridade').value = card.dataset.prioridade;
        document.getElementById('vencimento').value = card.dataset.vencimento;
        document.getElementById('responsaveis').value = card.dataset.responsaveis;

        // Abre o modal
        modal.style.display = 'flex';
    });
}

// Ao enviar o formulário (Criando ou Editando)
formCard.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    // Captura os dados do form
    const dados = {
        titulo: document.getElementById('titulo').value,
        desc: document.getElementById('descricao').value,
        tags: document.getElementById('tags').value.split(','),
        prioridade: document.getElementById('prioridade').value,
        vencimento: document.getElementById('vencimento').value,
        responsaveis: document.getElementById('responsaveis').value
    };

    if (cardSendoEditado) {
        // Se tem um card sendo editado, apenas atualiza ele
        atualizarCard(cardSendoEditado, dados);
    } else {
        // Se NÃO tem card sendo editado, cria um novo
        const novoCard = document.createElement('div');
        novoCard.className = 'card';
        novoCard.draggable = true;

        // Regras de arrastar
        novoCard.addEventListener('dragstart', () => {
            novoCard.classList.add('dragging');
        });
        novoCard.addEventListener('dragend', () => {
            novoCard.classList.remove('dragging');
        });

        // Chama a função que insere o conteúdo
        atualizarCard(novoCard, dados);
        colunaParaEstudar.appendChild(novoCard);
    }

    // Limpa o form e fecha o modal
    formCard.reset();
    modal.style.display = 'none';
});

// Pegar as 3 colunas para o Drag and Drop (Arrastar)
const colunas = document.querySelectorAll('.coluna-kanban1, .coluna-kanban2, .coluna-kanban3');

colunas.forEach(coluna => {
    coluna.addEventListener('dragover', (evento) => {
        evento.preventDefault(); 
    });

    coluna.addEventListener('drop', () => {
        const cardArrastado = document.querySelector('.dragging');
        if (cardArrastado) {
            coluna.appendChild(cardArrastado);
        }
    });
});