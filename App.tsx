
import {  SetStateAction, useState } from 'react'
import './App.css'

function App() {
  
const [image,setImage]= 
useState<string>(
   localStorage.getItem("image") || "")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
  // setImage(e.target.value)
  // localStorage.setItem(
  //   "name",
  //    e.target.value
  //   );
  // shegvidzlia an dzaxilis nishani an .? gavuwerot.
  //typescript ro gvak gvchirdeba.kaia gamokeneb
  //arseboba ararsebobs temaa da akaia rovikenebt.
  // fotos kitxulobs es da kvevit gadavcem mere.
  const file = e.target.files![0]
  const reader = new FileReader()
  reader.onloadend = () => {
    setImage(reader.result as string)
    localStorage.setItem("image", reader.result as string)
  }
  reader.readAsDataURL(file as Blob)

  };
  console.log(image)
  const hadnleDelete = () =>{
    setImage("")
    localStorage.removeItem("image")
  }
  return (
    <>
     {/* <input
      value={name} 
      onChange={handleChange}/> */}
      {/* <select
      onChange={handleChange}
      value={name}
      style={{width:"100px"}}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select> */}
      <input 
      type="file"
      onChange={handleChange}
      // value={image}
       />
       {image && (
        <img src={image} alt="preview" />
       )}
      <button onClick={hadnleDelete}>clear</button>
    </>
  )
}

export default App
