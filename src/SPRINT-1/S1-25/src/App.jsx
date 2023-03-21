import { useState } from 'react'
import './App.css'

function AddForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const submitForm = (e) => {
    e.preventDefault()

    if (formData.name === "" || formData.email === "" || formData.password === "") {
      alert("Por favor, preencha todos os campos antes de enviar o formulário.")
      return
    }

    console.log(formData)
    console.log("Usuário cadastrado com sucesso")

    setFormData({
      name: "",
      email: "",
      password: ""
    })
  }

  return (
    <form onSubmit={submitForm}>
      <h2>Formulário de Cadastro</h2>
      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Seu nome" />
      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Seu e-mail" />
      <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Sua senha" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default AddForm
