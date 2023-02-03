var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector, inspect, logarTempoDeExecucao } from '../decorators/index.js';
import { NegociacoesService } from '../services/index.js';
import { imprimir } from '../utils/index.js';
import { DiasDaSemana } from '../enums/index.js';
import { Negociacao, Negociacoes } from '../models/index.js';
import { MensagemView, NegociacoesView } from '../views/index.js';
var NegociacaoController = (function () {
    function NegociacaoController() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesService = new NegociacoesService();
        this.negociacoesView.update(this.negociacoes);
    }
    NegociacaoController.prototype.adiciona = function () {
        var negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.limparFormulario();
        this.atualizaView();
    };
    NegociacaoController.prototype.importaDados = function () {
        var _this = this;
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then(function (negociacoesDeHoje) {
            return negociacoesDeHoje.filter(function (negociacaoDeHoje) {
                return !_this.negociacoes
                    .lista()
                    .some(function (negociacao) { return negociacao.ehIgual(negociacaoDeHoje); });
            });
        })
            .then(function (negociacoesDeHoje) {
            for (var _i = 0, negociacoesDeHoje_1 = negociacoesDeHoje; _i < negociacoesDeHoje_1.length; _i++) {
                var negociacao = negociacoesDeHoje_1[_i];
                _this.negociacoes.adiciona(negociacao);
            }
            _this.negociacoesView.update(_this.negociacoes);
        });
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
    __decorate([
        domInjector('#data')
    ], NegociacaoController.prototype, "inputData", void 0);
    __decorate([
        domInjector('#quantidade')
    ], NegociacaoController.prototype, "inputQuantidade", void 0);
    __decorate([
        domInjector('#valor')
    ], NegociacaoController.prototype, "inputValor", void 0);
    __decorate([
        inspect,
        logarTempoDeExecucao()
    ], NegociacaoController.prototype, "adiciona", null);
    return NegociacaoController;
}());
export { NegociacaoController };
//# sourceMappingURL=negociacao-controller.js.map