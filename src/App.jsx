import { useState } from "react"

function App() {

  const listaPosts = [];

  let [title, setTitle] = useState("")

  return (
    <>
      <div className="container">
        <h1>Il mio Blog</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="newPost" className="form-label">Aggiungi un nuovo post</label>
            <input type="text" className="form-control" id="newPost" value={title} onChange={(event)=>setTitle(event.target.value)} />
            <div>{title}</div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
