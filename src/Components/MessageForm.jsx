import react, { useState } from 'react';
    
    
const MessageForm = () => {
    const [color, setColor] = useState("");
    const [colorArr, setColorArr] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setColorArr([...colorArr, color]);
        setColor("");
      };
    
    return (
        <div className='App'>
          
        <form onSubmit={ handleSubmit }>
        <label className="form-label mt-3">Color:</label>
        <input type="text" className="form-control mt-5 mb-5"  value={color} onChange={(e) => setColor(e.target.value)} />
    
        <button>Add Color</button>
        </form>

         {colorArr.map((color , num) => {
          return (
            
            <div style={{  height: "50px", width: "50px", backgroundColor: color}} ></div>
          );
        })}
      
        </div>
        
    );
};
    
export default MessageForm;