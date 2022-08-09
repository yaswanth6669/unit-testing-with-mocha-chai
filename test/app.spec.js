const assert = require('assert')
const {expect} = require('chai')
const { add } = require('../src/app')

describe('the add function', ()=>{
    it('should add 2 numbers together', ()=>{
        const result = add(2, 2)
        // assert.equal(result, expected = 3)
        expect(result).to.be.eq(5)
    })
})