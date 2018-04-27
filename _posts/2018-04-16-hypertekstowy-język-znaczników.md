---
description: Jakie nowości zostały wprowadzone w HTML5? Jak zbudowana jest strona zapisana za pomocą tej wersji?
categories: HTML
tags: [HTML]
---

**HTML** (ang. HyperText Markup Language)- Hipertekstowy język znaczników, 
wykorzystywany do tworzenia stron internetowych, aplikacji  internetowych. Służy do zapisywania treści strony.





# **1. Struktura strony:**

{% highlight ruby %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"> 
    <title>New Webpage</title>
<style>
</style>
</head>
<body>
    <header></header>
    <main></main>
    <footer></footer>
</body>
</html>
{% endhighlight %}


Zapis **`<!DOCTYPE html>`** mówi przeglądarce, że korzystamy z **HTML 5**. Wpływa na to jak wygląda strona.


Pod deklaracją **`<!DOCTYPE html>`**  występuje znacznik **`<html>`**. Znacznik zamykający **`</html>`** 
zawsze jest na końcu strony. Między nimi znajdują się wszystkie inne znaczniki tworzące tę stronę.


W **`<head>`** znajdują się znaczniki, ułatwiające przeglądarce odpowiednio wyświetlić stronę. 


Znacznik **`<meta charset="utf-8">`** szczegółowo informuje przeglądarkę jak to zrobić, określa kodowanie znaków w pliku HTML.


Znacznik **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`** powoduje, że szerokość contentu przeglądarki (width) 
zostanie ustawiona na szerokość równą rozdzielczości poziomej urządzenia (device-width). 
Wpływa również na to, że początkowa skala wyświetlanego contentu to 100%.


Znacznik **`<title>`** określa tytuł dokumentu, wyświetlany jest w pasku tytułu przeglądarki lub zakładki.


Znacznik **`<style>`** stosowany do stylów wewnątrz dokumentu HTML (internal style). 


Znacznik **`<header>`** definiuje nagłówek strony lub sekcji.


Znacznik **`<main>`** zawiera treść, która jest unikalna na całej stronie. Na stronie może zostać użyty tylko raz.


Znacznik **`<footer>`** definiuje stopkę strony lub sekcji.


Jeśli zapomnimy zamknąć jakiś znacznik to zazwyczaj przeglądarka spróbuje wyświetlić go w taki sposób jak potrafi.


# **2. Semantyka HTML**

W kontekście tworzenia stron internetowych, semantyka odnosi się do wykorzystania znaczników semantycznych zgodnie z ich przeznaczeniem.  Różne znaczniki mają różne znaczenie na stronie. 
Wykorzystanie znaczników zgodnie z przeznaczeniem oznacza używanie :
+ znaczników nagłówków (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`) do oznaczania nagłówków, 
+ znaczników paragrafu (`<p>`) do paragrafów, 
+ znaczników list (`<ul>`, `<ol>`, `<dl>`, `<datalist>`) do list, 
+ znaczników tabel (`<table>`, `<tbody>`, `<thead>`, `<tfoot>`, `<tr>`, `<td>`,`<th>`)  do tabel, i tak dalej.





**Przykład 1 (niepoprawny / niesemantyczny HTML):**

{% highlight ruby %}
<p class="heading">Nagłówek</p> 
{% endhighlight %}


**Przykład 2 (poprawny / semantyczny HTML):**

{% highlight ruby %}
<h1>Nagłówek</h1>
{% endhighlight %}


Nagłówki umieszczaj w znacznikach nagłówków

# **3. Co nowego w HTML5:**
**HTML5** to następca języka HTML4, większość zmian odnosi się do sposobu prezentacji plików audio, wideo i grafiki (w tym zdjęć), jak również modyfikowania wyglądu i zachowania tekstów.
 
 Zmiany:
+ wprowadzenie atrybutu data-*

{% highlight ruby %}

<ul>
    <li id="animal" data-type="cat">Cod</li> 
</ul>

let animalType = document.getElementById('animal');

animalType.dataset.type // 'cat'

animalType.dataset.type = 'fish'

animalType.dataset.type // 'fish'

{% endhighlight %}

Atrybut ten umożliwia tworzenie własnych, niestandardowych atrybutów strony.
Nazwę atrybutu podaje się za przedrostkiem `data`, nazwa ta nie może zawierać wielkich liter, natomiast może zawierać liczby. 
`HTMLElement.dataset` umożliwia dostęp oraz zmianę danych niestandardowych atrybutów `data`.

+ brak typów dla elementów `<script>` i `<link>`
{% highlight ruby %}

HTML4
<link rel="stylesheet" type="text/css" href="styles.css">

HTML5
<link rel="stylesheet" href="styles.css">

{% endhighlight %}

+ `<figure>`, `<video>`, `<audio>`, `<truck>`, `<embed>`, `<progress>`, `<meter>`, `<time>`, `<template>` – odpowiadające na potrzeby współczesnych, multimedialnych stron www.  
+ `<section>`, `<article>`, `<header>`, `<main>`, `<footer>`, `<nav>`, `<output>` – przeznaczone do budowania struktury strony.
+ `<math>`- pozwala na wyświetlenie dowolnie złożonych wzorów matematycznych, przydatne w publikacjach naukowych.
