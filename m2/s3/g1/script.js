{
    class User {

        constructor(firstName,lastName,age,location) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.location = location;
        }
        
        getAge() {
                return this.age;
        }
        compareAge(a,b) {
            if (a.age >= b.age) {
                return a.firstName + ' è più vecchio di ' + b.firstName;
            }else if (a.age < b.age) {
                return a.firstName +' è più giovane di '+ b.firstName;
            }else {
                return 'E stato bello.';
        }
    }
}
    let n = new User();
    const aldo = new User('Aldo','Baldo', 90, 'Poreta');
    const giacomino = new User('Giacomino','Poretti', 60,'Torino');
    console.log(n.compareAge(giacomino,aldo));
    
    
}

{
const pet = [];
    let btn = document.getElementById('sent')
    class Pet {
        constructor(petName, ownerName,species,breed){
            this.petName = petName;
            this.ownerName = ownerName;
            this.species = species;
            this.breed = breed;
        }

        getPet(){
            btn.addEventListener('click', () => {
                event.preventDefault();
                for (let i = 0; i < pet.length; i){
                    if(pet[i]  ){
                        
                    }
                }

                let petName = document.getElementById('petName').value;
                let ownerName = document.getElementById('yourName').value;
                let species = document.getElementById('species').value;
                let breed = document.getElementById('breed').value;
                const newPet = new Pet(petName,ownerName,species,breed)
                pet.push(newPet);
                console.log(newPet);
                
                
                
            })
        }
    }
    let b = new Pet();
    console.log(b.getPet());
}

/*
{
    const pet = [];
    let btn = document.getElementById('sent')
    class Pet {
        constructor(petName, ownerName,species,breed){
            this.petName = petName;
            this.ownerName = ownerName;
            this.species = species;
            this.breed = breed;
        }

        getPet(){
            btn.addEventListener('click', () => {
                preventDefault();

                
                const newPet = {
                    petName: '',
                    ownerName: '',
                    species: '',
                    breed: ''
                }
                let petName = document.getElementById('petName').value;
                let ownerName = document.getElementById('yourName').value;
                let species = document.getElementById('species').value;
                let breed = document.getElementById('breed').value;
                newPet.petName = petName;
                newPet.ownerName = ownerName;
                newPet.species = species;
                newPet.breed = breed;
                pet.push(newPet);
                console.log(newPet);
                
            })
        }
    }
    let b = new Pet();
    console.log(b.getPet());
}
*/