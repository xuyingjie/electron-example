// http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html
// expect, assert http://chaijs.com/
// Mocha默认运行test子目录里面的测试脚本。
// `mocha --recursive`


const tools = require('../app/tools.js')
const expect = require('chai').expect
const assert = require('chai').assert

describe('Array', function() {

    describe('Tools test', function() {
        it('add() 1+2=3', function () {
            expect(tools.add(1,2)).to.be.equal(3)
        })

        it('add() 3+4=7', function () {
            // assert.typeOf(foo, 'string');
            // assert.equal(foo, 'bar');
            // assert.lengthOf(foo, 3)
            // assert.property(tea, 'flavors');
            // assert.lengthOf(tea.flavors, 3);
            assert.equal(tools.add(3,4), 7)
        })

    })

    describe('async', function () {
        it('after 5000', function(done) {
            const f = function () {
                assert.equal(tools.add(3,4), 7)
                done()
            }
            setTimeout(f, 4000)
        })
    })

})
