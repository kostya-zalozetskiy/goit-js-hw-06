const form = document.querySelector('.login-form')


form.addEventListener('submit', submitForm);

// input.setAttribute('required, ^[a-zA-Z]+\s[a-zA-Z]+$')

function submitForm(event){
    event.preventDefault();


    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password
    };

    
    if (mail === "" || password === "") {
      return console.log( "Please fill in all the fields!")
    }
    
  if(mail && password) {
      console.log(formData);
     
  }
  form.reset()
    }
