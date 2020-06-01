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

// Ritorna l'ultimo valore per il quale la funzione fornita ritorna un valore truthu
export const findLast = (arr: any[], fn: (el: any, i: number, arr: any[]) => any[]): any | undefined => arr.filter(fn).pop()