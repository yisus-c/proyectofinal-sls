module.exports = {
    obtenerDatos: (postalCode) => {
        const cpQro = require('./cpqro.json');
        const data = {
            colonias:[],
            city: '',
            state: ''
        };
        if(!postalCode){
            return {data, err: 'Missing postal code'}
        }

        if(!cpQro){
            return {data, err:"Missing database"}
        }

        const resultPostal = cpQro.filter(postal => postal.cp === postalCode);
        
        if(!resultPostal[0]){
            return {data, err:`Postal code ${postalCode} not found`}
        }

        data.colonias = resultPostal.map(results => ({
            name: results.asentamiento,
            type: results.type
        }));
        data.state = resultPostal[0].estado;
        data.city = resultPostal[0].ciudad;
        err = null;
        return {data, err};
        
    }
}
