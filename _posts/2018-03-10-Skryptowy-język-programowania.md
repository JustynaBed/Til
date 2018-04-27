---
description: JavaScript jako sktyptowy język programownia. Zbiór najważniejszych definicji tego języka oraz jego różnice pomiędzy językiem programowania JAVA 
categories: JS
tags: [JavaScript, JAVA]
---

1. JavaScript (JS) – **skryptowy** język programowania zorientowany obiektowo, stworzony przez firmę Netscape. Twórcą JavaScript jest Brendan Eich. 


2. Jako język skryptowy jest językiem **interpretowanym** nie musi zostać skompilowany do kodu maszynowego, aby można było zaznaczyć efekty jego działania- wystarczy przeglądarka internetowa (interpreter). Interpreter jest narzędziem wbudowanym w przeglądarkę WWW.


3. Jest językiem **wieloplatformowym**- kod w nim zapisany będzie w większości przypadków działał na różnych systemach operacyjnych (MS Windows, Linux, Mac OS) dając ten sam wynik.


4. Jest językiem **obiektowym**- traktuje dane zapisane na stronie jako obiekty o hierarchicznej strukturze. Standard W3C DOM (Obiektowy Model Dokumentu Konsorcjum WWW)- standard ten określa w jaki sposób można uzyskać dostęp do elementów dokumentów HTML z poziomu języka JavaScript i jak wykonywać na nich operacje, co umożliwia łatwiejszą organizację stron WWW.


5. JavaScript jest językiem **dynamicznie typowanym**. Oznacza to, że nie musimy deklarować typu zmiennej, ponieważ jest on automatycznie konwertowany do pożądanych wartości w czasie wykonywania skryptu. Przykładowo możemy zdefniniować zmienną w podany sposób:


{% highlight ruby %}
var answer = 42;
{% endhighlight %}

A później przypisać do tej samej zmiennej kawałek typu string:

{% highlight ruby %}
answer = "Przykład...";
{% endhighlight %}

To przypisanie nie wywołuje błędu, gdyż typ danych został ustalony dynamicznie. 
W wyrażeniach, w których tekst mieszany jest z liczbami za pomocą operatora "+" JS konwertuje wartości liczbowe do ciągu znaków. Ilustruje to poniższy przykład:

{% highlight ruby %}
x = "Odpowiedź to " + 42;       // "Odpowiedź to 42"
y = 42 + " jest odpowiedzią";   // "42 jest odpowiedzią"
{% endhighlight %}


W przypadku użycia innych operatorów JavaScript nie używa powyższej metody, ale konwertuje je automatycznie próbując sparować dwie zmienne. 


{% highlight ruby %}
"37" - 7        // 30
"37" + 7        // "377"
{% endhighlight %}


6.**JS zapewnia:**
+ interaktywność stron oraz obsługę zdarzeń,
+ walidację formularzy,
+ atrakcyjny sposób prezentacji stron,
+ wprowadzenie do statycznych stron efektu ruchu oraz elementów interaktywnych,
+ możliwość interakcji z użytkownikiem,
+ możliwość reakcji na zdarzenia,
+ tworzenie plików cookie.


7.JavaScript (opracowany przez Netscape) **nie jest tym samym** co Java (opracowana przez SunMicrosystems). 


Mimo zbieżności nazw Java nie jest tożsama z JavaScript. Są to dwie odrębne techniki programowania. Java jest językiem programowania, natomiast JavaScript jest językiem skryptowym. 
Różnica polega na tym, że Java pozwala tworzyć rzeczywiste programy. JavaScript jest pomyślany jako narzędzie łatwe do zrozumienia i zastosowania. Można powiedzieć, że JavaScript jest raczej rozszerzeniem HTML niż odrębnym językiem komputerowym.


**GŁÓWNE RÓŻNICE MIĘDZY JĘZYKAMI PROGRAMOWANIA JAVA, A JAVASCRIPT:**
+ JavaScript jest językiem dynamicznym, Java nim nie jest. 
+ Java jest oparta na klasach, zaś JavaScript jest językiem prototypowym (prototype based). 
+ Oba jednak są obiektowe. Java to obiektowy język programowania, a JavaScript to obiektowy język skryptowy. 
+ Aplikacje w języku Java działają w maszynie wirtualnej lub w przeglądarce, a kod JavaScript jest uruchamiany wyłącznie w przeglądarkach.
+ Kod języka Java wymaga skompilowania, a kod JavaScript pozostaje w formie tekstu.
+ Języki wymagają różnych wtyczek.







