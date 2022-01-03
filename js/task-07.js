const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text')
}
console.log(refs.input);
console.log(refs.span);

refs.input.addEventListener('input', changeFont)

function changeFont() {
    console.log(refs.span.style.fontSize)
    refs.span.style.fontSize = `${refs.input.value}px`;
 }