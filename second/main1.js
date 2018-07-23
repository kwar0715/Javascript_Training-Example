function createParagraph(){
    var para = document.createElement('p');
    para.textContent = 'you clicked one me';
    document.body.appendChild(para);

}

var buttons = document.querySelectorAll('button');

buttons.forEach(element => {
    element.addEventListener('click',createParagraph);
});