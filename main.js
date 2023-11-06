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
    var button=document.createElement('button');
    var deleteText=document.createTextNode('Delete');
    var span=document.createElement('span');

    li.appendChild(textNode);
    button.appendChild(deleteText);
    span.appendChild(li);
    span.appendChild(button);
    container.appendChild(span);
    

    button.addEventListener('click',(e)=> {
        e.preventDefault();
        var parentEle=button.parentElement;
        console.log(parentEle);
        parentEle.remove();        
        var str =parentEle.firstElementChild.innerText;
        const arr=str.split('-');
        localStorage.removeItem(arr[1]);        

    })
})
