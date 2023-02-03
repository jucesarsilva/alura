import { NegociacoesDoDia } from '@interfaces/index'
import { Negociacao } from '@models/index'

export class NegociacoesService {
	public obterNegociacoesDoDia(): Promise<Negociacao[]> {
		return fetch('http://localhost:8080/dados')
			.then((res) => res.json())
			.then((dados: NegociacoesDoDia[]) => {
				return dados.map((dadoDeHoje) => {
					return new Negociacao(
						new Date(),
						dadoDeHoje.vezes,
						dadoDeHoje.montante
					)
				})
			})
	}
}
