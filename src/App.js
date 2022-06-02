
import logo from './logo.svg';
import './App.css';
import axios, { Axios } from 'axios';
import { Component } from 'react';
import { render } from '@testing-library/react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Request from './request';
import { getValue } from '@testing-library/user-event/dist/utils';

// const baseURL = 'https://voyages3-api.crc.rice.edu/voyage/'
// const Token = 'Token 3e9ed2e0fa70a1a5cb6f34eb7a30ebde208ecd8f'

const api = axios.create( {
  baseURL: 'https://voyages3-api.crc.rice.edu/voyage/',
  headers: {'Authorization': 'Token 0bfda2118118484d52aeec86812269aadeb37c67'},
}) 


function App() {

  // slider {

  const [value, setValue] = React.useState([20,37])


  function valuetext(value) {
    console.log(`${value}°C`);
    api.post("").then(res=> {return res.data})
    // return `${value}°C`;

  }

  // const [value, setValue] = React.useState([20,37])
  
  const handleChange = (event, newValue) => {
      setValue(newValue); 
  };
  // } slider end


  
  // const [items, setItems] = React.useState([20,37])

  return (
            <div className="App">
              <header className="App-header">   
                  <Box sx={{ width: 300 }}>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
               </header>
             </div>
         );
}


export default App;
// Request.data



// class App extends Component{
//     // const [items , setItems] = React.useState([])
//   state = {
//     items: []
//   }

//   constructor() {
//     super();
//     api.post('').then(res=> {
//       console.log(res.data)
//       this.setState({items: res.data})
//     })
    
//     postMethod = async () => {
//       let res = await api.post('/').then(({data}) => data)
//       this.setState({items: data});
//     }
//     // console.log(this.state)
//   }

//   export default App;
  
  // function valuetext(value) {

  //   return `${value}°C`;
  // }

  // const [value, setValue] = React.useState([20, 200]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

//   render() {
//     function valuetext(value) {

//       return `${value}°C`;
//     }

//     const [value, setValue] = React.useState([20, 200]);

//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
//       return (
//         <div className="App">
//           <header className="App-header">
//             <Request/>
    
//               <Box sx={{ width: 300 }}>
//               <Slider
//                 max={Request.st}
//                 getAriaLabel={() => 'Temperature range'}
//                 value={value}
//                 onChange={handleChange}
//                 valueLabelDisplay="auto"
//                 getAriaValueText={valuetext}
//               />
//             </Box>
            
//           </header>
//         </div>
//     );
//   }

// }

// export default App;


// function valuetext(value) {

//   return `${value}°C`;
// }




// export default function RangeSlider(){

//   const [value, setValue] = React.useState([20, 200]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
  
//   // handleChange(event, newValue){
//   //   setValue(newValue)
//   // } 
//   // render(){
// // import * as React from 'react';
//     return (
//     <div className="App">
//       <header className="App-header">
//         <Request/>

//           <Box sx={{ width: 300 }}>
//           <Slider
//             max={Request.st}
//             getAriaLabel={() => 'Temperature range'}
//             value={value}
//             onChange={handleChange}
//             valueLabelDisplay="auto"
//             getAriaValueText={valuetext}
//           />
//         </Box>
        
//       </header>
//     </div>
//     );
//   }
    
  // }
  


// export default RangeSlider;