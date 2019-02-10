module.exports = function remessaAlteracao (data){
    return this.post(`boletos/altera/lote`, data)
}