import { describe, expect, it } from 'vitest'

import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', (): void => {
  // El siguiente test lo hemos desactivado posteriormente por ser redundante 
  // it('debería ser una function', (): void => {
  // expect(typeof fizzbuzz).toBe('function')
  // })
  it('debería fallar y enviar un especifico error si el parámetro proporcionado is not a number', (): void => {
    expect((): void => fizzbuzz()).toThrow('Parameter provided must be a number')
  })
  it('debería fallar y enviar un especifico error si el parámetro proporcionado is NaN', (): void => {
    expect((): void => fizzbuzz(NaN)).toThrow('Parameter provided must be a number')
  })

  it('debería mostrar 1 si el número proporcionado es 1', (): void => {
    expect(fizzbuzz(1)).toBe(1)
  })
  it('debería mostrar 2 si el número proporcionado es 2', (): void => {
    expect(fizzbuzz(2)).toBe(2)
  })
  // it('debería mostrar "fizz" si el número proporcionado es 3', (): void => {
  //   expect(fizzbuzz(3)).toBe('fizz')
  // })
  it('debería mostrar fizz si el número es 3 ó múltiplo de 3', (): void => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })
  it('debería mostrar fizz si el número es 5 ó múltiplo de 5', (): void => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
    expect(fizzbuzz(25)).toBe('buzz')
  })
  it('debería mostrar fizzbuzz si el número es 15 ó múltiplo de 15', (): void => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
    expect(fizzbuzz(45)).toBe('fizzbuzz')
    expect(fizzbuzz(60)).toBe('fizzbuzz')
  })

})

