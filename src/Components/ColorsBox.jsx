function ColorsBox({color,handelRemove}){
return(
    <div style={{margin:"3px",width:"100px" ,height:"100px", backgroundColor:color }}>
    <button onClick={handelRemove}>delete</button>
    </div>
)

}

export default ColorsBox;
//===================App.js page ================
// import './App.css';
// import React, { useState } from 'react';
// //import MessageForm from './Components/MessageForm';
// //import MessageDisplay from './Components/MessageDisplay';
// import ColorsBox from './Components/ColorsBox';
// import {InputHook} from './Hooks/InputHook';

// function App() {
//   const [colorArray,setColorArray]=useState([]);
//   const color=InputHook();
// function addColors(e){
// setColorArray([...colorArray,color.value])
// }
// function handelRemove(color){
//   setColorArray(colorArray.filter(c=> color !== c))
// }

//   return (
//       <div className='App'>
//         <span>enter color</span>
//         <input { ...color }/>&nbsp;
//         <button onClick={addColors}>Create a box</button>
//         <div style={{display:"flex", justifyContent:"center"}}>
//           {colorArray.map((color,index)=> <ColorsBox color={color} handelRemove={()=>handelRemove(color)}/>)}
       
//         </div>
         
          
//       </div>
//   );
// }

// export default App;