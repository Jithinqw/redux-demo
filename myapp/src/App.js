import React from 'react';
import './App.css';

class MainApp extends React.Component {
  render() {
    return( 
      <main className="Counter">
        <p className="count">0</p>
        <section className="controls">
          <button>Increment</button>
          <button>Decrement</button>
          <button>Clear</button>
        </section>
      </main>
    )
  }
}

export default MainApp;
