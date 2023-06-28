const select = document.querySelector('select')

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("callFact");
    button.addEventListener("click", needFact);
  });
  
  function needFact() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(data => displayFact(data.value))
      .catch(error => console.log(error));
  }
  
  function displayFact(fact) {
    let divContainer = document.getElementById("container");
    let newDiv = document.createElement("div");
    newDiv.textContent = fact;
    divContainer.appendChild(newDiv);
  }
  
  const categorie = () => fetch('https://api.chucknorris.io/jokes/categories')
  categorie().then((response) => response.json()).then((json) =>{
    for (let elem of json){
        const option = document.createElement('option')
        option.setAttribute('value', elem)
        option.innerText = elem
        select.append(option)
    }
    const option = document.createElement('option')
    option.setAttribute('value', null)
    option.textContent = 'none'
    option.setAttribute('selected', 'select')
    select.prepend(option)
})