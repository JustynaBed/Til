---
description: 
categories: CSS
tags: [CSS]
---

**CSS** (ang. Cascading Style Sheets)- Kaskadowe arkusze stylów,
To język służący do definiowania wyglądu strony.

Stylowanie strony z ućyciem CSS polega na "uchwyceniu" za pomocą 
odpowiedniego selektora elementu (lub zbioru elementów) i przypisanie do niego odpowiedniej regułu CSS.


# **1. SELEKTOR** 
określa do jakich elementów odnosi się dana reguła.


### Selektor uniwersalny
Odnosi się do wszystkich elementów na stronie. 
{% highlight ruby %}
* {
...
}
{% endhighlight %}

*-asterysk

### Selektor typu
Odnosi się do elemektów o konkretnej nazwie.

{% highlight ruby %}
h1, h2, h3 {
...
}


p {
 font-family: Arial;
}
{% endhighlight %}


**p:** selektor,

**font-family: Arial:** deklaracja,

**font-family:** właściwość (cecha atrybutu),

**Arial:** wartość,


### Selektor identyfikatora
odnosi się do elementów , których wartość atrybutu **`id`** odpowiada
wartości podanej za znakiem **"`#`"**. 

Stylowanie za pomocą id:
+ stylizuje tylko konkretny element,
+ jest jendorazowe,
+ jest niezmienne.

{% highlight ruby %}
<div id="introduction">

#introduction {
 font-family: Arial;
}
{% endhighlight %}

### Selektor klasy
odnosi się do elementów , których wartość atrybutu **`class`** odpowiada
wartości podanej za znakiem **"`.`"**. 

Selektor klasy wybiera się, gdy:
+ chcemy nadać styl grupie elementów.

{% highlight ruby %}
<p class="introduction">

.introduction {
 font-family: Arial;
}
{% endhighlight %}

**1. Jeśli dany element na stronie posiada dwie klasy:**
 {% highlight ruby %}
 <p class="classOne classTwo">to jest paragraf-element blokowy</p>
 
 .classOne.classTwo {
     color: red
 }
 {% endhighlight %}
 
 **2. Relacja Rodzic- klasa dziecka**
 
 {% highlight ruby %}
 <div>
     <p class="paragraph">
         Hipster cornhole celiac kickstarter asymmetrical cred meggings.
         Retro pitchfork semiotics you
         thundercats occupy raw denim DIY.
     </p>
 </div>
 
 div .paragraph{
     color: red;
 }
 {% endhighlight %}
 
 **3. Klasa w znaczniku:**
 
 {% highlight ruby %}
 <h4 class="headingOne">nagłówek h4</h4>
 
 h4.headingOne {
     color: pink;
 }
 {% endhighlight %}

**4. Dwie różne klasy w dwóch oddzielnych znacznikach:**
 
 {% highlight ruby %}
 <p class="classFour">to jest paragraf-element blokowy</p>
 <p class="classFive">to jest paragraf-element blokowy</p>
 
 .classFour, .classFive {
     color: green;
 }
 {% endhighlight %}
 
 
 
### Selektor elementu dziecka
 
 Odnosi się do elementów, które są dziećmi innego, określonego elementu.
 
 {% highlight ruby %}
 <ol>
     <li>Pkt 1</li>
     <li>Pkt 2</li>
        <ul>
            <li>Podpunkt 1</li>
            <li>Podpunkt 2</li>
            <li>Podpunkt 3</li>
        </ul>
     <li>Pkt 3</li>
 </ol>
 
ol > li {
color: red;
}
 {% endhighlight %}
 
  ![Selektor elementu dziecka]({{ "./assets/img1.PNG"" | absolute_url }})
### Selektor elementu potomnego
  
  Odnosi się do elementów będących elemntami potomnymi innego, określonego elementu.
  
  {% highlight ruby %}
 <ol>
     <li>Pkt 1</li>
     <li>Pkt 2</li>
        <ul>
            <li>Podpunkt 1</li>
            <li>Podpunkt 2</li>
            <li>Podpunkt 3</li>
        </ul>
     <li>Pkt 3</li>
 </ol>
 
 ol li {
     color: red;
 }
 
  {% endhighlight %}
  
  ![Selektor elementu potomnego]({{ "./assets/img2.PNG"" | absolute_url }})
  
### Selektor elementów sąsiadujących bezpośrednio
  Odnosi się do elementów bezpośrednio sąsiadujących z innym, określonym elementem.
  
  {% highlight ruby %}
 <h1>Nagłówek 1</h1>
 <p>paragraf 1</p>
 <p>paragraf 2</p>
 
 h1 + p {
      color: red;
 }
  {% endhighlight %}
  
  ![Selektor elementów sąsiadujących bezpośrednio]({{ "./assets/img3.PNG"" | absolute_url }})

  
### Ogólny selektor elementów sąsiadujących
   Odnosi się do elementów sąsiadujących z innym elementem, choć niekoniecznie bezpośrednio.
   
   {% highlight ruby %}
   <h1>Nagłówek 1</h1>
   <p>paragraf 1</p>
   <p>paragraf 2</p>
   
   h1 ~ p {
        color: red;
   }
   {% endhighlight %}
   
   ![Selektor elementów sąsiadujących bezpośrednio]({{ "./assets/img4.PNG"" | absolute_url }})

# **2. Co nowego w CSS3:**
+ nowa gama selektorów  (nth-of-type, first-child, nth-child...)
+ 2D Transforms (translate, rotate, scale, skew, matrix)
+ border-radius
+ box-shadow

# **3. Co oznacza kaskadowość stylów?**
Dzięki kaskadowości stylów jesteśmy w stanie nadpisywać style na stronie. Można to również określić jako: "rywalizację pomiędzy arkuszami stylów".

Trzy sposoby wstawiania stylów CSS:
+ **External**- zewnętrznie, jako odzielny plik css.

{% highlight ruby %}
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="float.css">
</head>

body {
    background-color: lightblue;
}

h1 {
    color: navy;
    margin-left: 20px;
}

 {% endhighlight %}
 
 
+ **Internal**- na stronie html, w znacznikach `<style>` w `<head>`.

{% highlight ruby %}
<head>
<style>
body {
    background-color: blue;
}

h1 {
    color: maroon;
    margin-left: 40px;
} 
</style>
</head>
 {% endhighlight %}
 
 
+ **Inline**- wpisane inline’owo poprzez atrybut `style=""`.

 {% highlight ruby %}
<h1 style="color:red;margin-left:30px;">This is a heading</h1>
 {% endhighlight %}
 
 
 **Ważność stylów:**
 
 inline > internal > external
 
Jeżeli link z zewnętrznym arkuszem stylu jest nad znacznikiem 
`<style>` to będzie **mniej ważny** i nagłówek `h5` będzie koloru niebieskiego.
 
{% highlight ruby %}
   <link rel="stylesheet" href="Klasy.css">
   <style>
   h5 {
       color: blue
   }
   </style>
   </head>
   <body>
   <h5 >Nagłówek h5</h5>
{% endhighlight %}
  
 W tym przypadku, gdy link jest pod znacznikiem `<style>`
 jego reguły będą **ważniejsze** i w tym przypadku `h5` będzie koloru czerwonego.
 
{% highlight ruby %}
   <style>
   h5 {
       color: blue
   }
   </style>
   <link rel="stylesheet" href="Klasy.css">
</head>
<body>
<h5 >Nagłówek h5</h5>
{% endhighlight %}