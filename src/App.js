import React from 'react'
import "./App.css";
function App() {
  const pushElement = (array,length,status)=>{
  
    for (let index = 1; index <= length; index++) {
      const element = `../character/${status}/${index}.png`
      array.push(element)
    }
  }

  const indexImg = (index) =>{
    alert(index)
  }

  let body = [];
  pushElement(body,17,"body") 


  return (
    <div className='App'>
        <div className='title'>CHARACTER</div>
        <div className='sub-title'>🛠️CUSTOMIZATION🛠️</div>
        <div className='divider'></div>
        <div className='avatar-group'>
            <div className='avatar-wrapper'>
              <div className='avatar'>
                
                <div className='text-center'>
                  <button className='button'>Random</button>
                </div>
              </div>
            </div>
            <div>
              <div className='list-section'>
                <h2>body</h2>
                <div className='list'>
                {body.map(element, index => (
                <div className='square'> 
                    <img className='img-center' src={`${element}`} alt height="60"/>
                </div>
                ))}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default App
