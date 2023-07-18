'use strict';
// Main Variables
const confirmation = document.querySelector('.confirm');
const total = document.querySelector('.total');
const newOutput = document.querySelector('.new-out');
const output = document.querySelector('.out');
const replacement = document.querySelector('.replacement');

// Main Init

confirmation.addEventListener('click', function() {
  const userInput = document.querySelector('.user-in');
  output.classList.remove('hidden');
  const i = userInput.value;
  const final = i.replaceAll('I', '❗')
  if(!i.match('I') && !i.match('I')) {
    total.textContent = `There are no I's or L's in this string`;
  }
  total.textContent = `Results:`;
  replacement.textContent = i.replaceAll('I', 'i').replaceAll('l', 'L')
  newOutput.textContent = `${final.replaceAll('l', '❕')}`;
})

/*


  ______ _____ _______ _     _ _     _ ______    _______  _____  _______    / __   _  _____  _______        _______ _______ ______   _____ 
 |  ____   |      |    |_____| |     | |_____]   |       |     | |  |  |   /  | \  | |     |    |    |      |_____| |  |  | |_____] |     |
 |_____| __|__    |    |     | |_____| |_____] . |_____  |_____| |  |  |  /   |  \_| |_____|    |    |_____ |     | |  |  | |_____] |_____|
                                                                         /                                                                 


*/