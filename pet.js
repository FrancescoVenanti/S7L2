class pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static sameOwner(petA, petB) {
    return petA.ownerName === petB.ownerName
      ? petA.petName + " ha lo stesso padrone di " + petB.petName
      : petA.petName + " non ha lo stesso padrone di " + petB.petName;
  }
}

const submit = document.getElementById("petForm");
submit.addEventListener("submit", function (e) {
  e.preventDefault();
});

const register = document.getElementById("register");
register.addEventListener("click", function (e) {
  createPet();
  createList();
});

const pets = [];
const createPet = function () {
  let petNameIn = document.getElementById("petName");
  let ownerNameIn = document.getElementById("ownerName");
  let petSpeciesIn = document.getElementById("petSpieces");
  let petBreedIn = document.getElementById("petBreed");

  const newPet = new pet(petNameIn.value, ownerNameIn.value, petSpeciesIn.value, petBreedIn.value);
  pets.push(newPet);

  petNameIn.value = "";
  ownerNameIn.value = "";
  petSpeciesIn.value = "";
  petBreedIn.value = "";

  console.log(pets);
};

const createList = function () {
  const petList = document.getElementById("petList");
  petList.innerHTML = "";
  pets.forEach((el) => {
    petList.innerHTML += `
    <p class="display-3">Pet 1: ${el.petName} </p>
    <ul class="mb-3">
    <li>Pet name: ${el.petName}</li>
    <li>Owner name: ${el.ownerName}</li>
    <li>Pet speces: ${el.species}</li>
    <li>Pet breed: ${el.breed}</li>
    </ul>
    `;
  });
};
