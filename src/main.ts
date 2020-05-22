// Ritorna una lista di elementi che esiste in entrambi gli array, usando una funzione comparatrice
export const intersectionWith = (a: any[], b: any[], comp: (a: any, b: any) => boolean): any[] => a.filter(x => b.findIndex(y => comp(x, y)) !== -1)

// Ritorna l'indice dell'ultimo elemento di un array per il quale la funzione fornita ritorna un valore truthy
export const findLastIndex = (arr: any[], fn: (val: any, i: number, arr: any[]) => any): number | undefined => arr.map((val: any, i: number) => [i, val]).filter(([i, val]) => fn(val, i, arr)).pop()?.[0]