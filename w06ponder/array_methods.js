let pets = ['goldfish', 'dog', 'rhino'];

// let petz = newArray(5, 6, 7);

// console.log(pets[2]);

console.log(pets.length)

pets[3] = 'bunny';

console.log(pets);

pets.push('lizard');

const steps = ['one', 'two', 'three'];

// .foreach call a function for every item in the array

// steps.forEach(function(item){
//     console.log(item);
// })

steps.forEach(showStep);

function showStep(item) {
    console.log(item)
}

// .map also calls a function but create a new array from the original array

let myList = document.querySelector('#myList');

const stepsHtml = steps.map(listTemplate);

function listTemplate (item) {
    return `<li> ${item} </li>`
}
myList.innerHTML = stepsHtml.join(' ');

// .map

let grades = ['A', 'B', 'D'];

let points; 

let gpaPoints = grades.map(convert);

function convert(grade){
    switch (grade) {
        case "A":
            points = 4;
            break;
        case "B":
            points = 3;
            break;
        case "C":
            points = 2;
            break;
        case "D":
            points = 1;
            break;
        case "F":
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

console.log(gpaPoints);
console.log(grades);

// .reduce - reduce down to a single value with an accumelator

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item){
    return total + item;
}

console.log(totalPoints);
let gpaAverage = totalPoints / gpaPoints.length;

console.log(gpaAverage);

//.filter make a new array but only items that pass a certain condition

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function(word){
    return word.length < 6;
})

console.log(shortWords);

// day 2 of class exmaple work 

const classes = [
    {name: 'WDD 131', credits: 2},
    {name: 'CSE 351', credits: 2},
    {name: 'NUTR 150', credits: 3},
]

let container = document.querySelector('#classes');

classes.forEach(function(item) {
    let name = document.createElement('div');

    let html = `
        <span>${item.name}</span>
        <span>$({item.credits})</span>
        <hr>
    `
    name.innerHTML = html;

    container.appendChild(name);
})
          