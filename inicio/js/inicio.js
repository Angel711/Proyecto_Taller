window.onload = init;

function init(){
    if(localStorage.getItem("token")){
        document.querySelector('.btn-uno').addEventListener('click', function(){
            window.location.href = "agregar.html"
        });

        document.querySelector('.btn-dos').addEventListener('click', function(){
            window.location.href = "modificar.html"
        });

        document.querySelector('.btn-tres').addEventListener('click', function(){
            window.location.href = "eliminar.html"
        });

        document.querySelector('.btn-cuatro').addEventListener('click', function(){
            window.location.href = "buscar.html"
        });
    }
}