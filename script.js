//Dom amnipulation document object model

//1. getElemtById
// const heading = document.getElementById("heading");
// console.log(heading);


//2.getElementByTagName
// const heading = document.getElementsByTagName('h1');
// console.log(heading);


//3.getElemntByClassName
//const heading = document.getElementsByClassName('heading');
//console.log(heading)

//4.querySelector
//const heading = document.querySelector('#heading') //if id
// const heading = document.querySelector('.heading'); //if class
// console.log(heading);

//5.QuerySelectorAll
// const heading  =document.querySelectorAll('.heading');
// console.log(heading);




//Traverse DOM
//1.ParentNode

// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);

//2.childNodes
// const parent = document.querySelector('.parent');
// const child = parent.childNodes;
// console.log(child);

//3.nextElmentSibling

// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);


//3.previousElemntSibling
// const subHeading = document.querySelector('h3');
// console.log(subHeading.previousElementSibling);


//manipulation 
// const heading = document.querySelector('.heading');
// heading.innerHTML = 'Web dev is awesome';
// heading.style.color = 'Green';
// heading.style.fontSize = '40px';
// heading.classList.add('title');
// heading.classList.remove('heading');

//create elemnets
// const heading = document.createElement('h1');
// heading.innerHTML = 'Javascript is awesome!';
// const parent = document.querySelector('.parent');
// parent.appendChild(heading);
// heading.classList.add('title');
// const subHeading = document.createElement('h3');
// subHeading.innerHTML = 'Node.js is awesome';
// parent.appendChild(subHeading);
// heading.insertAdjacentElement('beforeBegin', subHeading);
// parent.appendChild
// console.log(heading);


//Dom Events
// const button = document.querySelector('#btn');
// const heading = document.querySelector('#heading');

// button.addEventListener('click', (event)=>{
//    heading.style.color = 'red';
//    heading.style.fontSize = '90px';
//     console.log('button clicked', event);
//     //console.log(event); 
// })



// const bulbSwitch = document.querySelector('#bulbSwitch');
// const bulb = document.querySelector('#bulb');

// bulbSwitch.addEventListener('click', (event)=>{
//    if(bulb.src.match('off')){
//     bulb.src = './bulb-on.gif';
//     bulbSwitch.innerHTML = 'Turn off';
//    }
//    else{
//     bulb.src = './bulb-off.gif';
//     bulbSwitch.innerHTML = 'Turn on';
//    }
// })

const root = document.querySelector('#root');
const buttonClicked = document.querySelector('#buttonClicked');

function createItem(item){

    //card
    const card = document.createElement('div');
    card.classList.add('card');

    //photo

    const photo = document.createElement('img');
    photo.src = item.thumbnailUrl;
    //title
    const title = document.createElement('h4');
    title.innerHTML = item.title;
    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);

}

function displayImage(items){
    items.forEach((item)=>{
        createItem(item);

    })
    console.log(items);
    

    
}

buttonClicked.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then((res)=> res.json())
    .then((items)=>{
        displayImage(items);
    })
})





