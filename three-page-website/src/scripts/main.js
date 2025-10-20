// Файл main.js предназначен для добавления интерактивности на сайт. 
// Здесь можно разместить JavaScript-код для обработки событий и взаимодействия с элементами страницы.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Сайт загружен и готов к взаимодействию!');
    
    // Пример добавления обработчика события на кнопку
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Форма отправлена!');
        });
    }
});