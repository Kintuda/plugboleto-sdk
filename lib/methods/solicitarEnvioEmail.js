module.exports = function email (data){
    return this.post(`email/lote`, data)
}