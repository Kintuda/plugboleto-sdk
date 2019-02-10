module.exports = function consultarRetorno (protocolo){
    return this.get(`api/v1/retornos/${protocolo}`)
}