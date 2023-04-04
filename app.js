const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    let error = "";
    e.preventDefault();

    const name = e.target.name.value;
    const usernameRegex = /^\S+$/;
    if (!usernameRegex.test(name)) {
        error += "Please enter a valid username(no spaces allowed).\n\n";
    }

    const password = e.target.password.value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
        error += "Please enter a valid password(more than 8 characters, with at least 1 number, uppercase, and special characters).\n\n";
      }

      const email = e.target.email.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        error += "Please enter a valid email address.\n\n";
      }


      const phone = e.target.phone.value;
      const phoneRegex = /^07\d{8}$/;
      if (!phoneRegex.test(phone)) {
        error += "Please Enter a valid phone number (10 digits, starts with 07).\n\n"
      }



      if(error != ""){
        alert(error);
      }
        if(error == ""){
            if(name === sessionStorage.getItem("username")){
                alert("Name already Exists");
            }else{
                sessionStorage.setItem("username", name);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("password", password);
                sessionStorage.setItem("phone", phone);
            }
            console.log(sessionStorage);
      }
      form.reset();

});
