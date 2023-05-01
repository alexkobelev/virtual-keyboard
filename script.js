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

const detectOS = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const os = (userAgent.indexOf('mac') !== -1) ? 'MacOS' : 'Windows';
  return os;
};

const createOSInfoParagraph = () => {
  const osInfo = document.createElement('p');
  osInfo.classList.add('text');
  osInfo.textContent = `This virtual keyboard was created on ${detectOS()}`;
  return osInfo;
};

const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  return container;
};

const createTextArea = () => {
  const textarea = document.createElement('textarea');
  textarea.classList.add('text-area');
  return textarea;
};

const createKeyboard = () => {
  const setButtonClasses = (key, button) => {
    const longButtons = ['CapsLock', 'Enter', 'Shift', 'Backspace'];
    if (longButtons.includes(button)) {
      key.classList.add('keyboard__button_long');
    }
    if (button === 'Space') {
      key.classList.add('keyboard__button_space');
    }
  };

  const createButton = (button) => {
    const key = document.createElement('button');
    key.classList.add('keyboard__button');
    setButtonClasses(key, button);
    key.textContent = button;
    return key;
  };

  const createKeyboardRow = (keyRow) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');
    keyRow.forEach((button) => keyboardRow.appendChild(createButton(button)));
    return keyboardRow;
  };

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const keyboardLayout = (currentLayout === 'english' ? englishLayout : russianLayout);
  keyboardLayout.forEach((keyboardRow) => keyboard.appendChild(createKeyboardRow(keyboardRow)));

  return keyboard;
};

const createSwitchCombination = () => {
  const switchCombination = document.createElement('p');
  switchCombination.classList.add('text');
  switchCombination.textContent = 'Press Shift + Alt to switch layout';
  return switchCombination;
};

const createPageContainer = () => {
  const container = createContainer();
  const textArea = createTextArea();
  const keyboard = createKeyboard();
  const osInfoParagraph = createOSInfoParagraph();
  const switchCombination = createSwitchCombination();

  container.appendChild(textArea);
  container.appendChild(keyboard);
  container.appendChild(osInfoParagraph);
  container.appendChild(switchCombination);

  return container;
};

const renderPage = () => {
  removeKeyboard();
  const pageContainer = createPageContainer();
  const script = document.querySelector('.main-script');
  document.body.insertBefore(pageContainer, script);
};

const switchLayout = () => {
  currentLayout = (currentLayout === 'english' ? 'russian' : 'english');
  localStorage.setItem('keyboardLayout', currentLayout);
  renderPage();
};

document.addEventListener('keydown', (event) => {
  if (event.altKey && event.shiftKey) switchLayout();
});

renderPage();
