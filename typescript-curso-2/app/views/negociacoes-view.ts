import { Negociacoes, Negociacao } from '@models/index'
import { View } from '@views/index'

class NegociacoesView extends View<Negociacoes> {
  protected template(model: Negociacoes): string {
    return `
      <table class='table table-hover table-bordered'>
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model
            .lista()
            .map((negociacao:Negociacao) => {
              return `
                <tr>
                  <td>${this.formatar(negociacao.data)}
                  </td>
                  <td>
                    ${negociacao.quantidade}
                  </td>
                  <td>
                    ${negociacao.valor}
                  </td>
                </tr>
              `
            })
            .join('')}
        </tbody>
      </table>
    `;
  }

  private formatar(data: Date): string {
    return new Intl.DateTimeFormat().format(data)
  }
}

export default NegociacoesView
