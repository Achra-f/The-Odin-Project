

console.log(99 + 1);


console.log((4 + 6 + 9) / 77);



let a = 10;

console.log(a)

console.log(a * 9)


let b = 7 * a;

console.log(b);


const max = 57;

let actual = max - 13;

let percentage = actual / max;


let name = "Ilya";

alert( `hello ${1}`); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?


const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}
