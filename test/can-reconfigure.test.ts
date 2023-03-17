import { describe, it, expect } from 'vitest';
import { canReconfigure } from '../src/can-reconfigure';


describe('canReconfigure', (): void => {
    // El siguiente test lo hemos desactivado posteriormente por ser redundante 
    // it('debería ser una function', (): void => {
    //     expect(canReconfigure).toBeTypeOf('function')
    // })

    // El siguiente test lo desactivamos porque el test del 1er parameter isn't string lo incluye
    // it('should throw if first parameter is missing', (): void => {
    //     expect((): void => canReconfigure()).toThrow()
    // })

    // Test para que el 1er parameter is string
    it('should throw if firts parameter is not string', (): void => {
        expect((): void => canReconfigure(2)).toThrow()
    })

    // Test para que el 2º parameter is string
    it('should throw if second parameter is not string', (): void => {
        expect((): void => canReconfigure('a')).toThrow()
    })


    // Test: el programa debe devolver un boolean

    it('should return a boolean', (): void => {
        expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
    })

    // Test: La longitud del string debe ser la misma 
    it('should return false if string provided have different length', (): void => {
        expect(canReconfigure('abc', 'de')).toBe(false)
    })

    // Test: La longitud del string debe ser la misma incluso con el mismo numero de letras unicas
    it('should return false if string provided have different length even with same number of unique letters', (): void => {
        expect(canReconfigure('abb', 'ab')).toBe(false)
    })

    // Test:  debe tener el mismo numero diferente de letras
    it('should return false if string provided have different unique letters', (): void => {
        expect(canReconfigure('abc', 'dee')).toBe(false)
    })

    // Test:  debe tener el mismo orden de transformacion
    it('should return false if string provided have different order of transformation', (): void => {
        expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
    })

})
