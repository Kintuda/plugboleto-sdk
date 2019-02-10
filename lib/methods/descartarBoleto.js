module.exports = function descartar (data){
    return this.post(`descarta/lote`, data)
}