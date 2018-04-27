---
categories: JS ES6
tags: [JS ES6]
---

**ECMASript (ES)** jest międzynarodowym standardem języka JavaScript, zapewniającym ujednolicenie pisania kodu.
Początek ES sięga wydarzenia kiedy wprowadzono obługę JS także w innych przeglądarkach, niż Netscape (pierwsza przeglądarka osługująca JS).
Sporządzono wtedy dokument jak dokładnie ten język ma działać.

Nowości ECMAScript2015 (ES6):

# **1. Arrow functions (fat arrow function)**#

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

# **2. Templete string**#


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

# **3. Destrukturyzacja**#

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

# **4. Klasy**#

{% highlight ruby %}
class Person {
// object constructor
// (executed when new Person())
constructor(name) {
this.name = name
}
// class method
getName() {
console.log(this.name)
}
}
{% endhighlight %}

# **4. Deklarowanie zmiennych za pomocą słówka ```let```, ```const```**#
[Odnośnik_1][Odnośnik_1]

[Odnośnik_1]: https://justynabed.github.io/Til//es6/nowe-zmienne/




