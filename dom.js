function myFunction(){
    
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];

    const user = {
        name: n ,
        email: e
    };

    users.push(user);
    localStorage.setItem('users' , JSON.stringify(users));



    
}