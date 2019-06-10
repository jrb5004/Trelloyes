import React, { Component } from 'react';
import STORE from './store';
import List from './composition/list';
import './app.css';

class App extends Component {

  render() {
    //console.log(STORE);
    const store = STORE
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
