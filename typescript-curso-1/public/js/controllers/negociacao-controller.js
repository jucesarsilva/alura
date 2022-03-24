"use strict";
import { Negociacao, Negociacoes } from '../models/index.js';
var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    NegociacaoController.prototype.adiciona = function () {
        var negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    };
    NegociacaoController.prototype.criaNegociacao = function () {
        var exp = /-/g;
        var date = new Date(this.inputData.value.replace(exp, ','));
        var quantidade = parseInt(this.inputQuantidade.value);
        var valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    };
    NegociacaoController.prototype.limparFormulario = function () {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    };
    return NegociacaoController;
}());
export default NegociacaoController;
