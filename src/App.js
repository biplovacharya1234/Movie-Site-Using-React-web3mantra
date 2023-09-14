// import logo from './logo.svg';
import './App.css';
import Moviepart from './component/Moviepart';
import Header from './component/Header';
import movies from './movie.json'
// import { useState } from 'react';
import Incdec from './component/Incdec';


function App() {
 

  // setnum = num++;
  // let login = true;
  // if(login == false){
  //   return <h1>You are not logged in</h1>
  // }
  // else{
  //   return <p>You can see the web page</p>
  // }
  let login = true;


  return (
    <div className='final_app'>
      {
        login === false ? <h1>You are not logged in </h1> : <h2>You are logged in</h2>
      }
      <div className='Headerpart'>
        <Header />
      </div>
      <div className='Bodypart'>
        {movies.map((element, index) => {
          return (
            <Moviepart
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          )
        })
        }
      </div>
      <div className='Incdec'>
      
        <Incdec/>
      </div>
    </div>
  );
}

export default App;
