const refs = {
    input: document.querySelector('#name-input'),
    nameUser: document.querySelector('#name-output')
}

refs.input.addEventListener('input', qwe)


function qwe (event) {
    if (event.currentTarget.value === ''){
        return refs.nameUser.textContent = "Anonymous"}
        else
        refs.nameUser.textContent = event.currentTarget.value
    }