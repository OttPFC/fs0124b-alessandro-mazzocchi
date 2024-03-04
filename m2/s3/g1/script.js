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
    class Pet {
        constructor(petName, ownerName,species,breed){
            this.petName = petName;
            this.ownerName = ownerName;
            this.species = species;
            this.breed = breed;
        }

        getPet(){    
            let btn = document.getElementById('sent');        
            btn.addEventListener('click', () => {
                const formElement = document.getElementById('myForm');
            const formData = new FormData(formElement);
            const formArray = [];
            for (const pair of formData.entries()) {
            formArray.push({ name: pair[0], value: pair[1],name: pair[2], value: pair[3] });
            return formArray;
}
            })
        }
    }

    let n = new Pet();
    n.getPet();
    
}