import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  kasvataYhdella = (nappi) =>{
    return () => {
      if(nappi === 'hyva'){
        this.setState({ hyva: this.state.hyva + 1 })
      }
      else if(nappi === 'neutraali'){
        this.setState({ neutraali: this.state.neutraali + 1 })
      }
      else if(nappi === 'huono'){
        this.setState({ huono: this.state.huono + 1 })
      }
    }
  }



  render() {
    return (
      <div>
        <h1>Anna palautetta</h1>
        <button onClick ={ this.kasvataYhdella('hyva')} >Hyvä</button>
        <button onClick ={ this.kasvataYhdella('neutraali')}>Neutraali</button>
        <button onClick ={ this.kasvataYhdella('huono')}>Huono</button>
        <h1> Statistiikka</h1>
        <p>hyvä {this.state.hyva}</p>
        <p>neutraali {this.state.neutraali}</p>
        <p>huono {this.state.huono}</p>
      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'))
