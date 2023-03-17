// Escribir una funcion que al pasarle un número:
// -Muestre "fizz" si es múltiplo de 3
// -Muestre "buzz" si es múltiplo de 5
// -Muestre "fizzbuzz" si es múltiplo de 3 y de 5
// -Muestre el numero si no es ningun caso de los anteriores

// De forma genérica: const fizzbuzz = (number): number | string => {
export const fizzbuzz = (number): number | 'fizz' | 'buzz' | 'fizzbuzz'  => {
    // se escribe como: export const fizzbuzz = (number): string | number => 
    if (typeof number != 'number') throw new Error('Parameter provided must be a number')
    if (Number.isNaN(number)) throw new Error("Parameter provided must be a number");
    //ponemos primero la condición de multiplier of 15 que es mas restrictiva


    const multiplies = { 3: 'fizz', 5: 'buzz' }
    let output = ""

    Object.entries(multiplies).forEach(([multiplier, word]): void => {
        if (number % multiplier === 0) output += word
    })


    // Refactorizo el código eliminando los if. Resuelvo usando 'multiplies' 
    // if (number % 15 == 0) return 'fizzbuzz' 
    // if (number % 3 == 0) return 'fizz'
    // if (number % 5 == 0) return 'buzz'

    return output === '' ? number : output
}
