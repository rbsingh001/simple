function myFunction(){
    
    
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;

    if(n.trim() != '' && e.trim() !=''){

        var users = JSON.parse(localStorage.getItem('users')) || [];

        const user = {
            name: n ,
            email: e
        };

        users.push(user);
        localStorage.setItem('users' , JSON.stringify(users));
    }
    var ul = document.getElementById('ul');
    var li = document.createElement('li');
    var t = document.createTextNode("Name: "+n+" "+"Email: "+e);
    // console.log(t);
    li.appendChild(t);
    ul.appendChild(li);
    
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}