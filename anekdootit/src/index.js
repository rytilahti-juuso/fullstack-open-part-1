import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      aanestysTilanne: [0, 0, 0, 0, 0]
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


  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <div>
          <button onClick={this.valitseSatunnainenAnekdootti()}>valitse Satunnainen Anekdootti</button>
          <button onClick={this.annaAani()}>Anna ääni</button>
        </div>
      </div>
    )
  }
}

const anecdotes = [
  '0If it hurts, do it more often',
  '1Adding manpower to a late software project makes it later!',
  '2The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  '3Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  '4Premature optimization is the root of all evil.',
  '5Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
