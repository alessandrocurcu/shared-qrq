// Ritorna una lista di elementi che esiste in entrambi gli array, usando una funzione comparatrice
export const intersectionWith = (a: any[], b: any[], comp: (a: any, b: any) => boolean): any[] => a.filter(x => b.findIndex(y => comp(x, y)) !== -1)

// Ritorna l'indice dell'ultimo elemento di un array per il quale la funzione fornita ritorna un valore truthy
export const findLastIndex = (arr: any[], fn: (val: any, i: number, arr: any[]) => any): number | undefined => arr.map((val: any, i: number) => [i, val]).filter(([i, val]) => fn(val, i, arr)).pop()?.[0]

// Rimuove gli elementi in un array fino a quando la funzione passata non ritorna true. Ritorna gli elementi rimanenti di un array
export const dropWhileQRQ = (arr: any[], fn: (el: any, i: number, arr: any[]) => boolean) => {
  return arr.slice(arr.map(fn).indexOf(true))
}

export const dropWhile = (arr: any[], fn: (a: any) => boolean) => {
  while (arr.length > 0 && !fn(arr[0])) arr = arr.slice(1);
  return arr;
}

// Ritorna l'ultimo valore per il quale la funzione fornita ritorna un valore truthy
export const findLast = (arr: any[], fn: (el: any, i: number, arr: any[]) => any[]): any | undefined => arr.filter(fn).pop()

// Casta il valore fornito con un array, almeno che non sia già un array
export const castArray = (val: any) => (Array.isArray(val) ? val : [val])
// castArray('foo') -> ['foo']
// castArray([1]) -> [1]

// Ritorna se il val è un oggetto (e non null o un array)
export const isObject = (val: {}) => val && typeof val === 'object' && val !== null && !Array.isArray(val)

// Ritorna una funzione che accetta fino a n argomenti, ignorandone gli altri
export const ary = (fn: (...[]) => any, n: number) => (...args: any) => fn(...args.slice(0, n));
// const firstTwoMax = ary(Math.max, 2)
// const x = [1, 2, 3, 4]
// firstTwoMax(...x) -> [1, 2] 

// Ritorna true se il valore è un oggetto, una collezione, mappa o set vuoti, è privo di proprietà numerabili o è di un qualsiasi tipo da non considerarsi una collezione
export const isEmpty = (val: any) => val == null || !(Object.keys(val) || val).length

// Ritorna un nuovo array con n elementi rimossi dalla sinistra
export const dropLeft = (arr: any[], n: number = 1) => arr.slice(n)
// dropLeft([1, 2, 3], 2) // [3]

// Itera sulle own properties di un oggetto, eseguendo una callback su ognuna
export const forOwn = (obj: { [key: string]: any }, fn: (a: any, b: string, c: {}) => any) => Object.keys(obj).forEach((key: string) => fn(obj[key], key, obj))
// forOwn({foo: 'bar', a:1}, v => console.log(v)); // 'bar', 1

// Crea un oggetto composto da proprietà che una funzione ritorna truthy
export const pickBy = (obj: any, fn: () => any) => Object.keys(obj).filter(k => fn(obj[k], k)).reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
// pickBy({a:1, b: '2'}, x => typeof x === 'number'); // {a: 1}
// differenza con filter?

// Ritorna true se il browser tab è focused
export const isBrowserTabFocused = () => !document.hidden;

// Ritorna tutti gli elementi di un array eccetto il primo
export const tail = (arr: any[]) => (arr.length > 1 ? arr.slice(1) : arr);
// tail([1,2,3]) => [2,3]

// Ritorna la differenza tra due array, ritorna i valori che non sono contenuti in b
export const difference = (a: number[], b: number[]) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
}
// difference([1,2,3], [1,2,4]) => 3

// Ritorna ogni nth element di un array
export const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
// everyNth([1,2,3,4,5,6,7,8], 2) // [2, 4, 6]

// Ritorna il primo argomento non nullo o undefined
export const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));
// coalesce(null, undefined, '', NaN, 'Waldo'); // => ""

// Biforca: Splitta i valori in due gruppi. Se un elemento nel filtro è truthy, l'elemento corrispondente nella collezione corrisponde al primo gruppo, altrimenti al secondo
export const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
// bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]): // [['beep', 'boop', 'bar], ['foo']]