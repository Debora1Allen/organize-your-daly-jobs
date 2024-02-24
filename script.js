document.addEventListener("DOMContentLoaded", () => {
    const todoLists20 = document.querySelectorAll('.todo-list-20 li');
    const todoLists30 = document.querySelectorAll('.todo-list-30 li');

    todoLists20.forEach((item, index) => {
        const checkmark = document.createElement('img');
        checkmark.classList.add('checkmark');
        checkmark.src = index < 2 ? './assests/checked.svg' : './assests/unchecked.svg';
        item.appendChild(checkmark);
    });

    todoLists30.forEach(item => {
        const checkmark = document.createElement('img');
        checkmark.classList.add('checkmark');
        checkmark.src = './assests/checked.svg'; 
        item.appendChild(checkmark);
    });
});
