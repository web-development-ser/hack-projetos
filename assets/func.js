const verific =  () => {
    const password = document.getElementById('password').value;
    pass = Number(password);
    if (pass === 1111) {
        console.log("Hello, vamos a vante!");
        display();
    } else {
        console.log("Senha ou Username errados!");
    }
};

const display = () => {
    var hello = document.getElementById('hello');
    hello.innerHTML = '<a href="www.google.com">CLICK PARA CONTINUAR...</a>';
}