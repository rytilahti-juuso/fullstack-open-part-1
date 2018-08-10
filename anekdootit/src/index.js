import React from 'react'
import ReactDOM from 'react-dom'

const SuosituinAnekdootti = ({lista, valitunIndeksi, tilanne, nappi}) =>{
  //if(this.state.aanestysTilanne[this.state.selected]>=)
  let suosituin= lista[0]
  let parhaanAanienmaara= tilanne[0]
  tilanne.forEach(function(item, index, array) {
    if(tilanne[index] > parhaanAanienmaara){
       parhaanAanienmaara=tilanne[index]
       suosituin=lista[index]
    }
  });
  return(
    <div>
    <h1> Anecdote with most votes</h1>
    {suosituin}
    <p>{parhaanAanienmaara}</p>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      aanestysTilanne: [0, 0, 0, 0, 0, 0]
    }
  }

valitseSatunnainenAnekdootti = () =>{
  return () => {
    this.setState({selected: Math.floor(Math.random()*anecdotes.length)})
  }
}

annaAani = () => {
  const kopio =[...this.state.aanestysTilanne]
  kopio[this.state.selected] +=1
  return () => {
  this.setState({aanestysTilanne: kopio})
  }
}

//<SuosituinAnekdootti lista={this.props.anecdotes} valitunIndeksi={this.state.selected} tilanne={this.state.aanestysTilanne}/>
  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}

        <div>
          <button onClick={this.valitseSatunnainenAnekdootti()}>valitse Satunnainen Anekdootti</button>
          <button onClick={this.annaAani()}>Anna ääni</button>
        </div>
      <SuosituinAnekdootti nappi= {this.annaAani()} lista={this.props.anecdotes} valitunIndeksi={this.state.selected} tilanne={this.state.aanestysTilanne}/>

      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
