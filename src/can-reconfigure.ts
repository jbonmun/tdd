export const canReconfigure = (from, to): void => {
    // Hago un refactor del siguiente if, ya que el 2º if incluye al 1º
    // if (from === undefined) throw new Error('from is required')
    if (typeof from !== 'string') throw new Error('from must be a string')
    if (typeof to !== 'string') throw new Error('to must be a string')


    //Refactorizo sacándolo a una constante
    // if (from.length !== to.length) return false
    const isSameLengths = from.length === to.length
    if (!isSameLengths) return false

    const haveSameDifferentLetter = new Set(from).size === new Set(to).size
    if (!haveSameDifferentLetter) return false

    // Código para superar las transformaciones de letras. Creo un objeto vacío 'transformations'
    const transformations = {}
    for (let i = 0; i < from.length; i++) {
        const fromLetter = from[i]
        const toLetter = to[i]
        const storedLetter = transformations[fromLetter]
        if (storedLetter && storedLetter !== toLetter) return false
        transformations[fromLetter] = toLetter
    }

    return true
}
