let title = document.querySelector('h1')
console.log(title);

title.textContent = 'Web Page Components'

let topic_title = document.getElementById('topics');
topic_title.style.color = 'purple';

let list = document.querySelector('.list');

list.style.border = '3px solid white'

let paragraph = document.querySelector('p')

//You could also do it this way 
// para.classList.add('background');

para.style.backgroundColor('black')

let image = document.querySelector('img')

image.setAttribute('src', 'images/logo.avif')

// or do this image.src = 'images/logo.avif')


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.querySelector('#html').style.color = 'red';
})

const newpara = document.createElement('p') 
newpara.innerText = 'Added with Javascript';
document.body.appendChild('newpara');
                