# MochaJs
Mocha Js es un framework dedicado a hacer testeos en projectos de <u>NodeJs</u>. Estos testeos se harán de forma asíncrona y los testeos, según los creadores son hosteados en github.

## Instalación
Se puede instalar de dos maneras, global y local (según el objetivo que se tenga para el framework).

En mi caso lo haré de forma local (necesitamos node 14 en adelante)
```
npm install --save-dev mocha
```

## Cómo hacer los testeos
Una vez se tiene instalado mocha se crea la carpeta test y se crea un archivo `test/test.js`. Dentro del archivo `test.js` se hará el llamado al tipo de testeos que deseamos hacer.
```js
var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

Una vez tenemos esta info estructurada en la consola procedemos a ejecutar el comando
```bash
./node_modules/mocha/bin/mocha.js
```

## Package Json
Se puede agregar el comando de testeo en el package json como 
```json
"scripts": {
  "test": "mocha"
}
```