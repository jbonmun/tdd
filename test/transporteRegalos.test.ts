import { describe, it, expect } from 'vitest'
// Escribir una función "transporteRegalos(tipoRegalos, renos)" que nos dice 
// el nº de cajas de regalos que puede transportar en su trineo Papa Noel en función del peso de los regalos 
// y del tipo de reno que lleve. Para ello se cumple lo siguiente:
//
//      # PesoRegalos=nº de letras que contiene ese regalo. Ej: ball=4;
//      # CapacidadTransporteReno= 2*nºletras del nombre del reno. Ej: Reno "Dasher"=6=>12;
//
// En el ejemplo anterior, se pueden llevar: capacidadReno/pesoRegalo=12/4= 3 cajas de ese regalo 
//

const transporteRegalos = (tipoRegalos, nombreRenos): void => {
if( typeof tipoRegalos!= 'string' ) throw new Error('debe ser un string')
if( typeof nombreRenos!= 'string' ) throw new Error('debe ser un string')

const pesoRegalo= tipoRegalos.length
const pesoReno= nombreRenos.length*2
return Math.floor(pesoReno/pesoRegalo)

}

describe('transporteRegalos', (): void => {

    //test 1: debe ser una función
    it('debería ser una funcion', (): void => {
        expect(typeof transporteRegalos).toBe('function')
    })

    // test 2: el primer parámetro debe ser un string

    it('el 1er parámatro debe ser un string', (): void => {

        expect((): void => transporteRegalos(2)).toThrow()
    })

// test 3: el 2º parámetro debe ser un string

it('el 2º parámatro debe ser un string', (): void => {

    expect((): void => transporteRegalos('a')).toThrow()
})

// test 4: debe darnos el nº de cajas de regalos q se pueden transportar

it('el numero de cajas se pueden transportar', (): void => {

    expect(transporteRegalos('bola', 'pepito')).toBe(3)
})

})








