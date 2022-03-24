window.onload = () => {
  const form = document.getElementById('form-item')
  const list = document.getElementById('list')
  const inputName = document.getElementById('name')
  const inputQuantity = document.getElementById('quantity')
  const errorName = document.getElementById('error-name')
  const errorQuantity = document.getElementById('error-quantity')
  const items = JSON.parse(localStorage.getItem('items')) || []

  inputName.addEventListener('input', () => {
    errorName.innerText = ""
  })

  inputQuantity.addEventListener('input', () => {
    errorQuantity.innerText = ""
  })
  
  form.addEventListener('submit', event => {
    event.preventDefault()
  
    const nameElement = event.target.elements['name']
    const quantityElement = event.target.elements['quantity']
  
    validade(nameElement, quantityElement)
  })

  const validade = (nameElement, quantityElement) => {
    if (!nameElement.value || nameElement.value.length < 2) {
      errorName.innerText = "The field name can't be empty."
      return
    }

    if (!quantityElement.value || quantityElement.value === 0) {
      errorQuantity.innerText = "The field quantity can't be empty."
      return
    }

    submit(nameElement, quantityElement)
  }

  const submit = (nameElement, quantityElement) => {
    const item = items.find(element => element.name === nameElement.value)
  
    const current = {
      name: nameElement.value,
      quantity: quantityElement.value
    }
  
    if (item) {
      current.id = item.id
  
      updateItem(current)

      const index = items.findIndex(element => element.id === item.id)

      items[index] = current
    } else {
      current.id = items[items.length - 1] ? (items[items.length - 1]).id + 1 : 0
  
      createItem(current)
  
      items.push(current)
    }
  
    localStorage.setItem('items', JSON.stringify(items))
  
    nameElement.value = ''
    quantityElement.value = ''
  }
  
  const createItem = item => {
    const itemElement = document.createElement('li')
    itemElement.classList.add('item')
  
    const quantityItem = document.createElement('strong')
    quantityItem.innerHTML = item.quantity
    quantityItem.dataset.id = item.id
    itemElement.appendChild(quantityItem)
  
    itemElement.innerHTML += item.name
  
    itemElement.appendChild(createDeleteButton(item.id))
  
    list.appendChild(itemElement)
  }
  
  const updateItem = item => document.querySelector(`[data-id='${item.id}']`).innerHTML = item.quantity
  
  
  const createDeleteButton = id => {
    const buttonElement = document.createElement('button')
    buttonElement.className = 'button-remove'
    buttonElement.innerText = 'Remove'
  
    buttonElement.addEventListener('click', function () {
      removeItem(this.parentNode, id)
    })
  
    return buttonElement
  }
  
  const removeItem = (itemElement, id) => {
    const index = items.findIndex(element => element.id === id)

    if (index >= 0) {
      itemElement.remove()
    
      items.splice(index, 1)
    
      localStorage.setItem('items', JSON.stringify(items))
    }
  }

  window.onunload = () => {
    form.removeEventListener('submit')
    inputName.removeEventListener('input')
    inputQuantity.removeEventListener('input')
    const buttons = document.getElementsByClassName('button-remove')
    for (let button of buttons) button.removeEventListener('click')
  }

  items.forEach(elemento => createItem(elemento))
}