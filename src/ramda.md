### assoc
* Fa una shallow copy di un oggetto aggiungendo o sovrascrivendo la proprietà specificata con il valore specificato 
* È un setter
```js
R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
```
### eqProps
Riporta se due oggetti hanno lo stesso valore, in `R.equals` terms, per la proprietà specificata. Utile as a curried predicate
```js
const o1 = {a:1,b:2,c:3}
const o2 = {a:10, b:20,c:3}

R.eqProps('a', o1, o2) // => false
R.eqProps('c', o1, o2) // => true
```

### flatten
Returns a new list by pulling every item out of it (and all its sub-arrays) and putting them in a new array, depth-first
```js
R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```
* Ma c'è versione in vanilla js
```js
const flatten = [1, [2, [3, [4]], 5]].flat();
```

### includes
Return `true` se il valore specificato è uguale, in `R.equals` term, to at least one element of the given list; `false` otherwise. Funziona anche con stringhe
```js
R.includes(3, [1,2,3]) // => true
R.includes({name: 'Fred'}, [{name: 'Fred'}]) // => true
```

### sort
* A differenza di quello vanilla ritorna una nuova lista
* Guarda build a functional pipeline with Ramda.js nel corso

### propSatisfies
Return `true` se la proporietà dell'oggetto specificato soddisfa il dato predicato
```js
R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}) // => true
``` 

### evolve
Crea un nuovo oggetto evolvendo ricorsivamente una shallow copy di un oggetto, secondo delle funzioni di trasformazione. Tutte le proprietà che non sono primitive sono copiate by reference
Un a funzione di trasformazione non verrà invocata se la chiave corrispondente non esiste nell'oggetto evoluto

### maxBy
* Prende una funzione e due valori, e ritorna quale dei due produce il risultato più largo quando passato all funzione fornita

### path
* Retrieve il valore al dato path (lo usi if we need a value of a deeply nested property)
```js
R.path(['a','b'], {a: {b: 2}}); // => 2
```
* Come `_.get()`

### pick
* Pick prende un array di proprietà e un oggetto dal quale vuoi prendere le proprietà
```js
const result = products.map( p => R.pick(['name', 'price'], p))
// Essendo che pick fa currying possiamo riscrivere
const result = products.map(R.pick(['name', 'price']))
// Possiamo rifattorizzare ancora così
const getNameAndPrice = R.map(R.pick(['name', 'price']))
const result = getNameAndPrice(products)
// Ma questa cosa di mappare su un array e fare pick su alcune proprietà è una cosa così comune che c'è una funzione in Ramda che fa esattamento questo
const getNameAndPrice = R.project(['name', 'price'])
const result = getNameAndPrice(products)
```

### pickAll
* Come pick ma se la proprietà non esiste ritorna `undefined` (mentre in `pick` non ritornerebbe nulla)

### pickBy
* Prende una predicate function
```js
const getProps = R.pickBy((val, key) => R.contains('shipping', key))
```

### omit
* Come pick ma ritorna il resto delle proprietà

### prop
* Ritorna valore `obj.p`
* È un getter
```js
R.prop('x', {x: 100}); //=> 100
R.prop('x', {}); //=> undefined
R.prop(0, [100]); //=> 100
R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
R.prop('x')({x: 100}); // currying
```
* Altro esempio con currying
* `const gimmeTheGrades = R.prop('grades');`
* `gimmeTheGrades(student)`

### propOr
* Come prop però prende un default value
* Puoi sempre fare currying
* `R.propOr('default', 'x', {x: 100}); //=> 100`

### compose
* Fa right to left composition
* Capirai dove fare composizione vedendo in giro variabili temporaliù
* currying diventa molto utile quando è combinato con la composizione
  - Nella pratica farai composizione di funzioni unarie: siccome generalmente una funzione produce *un singolo output* va da sé che per comporle l'input deve essere uno solo
```js
const h = R.compose(f, g) // due funzioni
h('ciao') // dando per sontato che g e f prendano entrambe un argomento
```

### pipe
* Fa left to right composition

### split
* Su una stringa la splitta

### tail
* Ritorna stringa senza primo char

### fromPairs
* Prende arrays composti da due items e ci crea un oggetto com property/value pair

### pluck
```js
var getAges = R.pluck('age');
getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
```

### where
* Prende un oggetto come primo argomento, mappa chiavi sul target object ti predicate function che controlleranno quella proprietà individualmente
```js
const products = [
  {name: 'Jeans', price: 80, category: 'clothes', stock: 100},
  {name: 'Jeans', price: 80, category: 'clothes', stock: 100},
  {name: 'Jeans', price: 80, category: 'clothes', stock: 100},
]

const predicate = R.where({category: R.equals('clothes'), stock: R.ls(R.__, 50)})
```

### lens
* It is very easy to define getter and setter functions for a property with lens function
* Lenses provide a means to decouple an object's shape from the logic operating on that object; It accomplishes this using the getter/setter pattern to 'focus in' on a sub-part of the object, which then isolates that sub-part for reads and writes without mutating the object
* Guarda resto https://dev.to/devinholloway/functional-lenses-in-javascript-with-ramda-4li7
* Prende due funzioni, una getter (come prop) e una setter (come assoc)
* Guarda corso Ramda

### view
* Takes two arguments; a lens, and an object to apply that lens to. It then executes the len's getter function to return the value of the property the lens is focused on
* Guarda sopra

### reject
* È il contrario di filter

### partition
* Gli passo un filtro praticamente e mi ritorna un array con due array: quello che filtra true e il reject