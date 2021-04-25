const sinon = require('sinon')
const indexController = require('./index')

describe('index controller', () => {
    it('renders home', () => {
        let res = {
            render: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('home')
        indexController.home({}, res)
    })
})