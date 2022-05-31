// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


import data from './data/rickandmorty/rickandmorty.js';

export const dataCards = data.results; //array

//Búsqueda por personajes
export const searchInput = (dataCards, value) => {
  const buscador = dataCards.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
  return buscador;
};

//orden por alfabeto

export const orderAZ = (order) => {
  const orderlyAZ = order.sort((a, b) => ((a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)); 
    return orderlyAZ;
};

export const orderZA = (order) => {
  const orderlyZA = order.sort((a, b) => ((a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1));
  return orderlyZA;
};

//filtro por status
export const statusFilter = (dataCards, valor) => {
  const filterStatusArr = dataCards.filter(items => (items.status === valor || valor === 'All')); 
  return filterStatusArr;
};

//filtro location
export function filterLocation(dataCards, location) {
  let filtered = dataCards.filter((character) => (character.location.name == location))
  return filtered;
}

//filtro species
export function filterSpecies(dataCards, species) {
  let filtered = dataCards.filter((character) => (character.species == species))
  return filtered;
}
