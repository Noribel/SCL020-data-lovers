import { searchInput, orderAZ, orderZA, statusFilter, filterLocation, filterSpecies } from '../src/data.js';

const data = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
},
{
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31"
    ],
    "url": "https://rickandmortyapi.com/api/character/2",
    "created": "2017-11-04T18:50:21.651Z"
},
{
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31"
    ],
    "url": "https://rickandmortyapi.com/api/character/3",
    "created": "2017-11-04T19:09:56.428Z"
},
{
  "id": 4,
  "name": "Beth Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
  "origin": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/4.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31"
  ],
  "url": "https://rickandmortyapi.com/api/character/4",
  "created": "2017-11-04T19:22:43.665Z"
},

]

//test de búsqueda por nombre
describe('función searchInput para buscar a los personajes por su nombre', () => {
  it('is a function', () => {
    expect(typeof searchInput).toBe('function'); 
  });

  it('Debe retornar a los personajes por su nombre', () => {

    let nameCharacteres = searchInput(data, 'ri');

    
    expect(nameCharacteres[0].name).toBe('Rick Sanchez');

  })
})

//test orden alfabetico
describe('Funcion orderAZ ordena alfabéticamente a los personajes', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });

  it('Debería retornar los nombres de los personajes ordenados de la A-Z', () => {

    
    let orderAz = orderAZ (data);  

    expect(orderAz[0].name).toBe('Beth Smith');
    expect(orderAz[1].name).toBe('Morty Smith');
    expect(orderAz[2].name).toBe('Rick Sanchez');
    expect(orderAz[3].name).toBe('Summer Smith');

  });
});

describe('Funcion orderZA ordena alfabéticamente a los personajes', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });

  it('Debería retornar los nombres de los personajes ordenados de la A-Z', () => {

    
    let orderZa = orderZA (data);

    expect(orderZa[0].name).toBe('Summer Smith');
    expect(orderZa[1].name).toBe('Rick Sanchez');
    expect(orderZa[2].name).toBe('Morty Smith');
    expect(orderZa[3].name).toBe('Beth Smith');
    

  });
});

//test status
describe('prueba para la funcion de filtro por status', () => {
  it('is a function', () => {
    expect(typeof statusFilter).toBe('function');
  });

  it('Debería retornar el status alive', () => {
    
    let status= statusFilter (data,'Alive');

    expect(status[0].status).toBe('Alive');
    expect(status[1].status).toBe('Alive');
    expect(status[2].status).toBe('Alive');
    expect(status[3].status).toBe('Alive');
  });

  });

//test location

describe('prueba para la funcion de filtro de la locación', () => {
  it('is a function', () => {
    expect(typeof filterLocation).toBe('function');
  });

  it('Debería retornar a los personajes con status Earth', () => {
 
        let location= filterLocation (data,'Earth (Replacement Dimension)');

    expect(location[0].name).toBe('Summer Smith');
  });

  //test species

  describe('prueba para la funcion de filtro de las especies', () => {
    it('is a function', () => {
      expect(typeof filterSpecies).toBe('function');
    });
  
    it('Debería retornar a los personajes por especies', () => {
   
          let species= filterSpecies (data,'Human');
  
      expect(species[0].name).toBe('Summer Smith');
    });
  })


})

