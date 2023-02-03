import View from '@views/view'

class MensagemView extends View<string> {
  protected template(model: string): string {
    return `
      <p class="alert alert-info">${model}</p>
    `
  }
}

export default MensagemView
