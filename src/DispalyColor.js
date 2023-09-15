import colorNames from 'colornames'
const DispalyColor=({newColor,setColor,setIsDarkText,isDarkText,setHexValue , hexValue})=>{
  return (
     <form onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="color" >addColor</label>
        <input 
        type='text'
        required
         value={newColor}
        placeholder="Add color"
        onChange={e => {
             setColor(e.target.value)
          
            setHexValue(colorNames(e.target.value))
        }}
        />
           <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
     </form>
  )
}

export default DispalyColor
