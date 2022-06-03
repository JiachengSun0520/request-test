
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

var d = new FormData();
d.append('aggregate_fields', ["voyage_slaves_numbers__imp_total_num_slaves_disembarked"]);

const config =  {
  method: 'post',
  baseURL: 'https://voyages3-api.crc.rice.edu/voyage/aggregations',
  headers: {'Authorization': 'Token 1bd7b6a695d87fb17a752fdcf58cc98c28486dd1'},
  // data: {aggregate_fields: "voyage_slaves_numbers__imp_total_num_slaves_disembarked",}
  data:d
}



function App() {


  const [range, setRange] = React.useState([0,0])
  React.useEffect(() => {
    // axios(config).then(res => console.log(Object.values(res.data)[0]['max']))
    // axios(config).then(res => (setRange(Object.values(res.data))["min"], Object.values(res.data)["max"]));
    axios(config).then(res => (setRange([Object.values(res.data)[0]['min'], Object.values(res.data)[0]['max']])));
    
  }, [])
  // slider {
  
  console.log(range)
  const [value, setValue] = React.useState([range[0]/2, range[1]/2])
  const [dataSend, setDataSend] = React.useState(value)
  

  function handleCommittedChange() {
    // console.log(`${value}°C`);
    console.log("onchange", value);
    // setDataSend(value);
    console.log("dataSend", dataSend);
    console.log('range', range);
    // axios(config).then(res => setRange([range.min, range.max]))
    // console.log(range)
    
    
  }

  // const [value, setValue] = React.useState([20,37])
  
  const handleChange = (event, newValue) => {
      setValue(newValue); 
      // console.log("onchange", value);
      setDataSend(newValue);
  };
  // } slider end


  
  // const [items, setItems] = React.useState([20,37])

  return (
            <div className="App">
              <header className="App-header">   
                  <Box sx={{ width: 300 }}>
                  <Slider
                    min = {range[0]}
                    max = {range[1]}
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    step={1}
                    onChange={handleChange}
                    onChangeCommitted={handleCommittedChange}
                    valueLabelDisplay="auto"
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