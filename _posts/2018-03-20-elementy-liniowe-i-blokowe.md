---
description: Przypomnij, które znaczniki są elementami blokowymi,a które liniowymi.
categories: html
tags: [html]
---


# **1. Elementy liniowe**
Elementy liniowe zajmą tylko tyle miejsca ile same potrzebują, pozostawiając miejsce na tej samej linii dla kolejnych elementów liniowych. 

Są wyświetlane w tej samej linii, sąsiadują z innymi elemntami.


**Przykłady**: 


```<a> <b> <em> <i> <strong>```

```<img> <span>```

```<input> <label> <textarea>```

**PRZYKŁAD 1**
{% highlight ruby %}
<a href="/">link 1</a>
<a href="/">link 2</a>
<a href="/">link 3</a>


{% endhighlight %}

```link 1 link 2 link 3```

**PRZYKŁAD 2**
{% highlight ruby %}
<label>CENA:</label>
<input type=”text”>
{% endhighlight %}

```CENA:``` <input>


**PRZYKŁAD 3**
{% highlight ruby %}
<p> W tym akapicie <span style="font-weight:bold">
ten fragment jest pogrubiony</span>, 
natomiast <span style="font-style:italic">ten fragment 
jest pochylony</span>, a tu jest koniec akapitu.</p>
{% endhighlight %}

W tym akapicie **ten fragment jest pogrubiony**, natomiast _ten fragment 
jest pochylony_, a tu jest koniec akapitu.

# **2. Elementy blokowe**
Elementy blokowe zawsze wyświetlane są w nowej linii i zajmują jej całą powierzchnię, nakazując kolejnym elementom ukazanie się pod spodem.

Znajdują się samodzielenie na jednej linii.

**Przykłady**: 

```<h1> – <h6> <p> ```

```<ul> <ol> <li>```

```<dl> <dt> <dd> (znaczniki definicji)```

```<div> ```

```<header> <footer> ```

```<section> <nav> ```

```<article> <form> <table> <adress>```

```<br /> <hr />```

{% highlight ruby %}
<p>Pierwszy paragraf na pierwszej linii.</p>
<p>Drugi paragraf na drugiej linii.</p>
<p>Trzeci paragraf na trzeciej linii.</p>
{% endhighlight %}


```Pierwszy paragraf na pierwszej linii.```


```Drugi paragraf na drugiej linii.```


```Trzeci paragraf na trzeciej linii.```




# 3. Jak sprawić, aby element ```<div>``` zaczął zachowywać się jak liniowy?

Wykorzystuje się właściwość display, która odpowiada za określanie rodzaju sposobu wyświetlania elementu na stronie.

+ ```display: none``` – za pomocą którego możemy ukryć nasz element.
+ ```display: inline``` – sprawia, że element będzie wyświetlany jako element liniowy.
+ ```display: block``` – element zostanie wyświetlony jako element blokowy.
+ ```display: inline-block``` – łączy cechy elementów liniowych i blokowych. Za jego pomocą możemy sprawić, że będzie możliwe nadanie naszemu elementowi wymiarów i wszystkich marginesów, a także nie nastąpi po nim przejście do kolejnej linii.



