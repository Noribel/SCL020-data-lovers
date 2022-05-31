/* eslint-disable no-undef */
import {
  dataCards
  
  } from './data.js';

  import { searchInput, orderAZ, orderZA, statusFilter, filterLocation, filterSpecies} from './data.js';
  
  const d = document;

// variable "results" contiene toda la data
window.addEventListener("load", showCharacters(dataCards));

//funcion para crear card con propiedades de la data
function showCharacters(dataCards) {
  let container = d.getElementById("container")
  container.innerHTML = "";
  dataCards.map(function(character) {
      const charactersName = character.name
      const charactersSpecies = character.species
      const charactersImage = character.image
      const characterStatus = character.status
      const characterLocation = character.location.name

      let div = d.createElement("div")
      let image = d.createElement("img")
      let name = d.createElement("p")
      let status = d.createElement("p")
      let specie = d.createElement("p")
      let location = d.createElement("p")

      div.setAttribute("class", "card")
      image.setAttribute("src", charactersImage)
      image.setAttribute("class", "card_image")
      name.setAttribute("class", "card_name")
      status.setAttribute("class", "card_status")
      specie.setAttribute("class", "card_specie")
      location.setAttribute("class", "card_location")

      name.innerHTML = charactersName
      status.innerHTML = ` <div class="status_innerHTML">
      <b class="card_status"> Status: </b>
      ${characterStatus} </div>
      <div class="card_status_circle" >
      <div/>`
      specie.innerHTML = `<div class="specie_innerHTML">
      <b class="card_specie"> Species: </b>
      ${charactersSpecies}</div>`
      location.innerHTML = `<div class="location_innerHTML">
      <b class="card_location"> Location: </b>${characterLocation}</div>`

      container.appendChild(div);
      div.appendChild(image)
      div.appendChild(name)
      div.appendChild(status)
      div.appendChild(specie)
      div.appendChild(location)
  });

}

const inputSearch = document.getElementById('search'); //se crea la constante inputSearch

    inputSearch.addEventListener('input', (e) => {
    const { value } = e.target;
    showCharacters(searchInput(dataCards, value));
  });

  //funcionalidad al selector id='sort'

const sortOption = document.querySelector('#sort'); 

sortOption.addEventListener('change', (event) => { 
    
    const ordenSeleccionado = event.target.value;     
    if (ordenSeleccionado === 'A-Z') {                
      const dataOrdenada = orderAZ(dataCards);   
      showCharacters(dataOrdenada);
    }
    if (ordenSeleccionado === 'Z-A') {
      const dataOrdenada = orderZA(dataCards);
      showCharacters(dataOrdenada);
    }
});

//filtro por status

const sortStatus = document.querySelector('#status');
sortStatus.addEventListener('change', (event) => { 
 const statusOrdenado =  statusFilter(dataCards,event.target.value) 
 showCharacters(statusOrdenado);
 return statusOrdenado(dataCards)
});
//filtro por location

const sortLocation = document.querySelector('#location');
sortLocation.addEventListener('change', (event) => { 
 const datalocation =  filterLocation(dataCards,event.target.value) 
 showCharacters(datalocation);
 return datalocation(dataCards)
});

//filtro por species

const sortSpecies = document.querySelector('#specie');
sortSpecies.addEventListener('change', (event) => { 
 const dataSpecies =  filterSpecies(dataCards,event.target.value) 
 showCharacters(dataSpecies);
 return dataSpecies(dataCards)
});

  function selectOptionslocation() {

    const location = dataCards.map(({ location }) => location.name)
    const unicos = new Set(location);
  
    unicos.forEach((option) => {
        const selectFilter = d.getElementById("location")
        let options = d.createElement("option")
  
        options.innerHTML = option
        selectFilter.appendChild(options);
    })
   }
    selectOptionslocation();

  
  function selectOptionsSpecies() {

      const species = dataCards.map(({ species }) => species)
      const unicSpecies = new Set(species);
    
      unicSpecies.forEach((option) => {
          const selectS = d.getElementById("specie")
          let options = d.createElement("option")
    
          options.innerHTML = option
          selectS.appendChild(options);
      })
     }
      selectOptionsSpecies();