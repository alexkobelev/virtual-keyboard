/* eslint-disable no-console */
// Массив ключей клавиатуры
const keys = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'],
];

// Создаем контейнер для поля для ввода текста и клавиатуры
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Создаем поле для ввода текста
const textarea = document.createElement('textarea');
textarea.setAttribute('class', 'text-area');

// Создаем контейнер для клавиатуры
const keyboard = document.createElement('div');
keyboard.setAttribute('class', 'keyboard');

// Coздаем клавиатуру через цикличный обход массива
keys.forEach((keyRow) => {
  const keyboardRow = document.createElement('div');
  keyboardRow.setAttribute('class', 'keyboard__row');

  keyRow.forEach((button) => {
    const key = document.createElement('button');
    key.setAttribute('class', 'keyboard__button');

    if (button === 'CapsLock' || button === 'Enter' || button === 'Shift' || button === 'Backspace') {
      key.setAttribute('class', 'keyboard__button keyboard__button_long');
    }

    if (button === 'Space') {
      key.setAttribute('class', 'keyboard__button keyboard__button_space');
    }

    key.textContent = `${button}`;

    keyboardRow.appendChild(key);
  });

  keyboard.appendChild(keyboardRow);
});

// Добавляем клавиатуру и поле для ввода текста в контейнер;
container.appendChild(textarea);
container.appendChild(keyboard);

// Добавляем контейнер на страницу перед тегом script
const script = document.querySelector('.main-script');
document.body.insertBefore(container, script);
