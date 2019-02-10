module.exports = function getImpressao(protocolo){
    return this.get(`boletos/impressao/lote/${protocolo}`,data)
}