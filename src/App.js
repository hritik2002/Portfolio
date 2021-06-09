import './App.css';
import React from 'react' ;
import { Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Body from './components/Body';
import Footer from './components/Footer'
import Project from './components/Project'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {

  const random = ()=>{
    return(
      <div className="Body">
        <p><strong>Oops! Site failed to load</strong></p>
      </div>
    )
  }

  return (
    <>
      <Nav />
      <Switch>
        <Route  path="/" component={Body}/>
        <Route exact path="/project" component={Project}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={Body}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
