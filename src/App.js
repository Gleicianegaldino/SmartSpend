import { BrowserRouter as Router,  Switch , Route, Link } from 'react-router-dom';
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Container from './components/layout/Container';

function App() {
  return (
   <Router>
    <div>
      <Link to="/">Início</Link>
      <Link to="/contact">Contato</Link>
      <Link to="/company">Empresa</Link>
      <Link to="/newproject">Novo Projeto</Link>
    </div>
     <Switch>
        <Container customClass="min-height">
          <Route exact path="/"> <Home /> </Route>
          <Route path="/company"> <Company /> </Route>
          <Route path="/contact"> <Contact /> </Route>
          <Route path="/newproject"> <NewProject /> </Route>
          </Container>
      </Switch>
      <p>Footer</p>
   </Router>
  )
}

export default App