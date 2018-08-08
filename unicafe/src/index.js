import React from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({hyva, neutraali, huono, keskiarvo, positiivisia}) => {
  return (
    <div>
      <h1> Statistiikka</h1>
      <Statistic text="hyva" num={hyva} />
      <Statistic text="neutraali" num={neutraali} />
      <Statistic text="huono" num={huono} />
      <Statistic text="keskiarvo" num={keskiarvo} />
      <Statistic text="positiivisia" num={positiivisia} />
    </div>
  )
}

const Statistic = ({text, num}) => {
  return(
    <div>
      <p>{text} {num} </p>
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
    const onkoPainettu = () => {
      if(this.state.hyva === 0 && this.state.neutraali === 0 && this.state.huono === 0){
        return(
          <div>
          <p>Ei yhtään palautetta annettu</p>
          </div>
        )
      }
      return(
        <div>
        <Statistics
        hyva= {this.state.hyva}
        neutraali={this.state.neutraali}
        huono={this.state.huono}
        keskiarvo={(this.state.hyva+(this.state.huono*(-1)))/(this.state.huono+ this.state.hyva + this.state.neutraali)}
        positiivisia= {100*(this.state.hyva / (this.state.huono+ this.state.hyva + this.state.neutraali))}
         />
        </div>
      )
    }
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
        <div>{onkoPainettu()}</div>

      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'))
