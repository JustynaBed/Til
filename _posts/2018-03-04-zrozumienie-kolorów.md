---
categories: [css]
description: Kolory naprawdę potrafią ożywić tworzenie strony WWW. Poznaj sposoby określania kolorów w kaskadowych arkuszach stylów.
categories: css html
tags: [html css]
---
Każdy kolor na ekranie monitora jest tworzony jako połączenie pewnych ilości trzech kolorów podstawowych czerwonego, zielonego, niebieskiego. Kolory nie tylko ożywiają stronę internetową lecz także ułatwiają tworzenie odpowiedniego nastroju i wzbudzają emocje.

Autorzy stron internetowych mają do dyspozycji różne metody określania kolorów w sieciowych dokumentach. W kaskadowych arkuszach stylów kolory można określać na trzy sposoby- używając:

* HEX- zapis szesnastkowy (heksadecymalny),

* RGB,

* za pomocą nazw w języku angielskim (np. red, green, black).


# **1. KOD SZESNASTKOWY**

Wartości kolorów podstawowych- czerwonego, zielonego i niebieskiego zapisywane są jako szesnaście znaków (cyfr szesnastkowych). W najpowszechniejszym standardzie poza cyframi dziesiętnymi od 0 do 9 używa się pierwszych sześciu liter alfabetu łacińskiego: A, B, C, D, E, F. Cyfry 0-9 mają te same wartości co w systemie dziesiętnym, natomiast litery odpowiadają następującym wartościom: A = 10, B = 11, C = 12, D = 13, E = 14 oraz F = 15. Kod szesnastkowy poprzedzamy znakiem hash: #.
W zapisie tym wielkość liter nie ma znaczenia:

`color: #0000FF /* równoważne #0000ff*/`

Dodatkowo możemy skrócić ten zapis:

`color: #00F; /* równoważne #0000FF */`

Pamiętaj jednak, że takiego skrótu można użyć tylko, jeśli występują obok siebie parami te same liczby albo litery, licząc od lewej. np.: AA BB CC -> ABC.

`color: #1002FF; /* NIE jest równoważne #102F */`



# **2. RGB**

Jego nazwa powstała ze złożenia pierwszych liter angielskich nazw barw: 

**R** – red , 

**G** – green 

**B** – blue.


Wartości kolorów czerwonego, zielonego i niebieskiego są podawane jako liczby z zakresu od 0 do 255.



# **3. NAZWY KOLORÓW**

W tym przypadku ich liczba jest ograniczona, a poza tym zapamiętywanie nazw poszczególnych kolorów jest trudne (z wyjątkiem białego i czarnego 😉 ).

Zapisy kolorów w CSS:

{% highlight ruby %}
div {
 background-color: rgb(250, 250, 250); #fff (#ffffff) 'white'
 }
{% endhighlight %}

# **OPACITY**

W CSS3 wprowadzona została właściwość opacity, umożliwiająca określenie nieprzezroczystości elementu. Wartością tej własności może być liczba z zakresu od 0.0 do 1.0 ( a zatem użycie wartości 0.5 oznacza że element będzie w 50 % nieprzezroczysty). Im większy % tym przezroczystość nowo powstające koloru będzie mniejsza.

{% highlight ruby %}
div {
    background-color: green;
    opacity: 0.8;
}
{% endhighlight %}

Właściwość rgba  CCS pozwala na określenie kolorów w taki sam sposób jak wcześniej przy użyciu RGB, lecz dodatkowo umożliwia podanie czwartej wartości określającej nieprzezroczystość. Wartość ta jest określana mianem wartości alfa.

{% highlight ruby %}
div {
 background-color: rgba(0, 0, 0, 0.5)
}
{% endhighlight %}




# **W jaki sposób przekonwertować zapis koloru rgb na hex?**

a)	używając poniższych narzędzi:

[Konwerter 1][Konwerter-1]

[Konwerter 2][Konwerter-2]


b)	biorąc kartkę, długopis i kalkulator:

**Przykład 1:**
Przekonwertuj zapis w notacji RGB na zapis szesnastkowy:

rgb (232, 125, 35)

+ Obliczenie pierwszej pary kodu szesnastkowego:

232 : 16= **14**,5

14 * 16= 224

232 - 224= **8**

Pamiętając, że:
Cyfry 0-9 mają te same wartości co w systemie dziesiętnym, natomiast litery odpowiadają następującym wartościom: A = 10, B = 11, C = 12, D = 13, E = 14 oraz F = 15.

*Pierwsza para kodu szesnastkowego to:* `#E8`

+ Obliczenie drugiej pary kodu szesnastkowego:

125 : 16= **7**,87

7 * 16= 112

125 - 112= **13**

*Uzupełnienie kodu szesnastkowego to:* `#E87D`

+ Obliczenie trzeciej pary kodu szesnastkowego:

35 : 16= **2**,19

2 * 16= 32

35 - 32= **3**

*Nasz kolor w zapisie szesnastkowym:* `#E87D23`


# **SPRAWDZANIE KONTRASTU**
Koniecznie należy zadbać o odpowiedni kontrast pomiędzy kolorem tekstu, a tłem.
Ja najczęściej korzystam z poniższego narzędzia:

[Sprawdzanie kontrastu][Sprawdzanie-kontrastu]



[Konwerter-1]: http://lekka.cba.pl/sc_ap/converter_rgb_hex_color.htm
[Konwerter-2]: http://generujemy.pl/konwerter_rgb_na_hex
[Sprawdzanie-kontrastu]: https://webaim.org/resources/contrastchecker/