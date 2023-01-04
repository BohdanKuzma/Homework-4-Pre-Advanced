//Task 1
class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        console.log(`Salary:`, this.rate * this.days);
    }
}

let worker1 = new Worker('Petro', 'Petriv', 10, 31);
let worker2 = new Worker('Pavlo', 'Pavliv', 25, 31);

console.log(worker1);
worker1.getSalary();
console.log(worker2);
worker2.getSalary();

//Task 2
class MyString {
    constructor(word) {
        this.word = word;

    }
    reverse() {
        console.log(this.word.split("").reverse().join(""));
    }
    ucFirst() {
        console.log(this.word[0].toUpperCase() + this.word.slice(1));
    }
    ucWords() {
        let arr = this.word.split(' ');
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let arr2 = arr.join(' ')
        console.log(arr2);
    }
}

let str1 = new MyString('IVAN')
let str2 = new MyString('arsenal')
let str3 = new MyString('arsenal arsenal arsenal')

str1.reverse();
str2.ucFirst();
str3.ucWords();

//Task 3
class CaffeMake {
    on() {
        console.log('Кавоварка ввімкнена')
    }
    off() {
        console.log('Кавоварка вимкнена');
    }
}

class DripCoffeeMaker extends CaffeMake {
    make_late() {
        console.log('Приготовлена Лате');
    }
}

class HornCoffeeMaker extends CaffeMake {
    make_espresso() {
        console.log('Приготовлена Еспресо');
    }
}

let firstCoffeMake = new DripCoffeeMaker();
let secondCoffeMake = new HornCoffeeMaker();

firstCoffeMake.on()
firstCoffeMake.off()
firstCoffeMake.make_late();

secondCoffeMake.on()
secondCoffeMake.off()
secondCoffeMake.make_espresso();