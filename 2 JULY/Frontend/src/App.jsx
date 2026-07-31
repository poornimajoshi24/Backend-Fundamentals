import { useState,useEffect } from "react";//step 34
import "./App.css";
import axios from "axios";

function App() {
  //step 1
  const [notes, setNotes] = useState([
    {
      title: "test title 1",
      description: "test description 1",
    },
    {
      title: "test title 2",
      description: "test description 2",
    },
    {
      title: "test title 3",
      description: "test description 3",
    },
    {
      title: "test title 4",
      description: "test description 4",
    },
  ]);

  console.log("hello integration")//step 33


//step 36
  function fetchNotes(){ // jo bhi data aayega pehle usko fetch notes mein store kar denge 
    axios.get("http://localhost:3000/api/notes")
    .then((res) => {
    setNotes(res.data.notes);
  });
  }





//step 37
  useEffect(()=>{
    fetchNotes()//ab humein bas fetch notes ko call karna hai aur ye useeffect ke andar chalega
  },[])


// //step 35
//   useEffect(()=>{//ab chaahe app component jotni baar bhi render ho jaaye but jo humein useeffect k andar cheez likh dee hai vo bas ek baar chalega
//     axios.get("http://localhost:3000/api/notes")
//     .then((res) => {
//     setNotes(res.data.notes);
//   });
//   },[])//iske empty array ka matlab hai ki ye useeffect sirf ek baar chalega jab app component render hoga


  // //step 6
  // axios.get('http://localhost:3000/api/notes')
  // .then((res)=>{//fir api ka jo data aayega usko console me print karne ke liye
  //   console.log(res.data)
  // })

  //step 7
  //ab jo data k nadar notes aayenge usko hum set karva denge setnotes mein aur uske upar chal jayega hmaara notes ka map
  // axios.get("http://localhost:3000/api/notes").then((res) => {
  //   //fir api ka jo data aayega usko console me print karne ke liye
  //   setNotes(res.data.notes);
  // });



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
//   return (
//     <>
//     <form className='note-create-form'>
//       <input type="text" placeholder='Enter title'/>
//       <input type="text" placeholder='Enter description'/>
//       <button>Create Node </button>
//     </form>
//       <div className="notes">
//         {notes.map((note) => {
//           return (
//             <div className="note">
//               <h1>{note.title}</h1>
//               <p>{note.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );




//step 40, 41
function handleSubmit(e){
  e.preventDefault()//prevents reloadof page on submitting of that form 
  //title aur description ko destructure kar k log karva diya 
  
  const {title,description}=e.target.elements

  console.log(title.value,description.value)

  axios.post("http://localhost:3000/api/notes",{
    title:title.value,
    description:description.value
  })
    .then(res=>{
      console.log(res.data)

      fetchNotes()//this funciton calls get method vaali api aur vahan se poore data ko mangvata hai usk oset kartahia notes state variable help se render kar deta hai 
    })
}


// step 43
function handleDeleteNote(noteId){
  // using console to check if this function is working
  console.log(noteId)

  axios.delete("http://localhost:3000/api/note/" + noteId)
  .then(res=>{
    console.log(res.data)
    fetchNotes() //thos function calls get method vaali api aur vahan laya latest that is bacha hua data (after deletion) display kar deta hai
  })
}




//step 38 adding form 
  return (
    <>
    <form className='note-create-form' onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder='Enter title'/>
      <input name='description' type="text" placeholder='Enter description'/>
      <button>Create Node </button>
    </form>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              {/* //step 42 */}
              <button onClick={()=>{handleDeleteNote(note._id)}}>delete</button> 
            </div>
          );
        })}
      </div>
    </>
  );
}





export default App;
