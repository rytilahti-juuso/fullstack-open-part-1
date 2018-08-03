import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Osa = (props) => {
  return (
    <div>
      <p>{props.osa} {props.tehtavia}</p>
    </div>
  )
}


const Sisalto = (props) => {

  const [eka,toka,kolmas]= props.osat

  return (
    <div>
    <Osa osa={eka.nimi}  tehtavia={eka.tehtavia}/>
    <Osa osa={toka.nimi}  tehtavia={toka.tehtavia}/>
    <Osa osa={kolmas.nimi}  tehtavia={kolmas.tehtavia}/>


    </div>
  )
}


const Yhteensa = (props) => {
  const [eka, toka, kolmas]= props.osat
  const m2 = props.osat.map((olio) => olio.tehtavia )
  console.log(m2) // tulostuu [ '<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>4</li>' ]
  return (
    <div>
      <p>yhteensä {props.yhteensa} tehtävää</p>

      <p>yhteensä {m2} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]


  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
