/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View } from './view'

export class MensagemView extends View<string> {
	protected template(model: string, color: string): string {
		return `
      <p class='alert alert-${color}'>${model}</p>
    `
	}
}
