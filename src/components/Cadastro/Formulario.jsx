import Form from 'react-bootstrap/Form'
import { Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import {useState} from 'react'

const Formulario = () =>  {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [link, setLink] = useState('')

  return (
<Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Nome</Form.Label>
      <Form.Control type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Sobrenome</Form.Label>
      <Form.Control type="text" placeholder="Sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Telefone</Form.Label>
      <Form.Control type="text" placeholder="Telefone" value={tel} onChange={e => setTel(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Link para seu curriculo</Form.Label>
      <Form.Control type="text" placeholder="Link" value={link} onChange={e => setLink(e.target.value)}/>
    </Form.Group>
  </Row>


  <Button variant="dark" type="submit">
    Enviar meu cadastro
  </Button>
</Form>
  )
}

export default Formulario





