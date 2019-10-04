const button = document.querySelector("button")
const input = document.querySelector("#blank")

const renderJoke = (funnyjoke) => {
  let funny = document.querySelector('.jokes')
  let chuckJoke = document.createElement('div');
  chuckJoke.innerHTML = `<h1>${funnyjoke}</h1>`
  console.log(funny)
  funny.append(chuckJoke)
}

button.addEventListener("click", async function () {
  let array = input.value
  let newArray = array.split(' ')
  console.log(newArray)
  const respond = await axios.get(`https://api.icndb.com/jokes/random?firstName=${newArray[0]}&lastName=${newArray[1]}`)
  console.log(respond)
  renderJoke(respond.data.value.joke)
})
