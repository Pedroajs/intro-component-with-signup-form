function validateFields(){
    document.getElementById("form").addEventListener("submit", (event)=>{
        event.preventDefault();
    });
    
    const firstName = document.querySelector(".input-name");
    const firstNameValue = firstName.value;

    const lastName = document.querySelector(".input-lastName");
    const lastNameValue = lastName.value;

    const email = document.querySelector(".input-email");
    const emailValue = email.value

    const password = document.querySelector(".input-password");
    const passwordValue = password.value;


    if(firstNameValue == 0){
        firstName.classList.add("input-error");
        document.querySelector(" .error:nth-child(2) ").style.display = "block";

    } 
    if(lastNameValue == 0){
        lastName.classList.add("input-error");
        document.querySelector(" .error:nth-child(4) ").style.display = "block";
    } 
    
    if(emailValue == 0){
        email.classList.add("input-error");
        document.querySelector(".error:nth-child(6)").style.display = "block";
    } 
    if(passwordValue == 0){
        password.classList.add("input-error");
        document.querySelector(".error:nth-child(8)").style.display = "block";
    }


}

