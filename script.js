const englishLayout = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'],
];

const russianLayout = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'],
];

const getCurrentLayout = () => localStorage.getItem('keyboardLayout') || 'english';
let currentLayout = getCurrentLayout();

const removeKeyboard = () => {
  const existingKeyboard = document.querySelector('.container');
  if (existingKeyboard) {
    existingKeyboard.remove();
  }
};

const createButton = (button) => {
  const key = document.createElement('button');
  key.setAttribute('class', 'keyboard__button');

  const longButtons = ['CapsLock', 'Enter', 'Shift', 'Backspace'];
  if (longButtons.includes(button)) {
    key.classList.add('keyboard__button_long');
  }
  if (button === 'Space') {
    key.classList.add('keyboard__button_space');
  }

  key.textContent = button;
  return key;
};

const createKeyboardRow = (keyRow) => {
  const keyboardRow = document.createElement('div');
  keyboardRow.setAttribute('class', 'keyboard__row');
  keyRow.forEach((button) => keyboardRow.appendChild(createButton(button)));
  return keyboardRow;
};

function detectOS() {
  const userAgent = navigator.userAgent.toLowerCase();
  const os = (userAgent.indexOf('mac') !== -1) ? 'MacOS' : 'Windows';
  return os;
}

function createOSInfoParagraph() {
  const osInfo = document.createElement('p');
  osInfo.setAttribute('class', 'text');
  osInfo.textContent = `This virtual keyboard was created on ${detectOS()}`;
  return osInfo;
}

function renderPage() {
  removeKeyboard();

  const keyboardLayout = (currentLayout === 'english' ? englishLayout : russianLayout);
  const container = document.createElement('div');
  const textarea = document.createElement('textarea');
  const keyboard = document.createElement('div');
  const osInfoParagraph = createOSInfoParagraph();
  const switchCombination = document.createElement('p');
  const script = document.querySelector('.main-script');

  textarea.focus();

  container.setAttribute('class', 'container');
  textarea.setAttribute('class', 'text-area');
  keyboard.setAttribute('class', 'keyboard');
  switchCombination.setAttribute('class', 'text');

  switchCombination.textContent = 'Press Shift + Alt to switch layout';

  keyboardLayout.forEach((keyboardRow) => keyboard.appendChild(createKeyboardRow(keyboardRow)));

  container.appendChild(textarea);
  container.appendChild(keyboard);
  container.appendChild(osInfoParagraph);
  container.appendChild(switchCombination);

  document.body.insertBefore(container, script);
}

const changeLanguage = () => {
  currentLayout = currentLayout === 'english' ? 'russian' : 'english';
  localStorage.setItem('keyboardLayout', currentLayout);
  renderPage();
};

document.addEventListener('keydown', (event) => {
  if (event.altKey && event.shiftKey) changeLanguage();
});

renderPage();
