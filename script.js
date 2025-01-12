const textarea = document.getElementById('textbox');
const counter = document.querySelector('.number');

function count() {
    const textLength = textarea.value.length
    counter.innerHTML = textLength;
}