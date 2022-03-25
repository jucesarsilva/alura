"use strict";
import { NegociacaoController } from './controllers/index.js';
var controller = new NegociacaoController();
var form = document.querySelector(".form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    controller.adiciona();
});
console.log('xoxe 2');
