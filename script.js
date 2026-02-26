console.log("hello")

const text = document.getElementById('invisible');
const button = document.getElementById('press');
let visible = false;
function pressed() {
  if (visible) {
    text.style.display = 'none';
    button.style.background = 'grey';
    button.innerText = "PRESS TO SHOW!"
    visible = false;
  } else {
    text.style.display = 'inline';
    button.style.background = 'dimgrey';
    button.innerText = "PRESS TO HIDE!"
    visible = true;
  }
}