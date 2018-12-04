---
description: 
categories: JS
tags: [JS, bind, call, apply ]
---

**Bind, Call, Apply** 
są metodami (funkcjami) JavaScript, dzięki którym możemy sterować kontekstem wywołania funkcji.
Metody te tworzy nowe funkcje mającą tę samą treść, co funkcja pierwotna.

### **1. Bind()**###
+ Ustawia kontekst (**`this`**) na podany element. 
+ Zwraca funkcję z odpowiednio ustawionym `this`.
+ Zwraca zbindowaną kopię funkcji. 
+ Raz zbindowany obiekt nie może być ponownie zbindowany.

{% highlight ruby %}
var name = "Alien"; // undefined

var person = {
    name: "Justyna",
    sayHello() {
        return (`Hello my name is: ${this.name}`)
    }
} // undefined

var userHello = person.sayHello; // undefined

userHello(); // "Hello my name is: Alien" 

var userHello = person.sayHello.bind(person); // undefined

userHello(); // "Hello my name is: Justyna"

{% endhighlight %}


Przy wywołaniu **`userHello()`** `this` jest ustawione na zakres globalny, więc **`this.name`** wskazuje na **"Alien"**, a nie na **„Justyna”**.

**`person.sayHello.bind(person)`** w odróżnieniu od `apply` i `call` nie wywołuje metody od razu, tylko zwraca funkcję z odpowiednio ustawionym `this`.

### **2. Call(), Apply()**### 
+ Ustawia kontekst na podany pierwszy parametr, kolejne przekazuje jako parametry i zwraca wynik funkcji.

+ Obie metody za pierwszy parametr przyjmują obiekt, który ma zostać użyty jako `this`. 

+ **`apply()`** działa tak samo jak **`call()`**, funkcje różnią się jedynie sposobem przekazywania argumentów 
(**`call`**- pojedynczo, **`apply`**- jako tablica, argumenty które chcemy przekazać umieszczamy w tablicy).


{% highlight ruby %}
let nameOne = {
    name: 'Kasia'
    };            // undefined

let nameTwo = {
    name: 'Tomek'
    };            // undefined

let user = function(skillOne, skillTwo) {
    console.log(`${this.name} has a skill: ${skillOne} and ${skillTwo}`)
}                 // undefined

user(); // has a skill: undefined and undefined
        // undefined

let infoUserOne = user.call(nameOne, 'JS', 'React');   // Kasia has a skill: JS and React
                                                       // undefined

let infoUserTwo = user.apply(nameTwo, ['React-Redux', 'React']);  // Tomek has a skill: React-Redux and React
                                                                  // undefined

{% endhighlight %}

+ przy bezpośrednim wywołaniu funkcji **`user()`**, `this` jest ustawione na `undefined`.
+ przy użyciu funkcji **`call()`** wywołujemy **`user()`** tak, że `this` wskazuje na zmienną `nameOne`.


