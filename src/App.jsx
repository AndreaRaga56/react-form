import { useState } from "react"

function App() {

  let [listaPosts, setListaPosts] = useState([])
  let [title, setTitle] = useState("")

  const handleSubmit =(event)=>{
    event.preventDefault()
    let newListaPosts = [...listaPosts, title]
    setListaPosts (newListaPosts);
    setTitle ("")
  }

  return (
    <>
      <div className="container">
        <h1>Il mio Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="newPost" className="form-label">Aggiungi un nuovo post</label>
            <input type="text" className="form-control" id="newPost" value={title} onChange={(event)=>setTitle(event.target.value)} />
            <div>{title}</div>
          </div>
          <button type="submit" className="btn btn-primary">Inserisci</button>
        </form>
        {listaPosts}
      </div>
    </>
  )
}

export default App
