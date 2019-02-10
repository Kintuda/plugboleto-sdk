module.exports = function remessaBaixa (data){
    return this.post(`boletos/baixa/lote`, data)
}