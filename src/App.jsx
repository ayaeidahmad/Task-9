import { useState } from "react"
import './assets/App.css'

function App() {
  let [increase, setIncrease] = useState(0)
  let [decrease, setDecrease] = useState(1000)
  const [popUpShown, setpopUpShown] = useState(false);
  const [background, setBackground] = useState("#fff");

  function showAlert(popUp) {
    alert(popUp);
  }

  const ChangeBackground = (color) => {
    setBackground(color)
  }

  if (!popUpShown) {
    showAlert("Welcome to my page");
    setpopUpShown(true);
  }

  function increaseCount ( ) {
    if (increase === 9) {
      showAlert(` The increase became ${increase+1}`)
      const color='#02c39a'
      ChangeBackground(color)
    }
    if ( increase === 90) {
      showAlert(` The increase became ${increase+10}`)
      const color='#00a896'
      ChangeBackground(color)
    }
    if (increase === 900) {
      showAlert(` The increase became ${increase+100}`)
      const color='#028090'
      ChangeBackground(color)
    }

    if (increase<10) {
      setIncrease(increase+1)
    }
    else if (increase<100) {
      setIncrease(increase+10)
    }
    else if (increase<1000) {
      setIncrease(increase+100)
    }
  }


  function decreaseCount () {
    if (decrease === 20) {
      showAlert(`The decrease became  ${decrease-10}`);
      const color='#02c39a'
      ChangeBackground(color)
    }
    if ( decrease === 200) {
      showAlert(` The decrease became ${decrease-100}`);
      const color='#00a896'
      ChangeBackground(color)
    }
    if (decrease === 1000) {
      showAlert(` The decrease became ${decrease}`);
      const color='#028090'
      ChangeBackground(color)
    }

    if (decrease <= 1000 && decrease > 100) {
      setDecrease(decrease - 100)
    } else if (decrease <= 100 && decrease > 10) {
      setDecrease(decrease - 10)
    } else if (decrease <= 10 && decrease > 0) {
      setDecrease(decrease - 1)
    }
  }
  return (
    <section style={{backgroundColor : background}} >
        <div className="content">
          <button onClick={increaseCount}>increases</button>
          <button className={increase>=1000 ? 'show' : 'hide'}  onClick={decreaseCount} >decreases</button>
          <div className="para">
            <p>{increase}</p>
            <p className={increase>=1000 ? 'show' : 'hide'}>{decrease}</p>
          </div>
        </div>
    </section>  
  )
}
export default App