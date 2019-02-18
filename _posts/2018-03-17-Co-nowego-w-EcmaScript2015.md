---
categories: JS ES6
tags: [JS ES6]
---

**ECMASript (ES)** jest międzynarodowym standardem języka JavaScript, zapewniającym ujednolicenie pisania kodu.
Początek ES sięga wydarzenia kiedy wprowadzono obługę JS także w innych przeglądarkach, niż Netscape (pierwsza przeglądarka osługująca JS).
Sporządzono wtedy dokument jak dokładnie ten język ma działać.

Nowości ECMAScript2015 (ES6):

# **1. Arrow functions (fat arrow function)**

Funkcja strzałkowa (funkcja grubo-strzałkowa) w odróżnieniu od standardowych funkcji ma krótszy zapis.

ES5:
{% highlight ruby %}
var wordUp = function(word) {
	return word.toUpperCase()
}

console.log(wordUp('justyna');
{% endhighlight %}


ES6:
{% highlight ruby %}
const wordUp = (word) => {
    return word.toUpperCase()
};
{% endhighlight %}

Inne zapisy Arrow Functions:
{% highlight ruby %}
const wordUp = (word) =>
    word.toUpperCase()
{% endhighlight %}


{% highlight ruby %}
const wordUp = word =>
    word.toUpperCase()
{% endhighlight %}

Arrow functions to nie tylko inny sposób zapisu funkcji.
W odróżnieniu do standardowych funkcji, Arrow functions nie tworzy własnego
zakresu słówka kluczowego `this` ( zmienia kontekst this, przyjmuje this z kodu otaczającego)

ES5:
{% highlight ruby %}  
   function Person (name) {
       this.name = name
       this.sayHello = function() {
           console.log('Hello ' + this.name)
       }
   }
   
   var userOne = new Person('Justyna'); 
   
   userOne // Person {name: "Justyna", sayHello: ƒ}
   
   var sayHelloUser = userOne.sayHello
   
   sayHelloUser() // Hello 
                     undefined       
{% endhighlight %}


ES6:
{% highlight ruby %}  
  function Person (name) {
      this.name = name
      this.sayHello = () => {
          console.log(`Hello ${this.name}`)
      }
  }
  
  let userOne = new Person('Justyna'); 
  
  userOne // Person {name: "Justyna", sayHello: ƒ}
  
  let sayHelloUser = userOne.sayHello
  
  sayHelloUser() // Hello Justyna         
{% endhighlight %}


Arrow Functions nie możemy użyć jako konstruktora przy pomocy operatora `new`.

{% highlight ruby %}  
   let Person = (name) => {
       this.name = name;
   }
   
   let newUser = new Person('Tom'); // Uncaught TypeError: Person2 is not a constructor
                                        at <anonymous>:1:16
{% endhighlight %}
                               
# **2. Templete string**


EcmaScript 2015 wprowadza nowy sposób 
tworzenia stringów za pomocą tak zwanych backticków (grawisy)- ``.

ES5:
{% highlight ruby %}
var name = "Justyna"
var message = "Hello " + name
console.log(message)      // Hello "Justyna"
{% endhighlight %}

ES6:
{% highlight ruby %}
let name = "Justyna"
let message = `Hello ${name}`
console.log(message)      // Hello "Justyna"
{% endhighlight %}

# **3. Destrukturyzacja**

Możemy uzyskać łatwo dostęp do zagnieżdżonych wartości w tablicach i obiektach.

Przypisanie destrukturyzujące umożliwia przypisanie własności tablicy lub obiektów do zmiennych z wykorzystaniem składni przypominającej składnię tablic czy literałów obiektowych.


ES5:
{% highlight ruby %}
let arrOne = [10, 20, 30]
let a = arrOne[0]
let b = arrOne[1]
let c = arrOne[2]
console.log(a, b, c)        // 10 20 30

{% endhighlight %}

ES6:
{% highlight ruby %}
let arrTwo = [15, 20, 50]
let [a1, b2, b3] = arrTwo

console.log(a1, b2, b3)
{% endhighlight %}

# **4. Klasy**

Klasa definuje obiekt, który jest stworzony na podstawie tej klasy. Nowo powstały obiekt jest nazywany instancją klasy.
Klasa definiuje składowe poprzez **pola klasy**.
Stan początkowy poprzez **konstruktor**.
Zachowanie obiektu poprzez **metody klasy**.

Nowo powstały obiekt jest nazywany **instancją klasy** i tworzony jest za pomocą operatora `new`.

ES5:
{% highlight ruby %}
function ChemicalElement (name, mass) {
  this.name = name;
  this.mass = mass;
};

ChemicalElement.prototype.getName = function getName () {
  return this.name;
};

ChemicalElement.prototype.getMass = function getMass () {
  return this.mass + ' u' ;
};

var newElement = new ChemicalElement ('Hydrogen', '1');
newElement.getMass() // "1 u"
{% endhighlight %}

ES6:
{% highlight ruby %}
class ChemicalElement {
    constructor (name, mass) {
        this.name = name;
        this.mass = mass;
    }
    
    getName() {
        return this.name ;
    }
    
    getMass() {
        return (`${this.mass} u`);
    }
}

let newElement = new ChemicalElement ('Calcium', '40');
newElement.getMass() // "40 u"
{% endhighlight %}

W nowym zapisie mamy konstruktor z dwoma argumentami: `name`, `mass`, dwa pola oraz dwie metody klasy: `getName()`, `getMass()`.
Warto wspomnieć, że jeśli chcielibyśmy w szablonie `ChemicalElement` posiadać metodę informującą o roku odkrycia danego pierwiastka chemicznego,
to możemy skorzystać z **mechanizmu dziedziczenia klas**.

{% highlight ruby %}
class ChemicalElementNewClass extends ChemicalElement {

  constructor (name, mass, year) {
    super(name, mass, year); 
    this.year = year
  }

  getName () {
    return (`The name of this chemical element: ${super.getName()}`);
  }
  
  getYear () {return (`This chemical element was discovered: ${this.year}`)}
}

let newElement = new ChemicalElementNewClass ('Sodium', '23', '1807');
newElement.getMass(); // "23 u"
newElement.getYear(); // "This chemical element was discovered: 1807"

{% endhighlight %}

Klasa `ChemicalElementNewClass`, przy pomocy **`extends`** dzidziczy po `ChemicalElement`. 


Ponad to w konstruktorze klasy `ChemicalElementNewClass`, wykonywany jest konstruktor klasy dziedziczonej poprzez 
wywołanie z **`super`**. 


Metoda `getName()` zostaje nadpisana w klasie `ChemicalElementNewClass` i wykonuje
metodę `getName()` z klasy dziedziczonej również przy użyciu słowa kluczowego `super`. 
 
 
Dodatkowo klasa `ChemicalElementNewClass` została wzbogacona o swoją własną metodę `getYear()`.
 
 
  Wprowadzenie klas w ES6 jest tylko tak zwanym **sugar code**. 
  Nic nie zmienia, a jest tylko nakładką, która umożliwia nieco inne pisanie.
 
# **4. Deklarowanie zmiennych za pomocą słówka ```let```, ```const```**
[Odnośnik_1][Odnośnik_1]

[Odnośnik_1]: https://justynabed.github.io/Til//js/es6/let-const/

# **5. Spread operator ```...```** 

`numbersTwo` i `numbers` łączy referencja i obie zmienne wskazują na ten sam obiekt w pamieci.

{% highlight ruby %}
let numbers = [1, 2, 3];

let numbersTwo = numbers;
console.log(numbersTwo === numbers)

console.log('tablica numbers przed zmianą',  numbers)
console.log('tablica numbersTwo przed zmianą', numbersTwo)

numbersTwo[0] = "brak cyfry"
console.log('tablica numbers po zmianie', numbers)
console.log('tablica numbersTwo po zmianie', numbersTwo)

//true
//tablica numbers przed zmianą (3) [1, 2, 3]
//tablica numbersTwo przed zmianą (3) [1, 2, 3]
//tablica numbers po zmianie (3) ["brak cyfry", 2, 3]
//tablica numbersTwo po zmianie (3) ["brak cyfry", 2, 3]
{% endhighlight %}


ES6, kopiowanie bez referencji:
{% highlight ruby %}
let numbers = [1, 2, 3];

let numbersTwo = [...numbers];
console.log(numbersTwo === numbers)

console.log('tablica numbers przed zmianą',  numbers)
console.log('tablica numbersTwo przed zmianą', numbersTwo)

numbersTwo[0] = "brak cyfry"
console.log('tablica numbers po zmianie', numbers)
console.log('tablica numbersTwo po zmianie', numbersTwo)

//false
//tablica numbers przed zmianą (3) [1, 2, 3]
//tablica numbersTwo przed zmianą (3) [1, 2, 3]
//tablica numbers po zmianie (3) [1, 2, 3]
//tablica numbersTwo po zmianie (3) ["brak cyfry", 2, 3]
{% endhighlight %}

