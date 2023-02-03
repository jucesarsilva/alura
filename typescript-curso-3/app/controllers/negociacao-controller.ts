import { domInjector, inspect, logarTempoDeExecucao } from '@decorators/index'
import { NegociacoesService } from '@services/index'
import { imprimir } from '@utils/index'
import { DiasDaSemana } from '@enums/index'
import { Negociacao, Negociacoes } from '@models/index'
import { MensagemView, NegociacoesView } from '@views/index'

export class NegociacaoController {
	@domInjector('#data')
	private inputData: HTMLInputElement
	@domInjector('#quantidade')
	private inputQuantidade: HTMLInputElement
	@domInjector('#valor')
	private inputValor: HTMLInputElement
	private negociacoes = new Negociacoes()
	private negociacoesView = new NegociacoesView('#negociacoesView')
	private mensagemView = new MensagemView('#mensagemView')
	private negociacoesService = new NegociacoesService()

	constructor() {
		this.negociacoesView.update(this.negociacoes)
	}

	@inspect
	@logarTempoDeExecucao()
	public adiciona(): void {
		const negociacao = Negociacao.criaDe(
			this.inputData.value,
			this.inputQuantidade.value,
			this.inputValor.value
		)

		if (!this.ehDiaUtil(negociacao.data)) {
			this.mensagemView.update('Apenas negociações em dias úteis são aceitas', 'danger')
			return
		}

		this.negociacoes.adiciona(negociacao)
		imprimir(negociacao, this.negociacoes)
		this.limparFormulario()
		this.atualizaView()
	}

	public importaDados(): void {
		this.negociacoesService
			.obterNegociacoesDoDia()
			.then((negociacoesDeHoje) => {
				return negociacoesDeHoje.filter((negociacaoDeHoje) => {
					return !this.negociacoes
						.lista()
						.some((negociacao: any) => negociacao.ehIgual(negociacaoDeHoje))
				})
			})
			.then((negociacoesDeHoje) => {
				for (const negociacao of negociacoesDeHoje) {
					this.negociacoes.adiciona(negociacao)
				}
				this.negociacoesView.update(this.negociacoes)
			})
	}

	private ehDiaUtil(data: Date) {
		return (
			data.getDay() > DiasDaSemana.DOMINGO &&
			data.getDay() < DiasDaSemana.SABADO
		)
	}

	private limparFormulario(): void {
		this.inputData.value = ''
		this.inputQuantidade.value = ''
		this.inputValor.value = ''
		this.inputData.focus()
	}

	private atualizaView(): void {
		this.negociacoesView.update(this.negociacoes)
		this.mensagemView.update('Negociação adicionada com sucesso')
	}
}
