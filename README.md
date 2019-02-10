### Description

Integração via pacote com a API de boletos, plugboleto

### Features

 - Integração com a maioria dos métodos
 - Suporte para async/await
 - Simples integração

### Installation

Using npm
```
$ npm install --save plugboletolib
```
Using yarn
```
$ yarn add plugboletolib
```

### Example

Exemplo de utilização
```
const Boleto = require('../lib/Boleto')
const boleto = new Boleto('staging','01001001000113','f22b97c0c9a3d41ac0a3875aba69e5aa','01001001000113')
let remessa =  boleto.solicitarRemessa(['HyZEXKtP_g']).then(res=>console.log(res))


```


### Dependencies

Única dependência do projeto é o pacote axios

### License

MIT