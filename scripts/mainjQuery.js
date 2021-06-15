
$(document).ready(() => {

    const button = $('button:first-of-type')

    const generateRandomNumber = (max) => Math.floor(Math.random() * max)
    
    const generateImage = (event) => {
        const randomNumber = generateRandomNumber(3)
    
        console.log(randomNumber)
    
    
        $('.result').empty()
        
        const image = $('<img>')
    
        if (randomNumber === 0) {
          image.attr('src', "images/pizza.gif")
        }
        else if (randomNumber === 1) {
          image.attr('src',"images/burger.gif")
        }
        else if (randomNumber === 2) {
          image.attr("src", "images/sushi.gif") 
        }
        else {
          image.attr('src', "images/avocado.gif")
        }
        
        $('.result').append(image)
      }
    
    
    $('button:first-of-type').on('click', generateImage)
    
 
})

