import colorNames from "colornames"

 const Content=({newColor , hexValue, isDarkText,setHexValue})=> {
  return (
    <div className="square"
     style={
        {backgroundColor:newColor,
        color: isDarkText ? "#000" : "#FFF"}
    }>
      <p >{newColor?newColor:"empty value"}</p>
      <p>{hexValue?hexValue:setHexValue(colorNames(newColor))}</p>
    </div>
  )
}
export default Content
