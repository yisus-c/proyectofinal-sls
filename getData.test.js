const {obtenerDatos} = require('./getData')

describe('Run all test', () => {
    it('Probamos obtener datos dado un C.P. = 76000', () => {
        const datos = obtenerDatos('76000');
        const expectedData = {
                "data": {
                  "colonias": [
                    {
                      "name": "Centro",
                      "type": "Colonia"
                    },
                    {
                      "name": "San Jos\ufffd Inn",
                      "type": "Colonia"
                    },
                    {
                      "name": "La Cruz",
                      "type": "Fraccionamiento"
                    },
                    {
                      "name": "Rinc\ufffdn de San Andr\ufffds",
                      "type": "Fraccionamiento"
                    },
                    {
                      "name": "Mariano Escobedo",
                      "type": "Unidad habitacional"
                    },
                    {
                      "name": "Vicente Guerrero",
                      "type": "Unidad habitacional"
                    },
                    {
                      "name": "Rinconada de Morelos",
                      "type": "Unidad habitacional"
                    }
                  ],
                  "city": "Santiago de Quer\ufffdtaro",
                  "state": "Quer\ufffdtaro"
                },
                "err": null
        }
        expect(datos).toEqual(expectedData);
    });
    it('Probamos obtener datos dado un C.P. no existente = 2', ()=>{
      const datos = obtenerDatos('2');
      const expectedData = {
        "data": {
          "colonias": [],
          "city": "",
          "state": ""
        },
        "err": "Postal code 2 not found"
      }
      expect(datos).toEqual(expectedData);
    });
    it('Probamos obtener datos sin C.P.', () => {
      const datos = obtenerDatos('');
      const expectedData = {
        "data": {
          "colonias": [],
          "city": "",
          "state": ""
        },
        "err": 'Missing postal code'
      }
      expect(datos).toEqual(expectedData)
    });
});