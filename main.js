let container = document.getElementById('container');
let submitItem = document.getElementById('submitBtn');


submitItem.addEventListener('click', (e) => {
    e.preventDefault();
    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userPhone = document.getElementById('phone').value;

    let userObj={
        Name : userName,
        email : userEmail,
        phonenumber : userPhone
    };

    var userObj_searlized=JSON.stringify(userObj);

    localStorage.setItem(userEmail,userObj_searlized);
    
    var li = document.createElement('li');
    var textNode=document.createTextNode(`${userName}-${userEmail}-${userPhone}`);

    li.appendChild(textNode);
    container.appendChild(li);
})
