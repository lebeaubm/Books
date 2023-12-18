
import { useNavigate } from "react-router-dom"


const Account = ({ user, setUser, setToken, books }) => {
  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem('token');
    setToken(null)
    setUser({})
    navigate('/')
  }
  if (!user.books) {
    return null
  }


  const returnBook = (bookId) => {
    // new list
    const updatedBooks = user.books.filter((book) => book.id !== bookId);

    // To true
    const returnedBook = books.find((book) => book.id === bookId);
    if (returnedBook) { returnedBook.available = true; }

    // Fix the user's books.
    //I need to write books:updatedBooks to not ruin the books key.
    setUser({ ...user, books: updatedBooks, });
  };

  return (
    <div>
      <h1>Account</h1>
      <button onClick={logout}>Logout</button>
      <hr />
      <h2>Email: {user.email}</h2>
      <h4>Checked out books:</h4>
      <ul>
        {user.books.map((book) => (
          <li key={book.id}>
            {book.title} -{' '}
            <button onClick={() => returnBook(book.id)}>Return</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Account