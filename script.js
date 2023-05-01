const layout = [
  [
    {
      id: 'Backquote',
      en: { text: '`', textCaps: '~', textShift: '~' },
      ru: { text: 'ё', textCaps: 'Ё', textShift: 'Ё' },
    },
    {
      id: 'Digit1',
      en: { text: '1', textCaps: '!', textShift: '!' },
      ru: { text: '1', textCaps: '!', textShift: '!' },
    },
    {
      id: 'Digit2',
      en: { text: '2', textCaps: '@', textShift: '@' },
      ru: { text: '2', textCaps: '"', textShift: '"' },
    },
    {
      id: 'Digit3',
      en: { text: '3', textCaps: '#', textShift: '#' },
      ru: { text: '3', textCaps: '№', textShift: '№' },
    },
    {
      id: 'Digit4',
      en: { text: '4', textCaps: '$', textShift: '$' },
      ru: { text: '4', textCaps: ';', textShift: ';' },
    },
    {
      id: 'Digit5',
      en: { text: '5', textCaps: '%', textShift: '%' },
      ru: { text: '5', textCaps: '%', textShift: '%' },
    },
    {
      id: 'Digit6',
      en: { text: '6', textCaps: '^', textShift: '^' },
      ru: { text: '6', textCaps: ':', textShift: ':' },
    },
    {
      id: 'Digit7',
      en: { text: '7', textCaps: '&', textShift: '&' },
      ru: { text: '7', textCaps: '?', textShift: '?' },
    },
    {
      id: 'Digit8',
      en: { text: '8', textCaps: '*', textShift: '*' },
      ru: { text: '8', textCaps: '*', textShift: '*' },
    },
    {
      id: 'Digit9',
      en: { text: '9', textCaps: '(', textShift: ')' },
      ru: { text: '9', textCaps: '(', textShift: ')' },
    },
    {
      id: 'Digit0',
      en: { text: '0', textCaps: ')', textShift: ')' },
      ru: { text: '0', textCaps: ')', textShift: ')' },
    },
    {
      id: 'Minus',
      en: { text: '-', textCaps: '_', textShift: '_' },
      ru: { text: '-', textCaps: '_', textShift: '_' },
    },
    {
      id: 'Equal',
      en: { text: '=', textCaps: '+', textShift: '+' },
      ru: { text: '=', textCaps: '+', textShift: '+' },
    },
    {
      id: 'Backspace',
      en: { text: 'Backspace', textCaps: 'Backspace', textShift: 'Backspace' },
      ru: { text: 'Backspace', textCaps: 'Backspace', textShift: 'Backspace' },
    },
  ],
  [
    {
      id: 'Tab',
      en: { text: 'Tab', textCaps: 'Tab', textShift: 'Tab' },
      ru: { text: 'Tab', textCaps: 'Tab', textShift: 'Tab' },
    },
    {
      id: 'KeyQ',
      en: { text: 'q', textCaps: 'Q', textShift: 'Q' },
      ru: { text: 'й', textCaps: 'Й', textShift: 'Й' },
    },
    {
      id: 'KeyW',
      en: { text: 'w', textCaps: 'W', textShift: 'W' },
      ru: { text: 'ц', textCaps: 'Ц', textShift: 'Ц' },
    },
    {
      id: 'KeyE',
      en: { text: 'e', textCaps: 'E', textShift: 'E' },
      ru: { text: 'у', textCaps: 'У', textShift: 'У' },
    },
    {
      id: 'KeyR',
      en: { text: 'r', textCaps: 'R', textShift: 'R' },
      ru: { text: 'к', textCaps: 'К', textShift: 'К' },
    },
    {
      id: 'KeyT',
      en: { text: 't', textCaps: 'T', textShift: 'T' },
      ru: { text: 'е', textCaps: 'Е', textShift: 'Е' },
    },
    {
      id: 'KeyY',
      en: { text: 'y', textCaps: 'Y', textShift: 'Y' },
      ru: { text: 'н', textCaps: 'Н', textShift: 'Н' },
    },
    {
      id: 'KeyU',
      en: { text: 'u', textCaps: 'U', textShift: 'U' },
      ru: { text: 'г', textCaps: 'Г', textShift: 'Г' },
    },
    {
      id: 'KeyI',
      en: { text: 'i', textCaps: 'I', textShift: 'I' },
      ru: { text: 'ш', textCaps: 'Ш', textShift: 'Ш' },
    },
    {
      id: 'KeyO',
      en: { text: 'o', textCaps: 'O', textShift: 'O' },
      ru: { text: 'щ', textCaps: 'Щ', textShift: 'Щ' },
    },
    {
      id: 'KeyP',
      en: { text: 'p', textCaps: 'P', textShift: 'P' },
      ru: { text: 'з', textCaps: 'З', textShift: 'З' },
    },
    {
      id: 'BracketLeft',
      en: { text: '[', textCaps: '{', textShift: '{' },
      ru: { text: 'х', textCaps: 'Х', textShift: 'Х' },
    },
    {
      id: 'BracketRight',
      en: { text: ']', textCaps: '}', textShift: ']' },
      ru: { text: 'ъ', textCaps: 'Ъ', textShift: 'Ъ' },
    },
    {
      id: 'Backslash',
      en: { text: '\\', textCaps: '|', textShift: '|' },
      ru: { text: '\\', textCaps: '/', textShift: '/' },
    },
    {
      id: 'Delete',
      en: { text: 'Del', textCaps: 'Del', textShift: 'Del' },
      ru: { text: 'Del', textCaps: 'Del', textShift: 'Del' },
    },
  ],
  [
    {
      id: 'CapsLock',
      en: { text: 'CapsLock', textCaps: 'CapsLock', textShift: 'CapsLock' },
      ru: { text: 'CapsLock', textCaps: 'CapsLock', textShift: 'CapsLock' },
    },
    {
      id: 'KeyA',
      en: { text: 'a', textCaps: 'A', textShift: 'A' },
      ru: { text: 'ф', textCaps: 'Ф', textShift: 'Ф' },
    },
    {
      id: 'KeyS',
      en: { text: 's', textCaps: 'S', textShift: 'S' },
      ru: { text: 'ы', textCaps: 'Ы', textShift: 'Ы' },
    },
    {
      id: 'KeyD',
      en: { text: 'd', textCaps: 'D', textShift: 'D' },
      ru: { text: 'в', textCaps: 'В', textShift: 'В' },
    },
    {
      id: 'KeyF',
      en: { text: 'f', textCaps: 'F', textShift: 'F' },
      ru: { text: 'а', textCaps: 'А', textShift: 'А' },
    },
    {
      id: 'KeyG',
      en: { text: 'g', textCaps: 'G', textShift: 'G' },
      ru: { text: 'п', textCaps: 'П', textShift: 'П' },
    },
    {
      id: 'KeyH',
      en: { text: 'h', textCaps: 'H', textShift: 'H' },
      ru: { text: 'р', textCaps: 'Р', textShift: 'Р' },
    },
    {
      id: 'KeyJ',
      en: { text: 'j', textCaps: 'J', textShift: 'J' },
      ru: { text: 'о', textCaps: 'О', textShift: 'О' },
    },
    {
      id: 'KeyK',
      en: { text: 'k', textCaps: 'K', textShift: 'K' },
      ru: { text: 'л', textCaps: 'Л', textShift: 'Л' },
    },
    {
      id: 'KeyL',
      en: { text: 'l', textCaps: 'L', textShift: 'L' },
      ru: { text: 'д', textCaps: 'Д', textShift: 'Д' },
    },
    {
      id: 'Semicolon',
      en: { text: ';', textCaps: ':', textShift: ':' },
      ru: { text: 'ж', textCaps: 'Ж', textShift: 'Ж' },
    },
    {
      id: 'Quote',
      en: { text: '\'', textCaps: '"', textShift: '"' },
      ru: { text: 'э', textCaps: 'Э', textShift: 'Э' },
    },
    {
      id: 'Enter',
      en: { text: 'Enter', textCaps: 'Enter', textShift: 'Enter' },
      ru: { text: 'Enter', textCaps: 'Enter', textShift: 'Enter' },
    },
  ],
  [
    {
    // eslint-disable-next-line key-spacing
      id:'ShiftLeft',
      en: { text: 'Shift', textCaps: 'Shift', textShift: 'Shift' },
      ru: { text: 'Shift', textCaps: 'Shift', textShift: 'Shift' },
    },
    {
      id: 'KeyZ',
      en: { text: 'z', textCaps: 'Z', textShift: 'Z' },
      ru: { text: 'я', textCaps: 'Я', textShift: 'Я' },
    },
    {
      id: 'KeyX',
      en: { text: 'x', textCaps: 'X', textShift: 'X' },
      ru: { text: 'ч', textCaps: 'Ч', textShift: 'Ч' },
    },
    {
      id: 'KeyC',
      en: { text: 'c', textCaps: 'C', textShift: 'C' },
      ru: { text: 'с', textCaps: 'С', textShift: 'С' },
    },
    {
      id: 'KeyV',
      en: { text: 'v', textCaps: 'V', textShift: 'V' },
      ru: { text: 'м', textCaps: 'М', textShift: 'М' },
    },
    {
      id: 'KeyB',
      en: { text: 'b', textCaps: 'B', textShift: 'B' },
      ru: { text: 'и', textCaps: 'И', textShift: 'И' },
    },
    {
      id: 'KeyN',
      en: { text: 'n', textCaps: 'N', textShift: 'N' },
      ru: { text: 'т', textCaps: 'Т', textShift: 'Т' },
    },
    {
      id: 'KeyM',
      en: { text: 'm', textCaps: 'M', textShift: 'M' },
      ru: { text: 'ь', textCaps: 'Ь', textShift: 'Ь' },
    },
    {
      id: 'Comma',
      en: { text: ',', textCaps: '<', textShift: '<' },
      ru: { text: 'б', textCaps: 'Б', textShift: 'Б' },
    },
    {
      id: 'Period',
      en: { text: '.', textCaps: '>', textShift: '>' },
      ru: { text: 'ю', textCaps: 'Ю', textShift: 'Ю' },
    },
    {
      id: 'Slash',
      en: { text: '/', textCaps: '?', textShift: '?' },
      ru: { text: '.', textCaps: ',', textShift: ',' },
    },
    {
      id: 'ArrowUp',
      en: { text: '↑', textCaps: '↑', textShift: '↑' },
      ru: { text: '↑', textCaps: '↑', textShift: '↑' },
    },
    {
      id: 'ShiftRight',
      en: { text: 'Shift', textCaps: 'Shift', textShift: 'Shift' },
      ru: { text: 'Shift', textCaps: 'Shift', textShift: 'Shift' },
    },
  ],
  [
    {
      id: 'ControlLeft',
      en: { text: 'Ctrl', textCaps: 'Ctrl', textShift: 'Ctrl' },
      ru: { text: 'Ctrl', textCaps: 'Ctrl', textShift: 'Ctrl' },
    },
    {
      id: 'MetaLeft',
      en: { text: 'Win', textCaps: 'Win', textShift: 'Win' },
      ru: { text: 'Win', textCaps: 'Win', textShift: 'Win' },
    },
    {
      id: 'AltLeft',
      en: { text: 'Alt', textCaps: 'Alt', textShift: 'Alt' },
      ru: { text: 'Alt', textCaps: 'Alt', textShift: 'Alt' },
    },
    {
      id: 'Space',
      en: { text: ' ', textCaps: ' ', textShift: ' ' },
      ru: { text: ' ', textCaps: ' ', textShift: ' ' },
    },
    {
      id: 'AltRight',
      en: { text: 'Alt', textCaps: 'Alt', textShift: 'Alt' },
      ru: { text: 'Alt', textCaps: 'Alt', textShift: 'Alt' },
    },
    {
      id: 'ArrowLeft',
      en: { text: '←', textCaps: '←', textShift: '←' },
      ru: { text: '←', textCaps: '←', textShift: '←' },
    },
    {
      id: 'ArrowDown',
      en: { text: '↓', textCaps: '↓', textShift: '↓' },
      ru: { text: '↓', textCaps: '↓', textShift: '↓' },
    },
    {
      id: 'ArrowRight',
      en: { text: '→', textCaps: '→', textShift: '→' },
      ru: { text: '→', textCaps: '→', textShift: '→' },
    },
    {
      id: 'ControlRight',
      en: { text: 'Ctrl', textCaps: 'Ctrl', textShift: 'Ctrl' },
      ru: { text: 'Ctrl', textCaps: 'Ctrl', textShift: 'Ctrl' },
    },
  ],
];

const getCurrentLayout = () => localStorage.getItem('keyboardLayout') || 'english';
let currentLayout = getCurrentLayout();

const removeKeyboard = () => {
  const existingKeyboard = document.querySelector('.container');
  if (existingKeyboard) {
    existingKeyboard.remove();
  }
};

const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  return container;
};

const createTextArea = () => {
  const textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  return textArea;
};

const setButtonClasses = (key, button) => {
  const longButtons = ['CapsLock', 'Enter', 'Shift', 'Backspace'];
  if (longButtons.includes(button)) {
    key.classList.add('keyboard__button_long');
  }
  if (button === ' ') {
    key.classList.add('keyboard__button_space');
  }
};

const inputSymbol = (symbol) => {
  const textArea = document.querySelector('.text-area');
  const { selectionStart, selectionEnd } = textArea;
  textArea.value = textArea.value.substring(0, selectionStart)
    + symbol
    + textArea.value.substring(selectionEnd);
  textArea.selectionEnd = selectionStart + symbol.length;
  textArea.selectionStart = textArea.selectionEnd;
  textArea.focus();
};

const createButton = (buttonObj) => {
  const button = currentLayout === 'english' ? buttonObj.en.text : buttonObj.ru.text;
  const key = document.createElement('button');
  key.classList.add('keyboard__button');
  key.id = buttonObj.id;
  setButtonClasses(key, button);
  key.textContent = button;

  key.addEventListener('mousedown', () => {
    key.classList.add('keyboard__button_active');
  });

  key.addEventListener('mouseup', () => {
    key.classList.remove('keyboard__button_active');
  });

  key.addEventListener('mousedown', () => {
    key.classList.add('keyboard__button_active');
    inputSymbol(button);
  });

  return key;
};

const createKeyboardRow = (keyRow) => {
  const keyboardRow = document.createElement('div');
  keyboardRow.classList.add('keyboard__row');
  keyRow.forEach((buttonObj) => keyboardRow.appendChild(createButton(buttonObj)));
  return keyboardRow;
};

const createKeyboard = () => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  layout.forEach((keyRow) => keyboard.appendChild(createKeyboardRow(keyRow)));

  return keyboard;
};

const detectOS = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.includes('mac') ? 'MacOS' : 'Windows';
};

const createOSInfoParagraph = () => {
  const osInfo = document.createElement('p');
  osInfo.classList.add('text');
  osInfo.textContent = `This virtual keyboard was created on ${detectOS()}`;
  return osInfo;
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
  const textArea = document.querySelector('.text-area');
  textArea.focus();
};

const switchLayout = () => {
  currentLayout = (currentLayout === 'english' ? 'russian' : 'english');
  localStorage.setItem('keyboardLayout', currentLayout);
  renderPage();
};

const activateButton = (buttonId) => {
  const button = document.querySelector(`#${buttonId}`);
  if (button) {
    button.classList.add('keyboard__button_active');
    return true;
  }
  return false;
};

const deactivateButton = (buttonId) => {
  const button = document.querySelector(`#${buttonId}`);
  if (button) {
    button.classList.remove('keyboard__button_active');
  }
};

let isShiftPressed = false;
let isAltPressed = false;

document.addEventListener('keydown', (event) => {
  activateButton(event.code);

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShiftPressed = true;
  }

  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    isAltPressed = true;
  }
});

document.addEventListener('keyup', (event) => {
  deactivateButton(event.code);

  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && isAltPressed) {
    switchLayout();
  }

  if ((event.code === 'AltLeft' || event.code === 'AltRight') && isShiftPressed) {
    switchLayout();
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShiftPressed = false;
  }

  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    isAltPressed = false;
  }
});

renderPage();
