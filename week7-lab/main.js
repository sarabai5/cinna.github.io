function cat(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A cute little cat";
    this.image = "cat.png";
}
function dog(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A funny little dog";
    this.image = "dog.png";
}
function pig(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "The best piggie!";
    this.image = "pig.png";
}
let animals = [new cat(), new dog(), new pig()]
let names = ["Nazimi", "Little Gray", "Hao", "Rice", "Nana"]

// main function
function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    let randomIndex = generateRandomIndex(names.length);
    return names[randomIndex];
}

function generateRandomAge() {
    return generateRandomIndex(15);
}

function generateRandomAnimal() {
    let randomIdx = generateRandomIndex(animals.length);
    let randomAnimal = animals[randomIdx];

    if (randomAnimal instanceof cat) {
        return new cat(generateRandomName(), generateRandomAge());
    }
    else if (randomAnimal instanceof dog) {
        return new dog(generateRandomName(), generateRandomAge());
    }
    else if (randomAnimal instanceof pig) {
        return new pig(generateRandomName(), generateRandomAge());
    }
}

function onLoad() {
    let animal = generateRandomAnimal();
    console.log(animal);
    document.getElementById("animal-properties").innerText = `${animal.name} ${animal.age} years old`;
    let animalImage = document.getElementById("animal-img")
    animalImage.setAttribute("src", animal.image);
    animalImage.setAttribute("alt", animal.image_alt);

}




