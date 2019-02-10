module.exports = function impressao(data){
    return this.post(`boletos/impressao/lote`,data)
}