const input = document.querySelector('#validation-input')
// console.log(input);
// console.log(input.dataset.length)
input.addEventListener('blur', changeBorderColor)


function changeBorderColor (event){
    console.log(event)
    if (event.currentTarget.value.length == Number(input.dataset.length)){
        input.classList.remove('invalid');
        input.classList.add('valid');

    }else{
        input.classList.remove('valid')
         input.classList.add('invalid');
         
    };
    // console.log(event.currentTarget.value.length)
}