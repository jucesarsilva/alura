"use strict"

import { NegociacaoController } from '@controllers/index'

const controller = new NegociacaoController()
const form: HTMLInputElement | any = document.querySelector(".form")

form.addEventListener("submit", (event: { preventDefault: () => void }) => {
  event.preventDefault()
  controller.adiciona()
})
