const translations = {
  en: {
        heading: 'Hi, I\'m Frontend Developer',
        description: 'I create modern and responsive web applications using HTML, CSS, JavaScript and other web technologies.',
        portfolioHeading: 'My portfolio',
        project1Heading: 'Project 1',
        project1Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget gravida nulla, sit amet pharetra est. Ut non metus in massa consectetur dictum.',
        project2Heading: 'Project 2',
        project2Description: 'Nulla eu tellus risus. Duis accumsan convallis nibh, nec sagittis sapien bibendum vel. Suspendisse potenti. Proin suscipit libero quis eleifend convallis.',
        project3Heading: 'Project 3',
        project3Description: 'Pellentesque rutrum, nisl sed sagittis pellentesque, lacus nulla molestie dui, in egestas turpis lacus nec libero. Morbi rutrum ligula eget enim congue, ut vulputate neque posuere.',
        viewProject: 'View project'
  },
  cs: {
        heading: 'Ahoj, jsem Frontend Developer',
        description: 'Tvorím moderní a responzivní webové aplikace pomocí HTML, CSS, JavaScriptu a dalších webových technologií.',
        portfolioHeading: 'Můj portfoli',
        project1Heading: 'Projekt 1',
        project1Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget gravida nulla, sit amet pharetra est. Ut non metus in massa consectetur dictum.',
        project2Heading: 'Projekt 2',
        project2Description: 'Nulla eu tellus risus. Duis accumsan convallis nibh, nec sagittis sapien bibendum vel. Suspendisse potenti. Proin suscipit libero quis eleifend convallis.',
        project3Heading: 'Projekt 3',
        project3Description: 'Pellentesque rutrum, nisl sed sagittis pellentesque, lacus nulla molestie dui, in egestas turpis lacus nec libero. Morbi rutrum ligula eget enim congue, ut vulputate neque posuere.',
        viewProject: 'Zobrazit projekt'
  },
  ru: {
        heading: 'Привет, я Frontend Developer',
        description: 'Я создаю современные и адаптивные веб-приложения с использованием HTML, CSS, JavaScript и других веб-технологий.',
        portfolioHeading: 'Моё портфолио',
        project1Heading: 'Проект 1',
        project1Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget gravida nulla, sit amet pharetra est. Ut non metus in massa consectetur dictum.',
        project2Heading: 'Проект 2',
        project2Description: 'Nulla eu tellus risus. Duis accumsan convallis nibh, nec sagittis sapien bibendum vel. Suspendisse potenti. Proin suscipit libero quis eleifend convallis.',
        project3Heading: 'Проект 3',
        project3Description: 'Pellentesque rutrum, nisl sed sagittis pellentesque, lacus nulla molestie dui, in egestas turpis lacus nec libero. Morbi rutrum ligula eget enim congue, ut vulputate neque posuere.',
        viewProject: 'Посмотреть проект'
  }      
};
// Функция для переключения языка
function switchLanguage(lang) {
  // Получаем все элементы, которые нужно переводить
  const elements = document.querySelectorAll("[data-translate]");

  // Проходимся по каждому элементу
  elements.forEach(function(element) {
    // Получаем ключ перевода для этого элемента
    const key = element.getAttribute("data-translate");

    // Если перевод для этого ключа существует на выбранном языке
    if (translations[lang][key]) {
      // Заменяем содержимое элемента на перевод
      element.textContent = translations[lang][key];
    }
  });
}