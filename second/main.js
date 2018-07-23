var para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}


document.addEventListener('DOMContentLoaded',function(){

    function createParagraph(){
        var para = document.createElement('p');
        para.textContent = 'you clicked one me';
        document.body.appendChild(para);

    }

    var buttons = document.querySelectorAll('button');

    buttons.forEach(element => {
        element.addEventListener('click',createParagraph);
    });
});