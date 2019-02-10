module.exports = {
    staging:{ 
        url: 'http://homologacao.plugboleto.com.br/api/v1',
        timeout: '60000'
    },
    production: {
        url: 'https://plugboleto.com.br/api/v1',
        timeout: '60000'
    }
}