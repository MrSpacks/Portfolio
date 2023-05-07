const langArr = {
  description: {
    en: 'Hello, my name is Petukhov Sergey and I am a novice frontend developer with experience in HTML, CSS and some JavaScript. Check out my portfolio below.',
    ru: 'Здравствуйте, меня зовут Петухов Сергей и я начинающий фронтенд-разработчик с опытом работы в HTML, CSS и немного JavaScript. Ознакомьтесь с моим портфолио ниже.',
    cz: 'Dobrý den, jmenuji se Petukhov Sergey a jsem začínající frontendový vývojář se zkušenostmi v HTML, CSS a trochu v JavaScriptu. Podívejte se na mé portfolio níže.',
  },

  contact:{
    en: 'Сontact',
    ru: 'Контакты',
    cz: 'Kontakty',

  },

  heading: {
    en: 'Frontend Developer',
    ru: 'Верстальщик сайтов',
    cz: 'Frontendový vývojář',
  },

  portfolio: {
    en: 'My Portfolio',
    ru: 'Мои работы',
    cz: 'Mé portfolio',
  }, 

  link: {
    en: 'View project',
    ru: 'Посмотреть работу',
    cz: 'Zobrazení projektu',
  },
  link2: {
    en: 'View project',
    ru: 'Посмотреть работу',
    cz: 'Zobrazení projektu',
  },
  link3: {
    en: 'View project',
    ru: 'Посмотреть работу',
    cz: 'Zobrazení projektu',
  },
  link4: {
    en: 'View project',
    ru: 'Посмотреть работу',
    cz: 'Zobrazení projektu',
  },
  
  watch: {
    en: 'My first made-up landing page with simple adaptive',
    ru: 'Мой первый сверстанный лендинг с простым адаптивом',
    cz: 'Moje první "lending" stránka s jednoduchým přizpůsobením',
  }, 

  plant: {
    en: 'A more serious website lending with a lot of elements',
    ru: 'Более серьезный лендинг сайт с большим количеством элементов',
    cz: 'Serióznější "lending" webova stránka  s mnoha prvky',
  },

  shop: {
    en: 'Even more interesting work with the adaptive for most devices, on small screens, the left menu becomes drop down',
    ru: 'Еще более интересная работа с адаптивом под большенство устройств, на малых экранах левое меню становиться выпадающим',
    cz: 'Ještě zajímavější je práce s adaptivními pro většinu zařízení. Na malých obrazovkách se levé menu změní na rozbalovací.',
  },
  up: {
    en:'Up',
    ru:'На верх',
    cz:'Na horu',
  },
  Furniture: {
    en: 'Example of multipage site layout (without adaptation for gadgets)',
    ru: 'Пример верстки многостраничного сайта(без адаптированния под гажеты)',
    cz: 'Příklad rozvržení vícestránkové webové stránky (nepřizpůsobené pro telefony a tablety)',
  },
};

document
  .querySelectorAll('.lang button')
  .forEach((b) => b.addEventListener('click', setLang));

function setLang() {
  for (let key in langArr) {
    let elem = document.querySelector('#lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][this.value];
    }
  }
}
