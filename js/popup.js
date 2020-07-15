/* находим ссылку входа пользователя */
var enterLink = document.querySelector(".login-link");

/* находим форму входа - попап */
var popup = document.querySelector(".modal-login");

/* находим кнопку закрытия */
var close = document.querySelector(".modal-close");

/* находим строку логина в форме */
var login = popup.querySelector("[name=login]");

/* находим строку пароля в форме */
var password = popup.querySelector("[name=password]");

/* находим форму */
var form = popup.querySelector("form");

/* получаем сохраненное значение поля логина */
// var storage = localStorage.getItem("login");

/* флаг для проверки доступности локального хранилища */
var isStorageSupport = true; /* по умолчанию доступен */
var storage = ""; /* по умолчанию пусто */

try {
    /* попытка получить данные из локального хранилища */
    storage = localStorage.getItem("login");
} catch (err) {
    /* если ошибка: локальное хранилище недоступно */
    isStorageSupport = false;
}


/* доб. обр. событий на ссылку входа пользователя */
enterLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

/* доб. обр. событий на кнопку закрытия */
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

/* доб. обр. событий на кнопку отправки формы */
form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();

        //для повторения анимации
        popup.classList.remove("modal-error");
        //хак против автоблокировки браузером
        popup.offsetWidth = popup.offsetWidth;

        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

/* доб. обр. событий на кнопку ESC */
window.addEventListener("keydown", function (evt) {
    //если нажата ESC
    if (evt.keyCode === 27) {
        //если у попапа есть нужный класс
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
