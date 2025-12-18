function ddd() {
    let a = confirm('Оно пока не работает :)');
    if (a == false) {
        alert("Чё отмена то?")
    }
    else {}
}

const customers = [
  {
    name: `Veronica</i>`,
    text: "«Приехала в Derry на пару дней и влюбилась с первого утра. Город уютный, зелёный, с какой‑то особенной атмосферой спокойствия. Люди добрые, улочки — как из фильма. Обязательно вернусь!»",
    avatar: "assets_майн/img/ver.jpg"
  },
  {
    name: "Tyler",
    text: "«Город оказался намного уютнее, чем я ожидал. Тихие улочки, зелень и спокойная атмосфера — идеальное место для отдыха.»",
    avatar: "assets_инфо/img/tal.jpg"
  },
  {
    name: "Bill",
    text: "«Мы приехали всего на день, но успели почувствовать особое тепло этого места. Люди приветливые, а прогулка по центру оставила самые приятные впечатления.»",
    avatar: "assets_инфо/img/bil.jpg"
  },
  {
    name: "Abel",
    text: "«Мне понравилось, что город сохранил свою простоту и уют. Атмосфера здесь такая домашняя, что хочется вернуться снова.»",
    avatar: "assets_инфо/img/wek.jpg"
  },
  {
    name: "Megan",
    text: "«Красивый, спокойный городок, где можно насладиться неспешной жизнью. Здесь легко забыть о суете и просто наслаждаться моментом.»",
    avatar: "assets_инфо/img/meg.jpg"
  }
];

let avatar = document.getElementById("avatar");
let nameEl = document.getElementById("name");
let textEl = document.getElementById("text");
let dots = document.querySelectorAll(".smallbutton");

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    let i = dot.getAttribute("data-index");
    updateReview(i);
  });
});

function updateReview(i) {
  const review = customers[i];
  avatar.src = review.avatar;
  nameEl.innerHTML = review.name;
  textEl.textContent = review.text;

  dots.forEach(d => d.classList.remove("active"));
  dots[i].classList.add("active");
}


let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна


openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});