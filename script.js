const list = document.querySelector('.list');

const completed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

completed.map((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="https://www.google.com/search?q=${item}">${item}</a>`;
    list.appendChild(li);
})