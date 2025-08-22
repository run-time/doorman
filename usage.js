import { JSDOM } from 'jsdom';
import * as doorman from './doorman.js';

// setup jsdom globals with userAgent
const { window } = new JSDOM('', {
  pretendToBeVisual: true,
  userAgent: 'Mozilla/5.0',
});
global.window = window;
global.document = window.document;
global.screen = window.screen;

// set screen properties using defineProperty
Object.defineProperty(window.screen, 'colorDepth', {
  value: 24,
  configurable: true,
});
Object.defineProperty(window.screen, 'width', {
  value: 1920,
  configurable: true,
});
Object.defineProperty(window.screen, 'height', {
  value: 1080,
  configurable: true,
});
Object.defineProperty(window.screen, 'availWidth', {
  value: 1920,
  configurable: true,
});
Object.defineProperty(window.screen, 'availHeight', {
  value: 1040,
  configurable: true,
});

// this is pretty much the only doorman function you'll need
const personId = doorman.recognizedPerson();

const white = '\x1b[37m';
const blue = '\x1b[34m';
const yellow = '\x1b[33m';
const green = '\x1b[32m';
const red = '\x1b[31m';
const reset = '\x1b[0m';
const border = `${blue}============================================================${reset}`;
const line = `${blue}••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••${reset}`;
console.log(
  `\n${border}\n${green}Doorman Results${reset} ${white}-->${reset} ${blue}👋 Welcome back!${reset} ${white}${personId}${reset}\n${border}`,
);
// call each exported function and list its value
let first = true;
for (const [name, fn] of Object.entries(doorman)) {
  if (typeof fn === 'function') {
    if (fn.prototype && fn.prototype.constructor === fn) {
      continue;
    }
    try {
      const value = fn.length === 0 ? fn() : '[skipped needs args]';
      if (!first) {
        const lineOut = name === 'recognizedPerson' ? border : line;
        console.log(lineOut);
      }
      first = false;
      console.log(`${green}${name}${reset}: ${yellow}${value}${reset}`);
    } catch (err) {
      if (!first) {
        console.log(line);
      }
      first = false;
      console.log(
        `${green}${name}${reset}: ${red}[error]${reset} ${err.message}`,
      );
    }
  }
}
console.log(border);
