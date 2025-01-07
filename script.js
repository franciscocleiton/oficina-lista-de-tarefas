const item = document.getElementById('item');
const addBotao = document.getElementById('btn');
const list = document.getElementById('list');

function addTarefa() {
    const text = item.value.trim(); // Remove espaços extras

    if (text === '') {
        alert('Por favor, insira uma tarefa!');
        return;
    }

    // Criar o elemento <li>
    const li = document.createElement('li');
    li.textContent = text;

    // Criar botões de ação
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Concluir';
    completeButton.classList.add('complete-btn');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-btn');

    // Adicionar botões ao <li>
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // Adicionar <li> à lista
    list.appendChild(li);

    // Limpar o campo de entrada
    item.value = '';
}

// Função para gerenciar os cliques nos botões
list.addEventListener('click', function (e) {
    if (e.target.classList.contains('complete-btn')) {
        // Marcar tarefa como concluída
        const li = e.target.parentElement;
        li.style.textDecoration = 'line-through';
        li.style.color = '#6c757d'; // Cor de tarefa concluída
    } else if (e.target.classList.contains('delete-btn')) {
        // Remover tarefa da lista
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// Adicionar evento ao botão de adicionar
addBotao.addEventListener('click', addTarefa);

// Permitir adicionar tarefa pressionando "Enter"
item.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTarefa();
    }
});