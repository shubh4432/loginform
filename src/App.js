import './App.css';
import Form from './Form';
import FormSignin from './FormSingin';
import { Switch , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/" exact>
      <Form />
      </Route> 
      <Route path="/signin">
        <FormSignin />
      </Route>
      </Switch>
      
    </div>
  );
}

export default App;
