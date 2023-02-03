import { DiasDaSemana } from '../enums/index.js';
import { Negociacao, Negociacoes } from '../models/index.js';
import { MensagemView, NegociacoesView } from '../views/index.js';
var NegociacaoController = (function () {
    function NegociacaoController() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    NegociacaoController.prototype.adiciona = function () {
        var negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    };
    NegociacaoController.prototype.ehDiaUtil = function (data) {
        return (data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO);
    };
    NegociacaoController.prototype.limparFormulario = function () {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    };
    NegociacaoController.prototype.atualizaView = function () {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    };
    return NegociacaoController;
}());
export default NegociacaoController;
