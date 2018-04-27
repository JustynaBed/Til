---
description: typeof zmienne
categories: JS
tags: [JS]
---



# **1. Typ prosty (typ prymitywny)**
+ boolean (wartość logiczna: true, false)

{% highlight ruby %}
let isAvailable = true;
{% endhighlight %}
 
+ number (liczba całkowita lub zmiennoprzecinkowa

{% highlight ruby %}
let age = 28;
const PI = 3.14; 
{% endhighlight %}
+ string (znak lub łańcuch znaków)

{% highlight ruby %}
let x = "1";
let y = '1'; 
{% endhighlight %}

+ null (to wartość „pusta”)

{% highlight ruby %}
let x = null; 
{% endhighlight %}

+ undefined (domyślna wartość niezaincializowanych zmiennych)
	
{% highlight ruby %}
let job; // undefined
{% endhighlight %}
	
+ symbol


 Metoda Symbol() za każdym razem zwraca nowy, unikatowy identyfikator.
{% highlight ruby %}
const one = Symbol()

const two = Symbol()

one === two // false
{% endhighlight %}

Dwie powyższy zmienne nie są takie same, są unikatowe i posiadają swój własny symbol.

Sprawdzenie typu zmiennej:
{% highlight ruby %}
typeof Symbol () // ”symbol”
{% endhighlight %}


# Sprawdzanie typu zmiennej– metoda typeof()


{% highlight ruby %}
var name = "Justyna";
typeof(name); // string
typeof name; // string
typeof(5); // number
typeof 4; // number
{% endhighlight %}


# **2. Typ złożony**
Wszystkie zmienne nie będące typem prostym są obiektami i są typu referencyjnego.
Ten typ danych charakteryzuje się tym,
 że zmienne nie mają przypisanej bezpośrednio wartości, a tylko wskazują na miejsce w pamięci, gdzie te dane są przetrzymywane. 
+ Function (funkcja)

{% highlight ruby %}
var getFullName = function () {
return firstName + surName;
}; // function
{% endhighlight %}

+ Array (tablica)

{% highlight ruby %}
var skills = ['HTML5', 'CSS3', 'React']; // object
{% endhighlight %}

Tablice to w rzeczywistości obiekty.
+ Object (obiekt ogólny)

{% highlight ruby %}
var getFullName = {
    firstName: 'Justyna',
    surName: 'Bednarko'
}; // object
{% endhighlight %}


