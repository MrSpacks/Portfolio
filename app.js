const languageSwitcherLinks = document.querySelectorAll('.header__language-switcher-link');

languageSwitcherLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all links
    languageSwitcherLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    const clickedLink = e.target;
    clickedLink.classList.add('active');

    // Get the language from the data-lang attribute of the clicked link
    const language = clickedLink.getAttribute('data-lang');

    // Call a function to update the page language
    updateLanguage(language);
  });
});

function updateLanguage(language) {
  // Code to update the page language based on the selected language
  // ...
}
