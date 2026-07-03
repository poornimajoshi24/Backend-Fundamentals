import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from "axios";

function App() {//step 1
  const [notes, setNotes] = useState([
  {
    title: "test title 1",
    description: "test description 1"
  },
  {
    title: "test title 2",
    description: "test description 2"
  },
  {
    title: "test title 3",
    description: "test description 3"
  },
  {
    title: "test title 4",
    description: "test description 4"
  }
]);



// //step 6
// axios.get('http://localhost:3000/api/notes')
// .then((res)=>{//fir api ka jo data aayega usko console me print karne ke liye
//   console.log(res.data)
// })




//step 7
//ab jo data k nadar notes aayenge usko hum set karva denge setnotes mein aur uske upar chal jayega hmaara notes ka map 
axios.get('http://localhost:3000/api/notes')
.then((res)=>{//fir api ka jo data aayega usko console me print karne ke liye
  setNotes(res.data.notes)
})




//step 2
//   return (
//     <>
//     <div className="notes">
//       <div className="note">
//         <h1>title</h1>
//         <p>description</p>
//       </div>
//     </div>
//     </>
//   )

//step 4
  return (
    <>
    <div className="notes">
      {
        notes.map(note=>{
          return(
            <div className="note">
             <h1>{note.title}</h1>
             <p>{note.description}</p>
           </div>

          )
        })
      }
      
    </div>
    </>
  )

}

export default App
