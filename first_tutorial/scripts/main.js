var txt = document.querySelector('h1');
txt.textContent ="HW";
var img = document.querySelector('img');
img.setAttribute('src','src/1.jpg');

document.querySelector('h1').onclick=function(){
    alert("OK");
}


img.onclick = function(){
    var name = img.getAttribute('src');

    if(name === 'src/1.jpg'){
        img.setAttribute('src','src/2.png');
    }else{
        img.setAttribute('src','src/1.jpg');
    }
}

