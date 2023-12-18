import { Link, useParams } from 'react-router-dom'
//import CheckOutButton from './CheckOutButton'

const OneBook = ({ books, user, setUser }) => {

  const params = useParams()
  const id = params.id * 1

  const oneBook = books.find((book) => {
    return book.id === id
  })



  if (!oneBook) {
    return null
  }

  //console.log(books)
  //console.log(oneBook)
  const inStock = oneBook.available ? "yes" : "no"

  const handleCheckOut = () => {
    if (oneBook.available) {
      // Set user so that on it has all books and oneBook added to the array of books. 
      setUser({ ...user, books: [...user.books, oneBook], });
      oneBook.available = false;
    }
  };
  //console.log(user)

  //check out button
  return (
    <div>
      <h1>{oneBook.title}</h1>
      <h3>{oneBook.author}</h3>
      <h3>Available to checkout: {inStock}</h3>
      <p>{oneBook.description}</p>


      <br />
      <Link to='/books'>Back to books</Link>
      <br>
      </br>
      <div>
        {user.email && (
          <button onClick={handleCheckOut} disabled={!oneBook.available}>
            Check Out
          </button>)}
      </div>
      <div>
        <img src={oneBook.coverimage} />
      </div>

    </div>
  )
}



export default OneBook


