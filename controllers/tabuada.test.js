const sinon = require('sinon')
const tabuadaController = require('./tabuada')

describe('tabuada controller', () => {
    it('renders list', () => {
        const numeros = []
        for (let i = 1; i <= 100; i++) {
            numeros.push(i)
        }
        let res = {
            render: function(){},
        }        
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/list', { numeros })
        tabuadaController.list({}, res)
    })

    it('renders tabuadas', () => {
        let res = {
            render: function(){},
        }
        const tabuadas = []
        let req = {
            params: { num: 10 }
        }
        const num = req.params.num       
        for (let i = 0; i <= 100; i++) {
            tabuadas.push({
            i,
            num,
            resultado: num * i
            })
        }

        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/tabuada', {
            tabuadas,
            num
        })
        tabuadaController.tabuada(req, res)
    })
})