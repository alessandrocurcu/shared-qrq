### assoc
Fa una shallow copy di un oggetto aggiungendo o sovrascrivendo la proprietà specificata con il valore specificato 
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

### includes
Return `true` se il valore specificato è uguale, in `R.equals` term, to at least one element of the given list; `false` otherwise. Funziona anche con stringhe
```js
R.includes(3, [1,2,3]) // => true
R.includes({name: 'Fred'}, [{name: 'Fred'}]) // => true
```

### sort
A differenza di quello vanilla ritorna una nuova lista

### propSatisfies
Return `true` se la proporietà dell'oggetto specificato soddisfa il dato predicato
```js
R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}) // => true
``` 

### evolve
Crea un nuovo oggetto evolvendo ricorsivamente una shallow copy di un oggetto, secondo delel funzioni di trasformazione. Tutte le proprietà che non sono primitive sono copiate by reference
Un a funzione di trasformazione non verrà invocata se la chiave corrispondente non esiste nell'oggetto evoluto