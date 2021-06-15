const header = document.getElementsByTagName('header')
const h1 = header[0].children[0]
console.log(h1)
h1.innerText = "Changedddd!"


// define the object
// define the event
// define the function

const generateRandomNumber = (max) => Math.floor(Math.random() * max)

const generateRandomColor = (event) => {
    const R = generateRandomNumber(255);
    const B = generateRandomNumber(255);
    const G = generateRandomNumber(255);

    const colorString = `rgb(${R},${G},${B})`

    console.log('event', event)
    event.target.style.background = colorString;
}

document.addEventListener('click', generateRandomColor)

const button = document.querySelector('button:first-of-type')

const generateImage = (event) => {
    const randomNumber = generateRandomNumber(3)

    console.log(randomNumber)


    document.querySelector('.result').innerHTML = ""
    
    const image = document.createElement('img')

    if (randomNumber === 0) {
      image.src = "images/pizza.gif"
    }
    else if (randomNumber === 1) {
      image.src = "images/burger.gif"
    }
    else if (randomNumber === 2) {
      image.src = "images/sushi.gif"
    }
    else {
      image.src = "images/avocado.gif"
    }
    
    document.querySelector('.result').appendChild(image)
  }

button.addEventListener("click", generateImage)  