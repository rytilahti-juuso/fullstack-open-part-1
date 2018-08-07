import React from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  return (
    <div>
      <h1> Statistiikka</h1>
      <p>hyvä {props.hyva}</p>
      <p>neutraali {props.neutraali}</p>
      <p>huono {props.huono}</p>
      <p>keskiarvo</p>
      <p>positiivisia</p>
    </div>
  )
}

const Statistic = (props) => {
  return(
    <div>
      <h1> Statistiikka</h1>
      <p>hyvä {props.hyva}</p>
      <p>neutraali {props.neutraali}</p>
      <p>huono {props.huono}</p>
      <p>keskiarvo</p>
      <p>positiivisia</p>
    </div>
  )
}

const Button = (props) => {
  return(
    
<button onClick ={ props.kasvata} >{props.teksti}</button>

  )
}


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
        <h1>Anna Palautetta</h1>

        <Button
        teksti="Hyvä"
        kasvata= {this.kasvataYhdella("hyva")}
        />
        <Button
        teksti="Neutraali"
        kasvata= {this.kasvataYhdella("neutraali")}
        />
        <Button
        teksti="Huono"
        kasvata= {this.kasvataYhdella("huono")}
        />
        <Statistics />
        <h1> Statistiikka</h1>
        <p>hyvä {this.state.hyva}</p>
        <p>neutraali {this.state.neutraali}</p>
        <p>huono {this.state.huono}</p>
        <p>keskiarvo {(this.state.hyva+(this.state.huono*(-1)))/(this.state.huono+ this.state.hyva + this.state.neutraali)}</p>
        <p>positiivisia {100*(this.state.hyva / (this.state.huono+ this.state.hyva + this.state.neutraali))}%</p>
      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'))
