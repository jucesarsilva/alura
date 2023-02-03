'use strict';
import { NegociacaoController } from './controllers/index.js';
var controller = new NegociacaoController();
var form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
var botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', function () {
        controller.importaDados();
    });
}
else {
    throw Error('Botão importa não foi encontrado');
}
//# sourceMappingURL=app.js.map