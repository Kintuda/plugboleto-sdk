module.exports = function remessa (protocolo){
    return this.get(`boletos/baixa/lote/${protocolo}`)
}