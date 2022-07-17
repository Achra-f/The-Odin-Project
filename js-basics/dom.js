const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const text = document.createElement('p');
text.textContent = "Hey i'm red!"
text.style.color ='red';

const subTitle = document.createElement('h3');
subTitle.textContent = "I'm blue h3!";
subTitle.style.color = 'blue';


const content1 = document.createElement('div');
content1.classList.add('content1');
content1.style.border = 'solid black 2px';
content1.style.backgroundColor = 'pink';


const title = document.createElement('h1');
title.textContent = "I'm  a div";

const para = document.createElement('p');
para.textContent = "ME TOO!";


content1.appendChild(title);
content1.appendChild(para);

container.appendChild(content);
container.appendChild(text);
container.appendChild(subTitle);
container.appendChild(content1);

/*
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  alert("Hello World");
});
*/


function alertFunction() {
    alert("YAY! YOU DID IT!");
}

btn.addEventListener('click', alertFunction);
btn.addEventListener('click', function (e) {
  console.log(e.target);
});

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
// METHOD 3



// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

