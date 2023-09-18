function myFunction() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;

    
    if (n.trim() === '' || e.trim() === '') {
        alert('Please enter both name and email.');
        return; 
    }

    
    var users = JSON.parse(localStorage.getItem('users')) || [];

    const user = {
        name: n,
        email: e

    };


    users.push(user);

    
    localStorage.setItem('users', JSON.stringify(users));

    

    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    
    var ul = document.getElementById('ul');
    var li = document.createElement('li');
    var t = document.createTextNode("Name: " + n + " Email: " + e);

    
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function (n) {
        
        let ur = JSON.parse(localStorage.getItem('users'))
        
        for(let i=0;i<ur.length; i++){
            if(ur[i].name == user.name ) {
                console.log(i);
                ur.splice(i, 1);
           
                localStorage.setItem('users', JSON.stringify(ur));
                break;
            }

        }
        
        ul.removeChild(li);
        
    };

    li.appendChild(t);
    li.appendChild(deleteButton);


    var editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';
    editbtn.onclick = function(){


        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;



        let ur = JSON.parse(localStorage.getItem('users'))
        
        for(let i=0;i<ur.length; i++){
            if(ur[i].name == user.name ) {
                console.log(i);
                ur.splice(i, 1);
           
                localStorage.setItem('users', JSON.stringify(ur));
                break;
            }

        }
        
        ul.removeChild(li);

    }
    li.appendChild(editbtn);
    
    ul.appendChild(li);
};