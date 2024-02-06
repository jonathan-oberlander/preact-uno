import 'uno.css'
import { Form } from './components/Form'
import { Counter } from './components/Counter'
import { Container } from './components/Container'

export function App() {
  return (
    <Container>
      <Counter />
      <Form />
    </Container>
  )
}
