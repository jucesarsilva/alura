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
