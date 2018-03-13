---
description: let, const vs var- dzięki nim definiujemy zmienną, ale…
categories: React
tags: [React, props, state, JSX, DOM, VDOM]
---
**React** jest biblioteką języka programowania JavaScript, która służy do tworzenia interfejsów użytkownika. 
Interfejs użytkownika, UI – przestrzeń, w której następuje interakcja człowieka z maszyną.


**Cechy które posiada REACT :**


_a)	VDOM_

Z głównych cech wyróżniających bibliotekę React.js jest wirtualny DOM. 


React przechowuje cały DOM aplikacji w pamięci, po zmianie stanu wyszukuje różnice między wirtualnym i prawdziwym DOM i aktualizuje zmiany.

**DOM**- Document Object Model (Obiektowy Model Dokumentu)


**VDOM**- Virtual Document Object Model (Wirtualny Obiektowy Model Dokumentu)



_b)	Język JSX_

Drugą z cech szczególnych React jest język **JSX**. 
Jest on nakładką na JavaScript, która dodaje możliwość wstawiania kodu HTML (lub komponentów React) bezpośrednio w kodzie, zamiast ciągu znaków.

# 2.Komponenty#

Do utworzenia potężnej aplikacji wykorzystuje się małe zarządzalne komponenty.

Komponent jest to standardowy obiekt Javascriptowy, który odzwierciedla węzeł z drzewa DOM. 
Każdy może zawierać w sobie inne komponenty (jest to tak zwane drzewo komponentów). 
Pozwala to na rozbicie każdego z nich na mniejsze części, 
które są łatwiejsze w testowaniu, obsłudze oraz mogę być ponowne użyte w innych komponentach.


Komponenty
+ upraszają budowę całej aplikacji,
+ umożliwiają ponowne użycie napisanego kodu.


**Co posiada reactowty component?** 


**a)  właściwości (props)**


Parametryzowanie tego co wyświetla komponent. 

Propsy są niemutowalne- propsów nie da się zmienić z wnętrza komponentu. 

`this.props` służy jako obiekt do odczytu.



Poniższy kod zawiera kilka prostych linii HTML. Znacznik dialog to element wbudowany w HTML5.

{% highlight ruby %}
<div>
  <dialog open>
    <h1>Tytuł</h1>
    <p>Treść</p>
  </dialog>
</div>

{% endhighlight %}

Następnie zamieniamy taki kod na komponent, czyli tworzymy funkcję, która zwraca JSX:

{% highlight ruby %}
function MyComponent() {
  return (
    <div>
      <dialog open>
        <h1>Tytuł</h1>
        <p>Treść</p>
      </dialog>
    </div>
  );
}
{% endhighlight %}


Niestety teraz aby zmienić tekst, musimy edytować kod samego komponentu, a to jest mało praktyczne. Czy można jakoś sparametryzować to co wyświetla komponent? Tak! Używając tzw. propsów.

Do tej pory komponentu używaliśmy w taki sposób: ```<MyComponent />```. Czyli jest to tak jakby element. A czy możemy dodać tutaj jakieś atrybuty? Właśnie tak! To dokładnie będą nasze propsy. Props to atrybut. 
Podajmy więc tytuł i treść: 

{% highlight ruby %}
<MyComponent title="Tytuł" content="Treść" />
{% endhighlight %}

Teraz musimy jeszcze jakoś się odwołać do tych propsów i wyświetlić.

Propsy do komponentów przekazywane są po prostu jako argumenty. A konkretnie: Jeden argument, który jest obiektem. 
Funkcja przybiera taką postać:

{% highlight ruby %}
function MyComponent({ title, content }) { … }
{% endhighlight %}


Jak teraz wyświetlić zawartość takiej zmiennej w JSX? 
Wystarczy skorzystać ze składni ```{nazwa}```.

Ostatecznie otrzymujemy taki kod:

{% highlight ruby %}
function MyComponent({ title, content }) {
  return (
    <div>
      <dialog open>
        <h1>{title}</h1>
        <p>{content}</p>
      </dialog>
    </div>
  );
}
{% endhighlight %}

Wyrenderowanie komponentu:

{% highlight ruby %}
ReactDOM.render(
  <MyComponent
    title="Propsy"
    content="Treść Propsów"
  />,
  document.getElementById("app")
);
{% endhighlight %}



**b)  state**


Wewnętrzy stan komponentu, służy do przechowywania stanu komponentu. 
Ponadto, ```state``` można mutować dzięki funkcji ```setState```.

**stateful components** komponent ze stanem


**stateless components** komponent bez stanu


Stan zawsze należy uaktualniać, wywołując metodę ```this.setState()```, która pobiera obiekt i scala go z istniejącymi danymi w obiekcie ```this.state```.
Po wywołaniu tej motody dochodzi do uaktualnienia interfejsu użytkownika.
Dochodzi to poprzez mechanizm kolejkowania, który efektywnie grupuje zmiany.


# 2. DWA SPOSOBY TWORZENIA KOMPONENTÓW#


a)	**Za pomocą funkcji**- jeśli nic się nie zmienia

b)	**Za pomocą klasy**- jeśli coś się zmienia


# 3. Typy eksportów#

a) nazwane eksporty **(ang. named export)**


DWA SPOSOBY:
+ Pierwszy to poprzedzenie deklaracji słowem kluczowym export. Eksportowanie zmiennych ```let var, const, globalnych funkcji, klas```.

{% highlight ruby %}
export var myVar1 = ···;
export let myVar2 = ···;
export const MY_CONST = ···;
{% endhighlight %}

+ Umieszczamy w nawiasie klamrowym pojedyncza listę wszystkich eksportowanych modułów

{% highlight ruby %}
const MY_CONST = ···;
function myFunc() {
    ···
} 
export { MY_CONST, myFunc };
{% endhighlight %}


b) eksport domyślny **(ang. default export)**

{% highlight ruby %}
export default function() {/*...*/}


export default () => {/*...*/}


export default class SomeClass {
/*...*/
}


{% endhighlight %}



{% highlight ruby %}

{% endhighlight %}



{% highlight ruby %}

{% endhighlight %}





{% highlight ruby %}
{% endhighlight %}

