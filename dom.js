function myFunction(){
    
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;

    localStorage.setItem('name' ,n );
    localStorage.setItem('email' ,e );

    // localStorage.removeItem('name');
    // localStorage.removeItem('email');
}