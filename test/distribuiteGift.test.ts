import { describe, it, expect } from 'vitest'
import { distribuiteGifts } from '../src/distribuiteGifts'

 
describe('distribuiteGifts', (): void => {

    // El siguiente test lo hemos desactivado posteriormente por ser redundante 
    // it('debería ser una function', (): void => {
    //     expect(typeof distribuiteGifts).toBe('function')
    // })

    // Test para que el 1er parameter is string
    it('should throw if first parameter is not string', (): void => {
        expect((): void => distribuiteGifts(2)).toThrow()
    })

    // Test para que el 2º parameter is string
    it('should throw if second parameter is not string', (): void => {
        expect((): void => distribuiteGifts('a')).toThrow()
    })

    // Test: el programa debe devolver un nº, tal que, el primer parámetro me dé 
    // el peso del regalo según la logitud del string(regalo), y el 2º parámetro la capacidad de transporte
    // según la longitud del string del nombre del reno
    it('should return a number in function of length of parameters', (): void => {
        expect(distribuiteGifts('pelota', 'lucero')).toBe(2)
    })


})