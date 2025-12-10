const data = {
    eat: [
        "Заказать пиццу",
        "Сделать бутерброд",
        "Съесть яблоко",
        "Приготовить омлет",
        "Заказать шаурму"
    ],
    fun: [
        "Поиграть 15 минут в игру",
        "Послушать музыку",
        "Погулять",
        "Прокрутить TikTok — 5 минут только!",
        "Попробовать медитацию"
    ],
    watch: [
        "Посмотреть 1 серию сериала",
        "Включить случайный ролик на YouTube",
        "Посмотреть короткометражку",
        "Пересмотреть любимый фильм",
        "Посмотреть трейлеры новинок"
    ],
    challenge: [
        "Отжаться 10 раз",
        "Выпить стакан воды",
        "Убрать 1 предмет на место",
        "Сказать кому-то что-нибудь хорошее",
        "Сделать 20 приседаний"
    ],
    funny: [
        "Улыбнись рандомному предмету",
        "Скажи «мяу» и сделай паузу",
        "Поставь таймер на 7 секунд и ничего не делай",
        "Назови своё отражение «шеф»",
        "Похвали холодильник"
    ]
};

const category = document.getElementById("category");
const result = document.getElementById("result");
const button = document.getElementById("generate");

button.addEventListener("click", () => {
    const cat = category.value;
    const list = data[cat];
    const random = list[Math.floor(Math.random() * list.length)];

    result.textContent = random;
    result.classList.remove("hidden");

    // fade-in эффект
    setTimeout(() => {
        result.classList.add("show");
    }, 10);
});
