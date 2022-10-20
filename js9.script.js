window.onload = function(){
    
    let nickname = prompt("Enter your nickname!", "GodOfJavaScript");
    localStorage.setItem('nick', nickname);

    let divContainer = document.createElement('div');
    divContainer.classList.add("container");
    document.body.appendChild(divContainer);

    let divNickname = document.createElement('div');
    divContainer.prepend(divNickname);
    divNickname.innerHTML = "<h1>Hello " + nickname + "</h1>";

    let hr = document.createElement('hr');
    divContainer.append(hr);
    
    let labelEmail = document.createElement('label');
    labelEmail.setAttribute("for", "email");
    labelEmail.innerHTML = "<br><Text>Email</Text>";
    divContainer.append(labelEmail);
    
    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("type","email");
    inputEmail.classList.add('InputType');
    inputEmail.setAttribute("id","email1");
    inputEmail.setAttribute("pattern", "([A-Za-z0-9._%+-$^?*]{1,})@([a-z]{1,}).([a-z]{2,8})");
    inputEmail.setAttribute("placeholder","Enter Email");
    divContainer.append(inputEmail);

    let labelPswd = document.createElement('label');
    labelPswd.setAttribute("for", "psw");
    labelPswd.innerHTML = "<br><Text>Password</Text>";
    divContainer.append(labelPswd);

    let inputPswd = document.createElement("input");
    inputPswd.setAttribute("type","password");
    inputPswd.classList.add('InputType');
    inputPswd.setAttribute("id", "pswd");
    inputPswd.setAttribute("pattern", ".{8,16}");
    inputPswd.setAttribute("placeholder","Enter Password");
    divContainer.append(inputPswd);

    let labelPswd2 = document.createElement('label');
    labelPswd2.setAttribute("for", "psw-repeat");
    labelPswd2.innerHTML = "<br><Text>Repeat Password</Text>";
    divContainer.append(labelPswd2);

    let inputPswd2 = document.createElement("input");
    inputPswd2.setAttribute("type","password");
    inputPswd2.classList.add('InputType');
    inputPswd.setAttribute("id", "pswd2");
    inputPswd2.setAttribute("pattern", ".{8,16}");
    inputPswd2.setAttribute("placeholder","Repeat Password");
    divContainer.append(inputPswd2);

    let p1 = document.createElement('p');
    divContainer.append(p1);
    p1.innerHTML = "<br><Refs>By creating an account you agree to our </Refs>";

    let a = document.createElement('a');
    a.setAttribute("href", "#");
    a.innerHTML = "<Refs>Terms&Privaty</Refs>";
    p1.append(a);


    let p = document.createElement('p');
    divContainer.append(p);

    let buttonForm = document.createElement('button');
    p.append(buttonForm);
    buttonForm.innerHTML = "Register";
    buttonForm.classList.add("button");

    let a1 = document.createElement('a');
    a1.setAttribute("href", ".\\lr9.1.html");
    document.body.appendChild(a1);

    buttonForm.onclick = function(){
        if(inputEmail.value == "" || inputPswd.value == "" || inputPswd2.value == ""){
            alert("Enter your details");
        }
        else{
            if(inputPswd.value != inputPswd2.value) {
                alert("Passwords don't match!");
            }
            else{                
                window.location.href=".\\lr9.1.html";
            }
        }
    };    
}