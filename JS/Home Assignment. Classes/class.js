class animals {
    constructor (name, sound) {
        this.name = name;
        this.sound = sound;
    }

    animalSound() {
        console.log(`${this.sound[0].toUpperCase()+ this.sound.slice(1)}! I'm a ${this.name}`)
    }

    notifFoodAnimal(food) {
        console.log(`${this.name[0].toUpperCase()+ this.name.slice(1)} is currently eating ${food}.`)
    }

}


const animal = new animals('cat', 'meow');
const animal2 = new animals('dog', 'arf');
const animal3 = new animals('bird', 'tweet');
const animal4 = new animals('tiger', 'rawr');

animal.animalSound();
animal2.animalSound();
animal3.animalSound();
animal4.animalSound();

animal.notifFoodAnimal('kiwi');
animal2.notifFoodAnimal('pedigree');
animal3.notifFoodAnimal('seeds');
animal4.notifFoodAnimal('beef');