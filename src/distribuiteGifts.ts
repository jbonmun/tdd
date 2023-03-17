// Escribir una función "distribuiteGifts(packOfGifts,reindeers)" que nos dice 
// el nº de cajas de regalos que puede transportar en su trineo Papa Noel en función del peso de los regalos 
// y del tipo de reno que lleve. Para ello se cumple lo siguiente:
//
//      # PesoRegalos=nº de letras que contiene ese regalo. Ej: ball=4;
//      # CapacidadTransporteReno= 2*nºletras del nombre del reno. Ej: Reno "Dasher"=6=>12;
//
// En el ejemplo anterior, se pueden llevar: capacidadReno/pesoRegalo=12/4= 3 cajas de ese regalo 


export const distribuiteGifts = (packOfGifts, reindeers): void => {
    if (typeof packOfGifts !== 'string') throw new Error('packOfGifts must be a string')
    if (typeof reindeers !== 'string') throw new Error('reindeers must be a string')

    const weigth = packOfGifts.length
    const capacity = reindeers.length * 2
    return Math.floor(capacity / weigth)
}

