import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const copyColor = () => {
    const colorsName = ['#00BCD4', '#311B92', '#546E7A', '#263238', '#7CB342', '#FF6E40', '#5D4037', '#4E342E', '#FF7043', '#424242', '#9E9D24', '#FB8C00', '#FFCCBC', '#FFD600', '#FFC400', '#FFAB40', '#FBC02D', '#00E676', '#1B5E20', '#69F0AE', '#C0CA33', '#AEEA00', '#039BE5', '#40C4FF', '#009688', '#3949AB', '#1E88E5', '#7C4DFF', '#FF8A80', '#8E24AA']
    const handleClick = (e) => {
        const color = e.target.innerText;
       console.log(e.target.innerText);
       if(navigator.clipboard){
        navigator.clipboard.writeText(color);
        navigator.clipboard.readText(color);
        toast.success('Color copy successfull')
    }
       
    }
  return (
      <div className="colors">
            <Toaster />
            {
                colorsName.map((color,index) =>
                   <div onClick={handleClick} style={{background:`${color}`}} key={index} className="color">
                       <span>{color}</span>
                   </div>
                )
            }
    </div>


  );
};

export default copyColor;
