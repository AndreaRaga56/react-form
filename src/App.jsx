import { useState } from "react"

function App() {

  let [listaPosts, setListaPosts] = useState([1, 2, 3, 4, 5])
  let [title, setTitle] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    let newListaPosts = [...listaPosts, title]
    setListaPosts(newListaPosts);
    setTitle("")
  }

  const remove = (id) =>{
    const newListaPosts= listaPosts.filter((curElem, index)=>{
      return index!=id
    })
    setListaPosts(newListaPosts)
  }

  const printPosts = listaPosts.map((curPost, i) => {
    return <div key={i} className="d-flex align-items-center mt-5 gap-1">
      <div className="post-card col">{curPost}</div>
      <div><button onClick={()=>{remove(i)}} className="btn btn-danger">🗑</button></div>
    </div>
  })


  return (
    <>
      <div className="container mt-5">
        <h1>Il mio Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="newPost" className="form-label">Aggiungi un nuovo post</label>
            <input type="text" required maxLength={25} className="form-control" id="newPost" value={title} onChange={(event) => setTitle(event.target.value)} />
            <div>{title}</div>
          </div>
          <button type="submit" className="btn btn-primary">Inserisci</button>
        </form>
        <div className="text-center">
          <div className="row row-cols-3">
            {printPosts}
          </div>

        </div>


      </div>
    </>
  )
}

export default App
