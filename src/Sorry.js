import sorryImg from './sorry.jpeg'
import './sorry.css'

function Sorry() {
  return(
    <div id="centerDiv">
      <a href="https://isacpxc.github.io/myPort" className='back-link'>Click Here To Go Home</a>
      <div className='uniqueDiv' style={{backgroundImage: `url('${sorryImg}')`}}></div>
    </div>
  )
}

export default Sorry;