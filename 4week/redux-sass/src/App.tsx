import * as React from 'react';
import './include/bootstrap';
import './App.css';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import AppNav from './components/nav/nav.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeComponent } from './components/home/home.component';
import SignInComponent from './components/sign-in/sign-in.component';
import ClickerComponent from './components/clicker/clicker.component';
import { TicTacComponent } from './components/tic-tac/tic-tac.component';
import ChuckNorrisComponent from './components/chuck-norris/chuck-norris.component';
import PokemonComponent from './components/pokemon/pokemon.component';
import { MoviesComponent } from './components/movies/movie.component';
import { NestedComponent } from './components/nested/nested.component';
import { Provider } from 'react-redux';
import { store } from './Store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AppNav />
            THIS IS KENNYS PAGE now its updated
            <div id="main-content-container">
              <Switch>
                <Route path="/first" component={FirstComponent} />
                <Route path="/second" component={SecondComponent} />
                <Route path="/home" component={HomeComponent} />
                <Route path="/sign-in" component={SignInComponent} />
                <Route path="/clicker" component={ClickerComponent} />
                <Route path="/tic-tac-toe" component={TicTacComponent} />
                <Route path="/chuck-norris" component={ChuckNorrisComponent} />
                <Route path="/pokemon" component={PokemonComponent} />
                <Route path="/movies" component={MoviesComponent} />
                <Route path="/nested" component={NestedComponent} />
                <Route component={HomeComponent} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
