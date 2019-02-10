module.exports = function consultarEmail (protocolo){
    return this.get(`email/lote/${protocolo}`)
}