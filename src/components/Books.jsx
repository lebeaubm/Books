import { Link } from 'react-router-dom'

const Books = ({ books }) => {

    return (
        <div>

            <h1>Books</h1>
            <h3>We should see our books here!</h3>
            <ul>
                {
                    books.map((book) => {
                        const inStock = book.available ? "yes" : "no"
                        return (
                            <li key={book.id}>

                                <Link to={`/books/${book.id}`}>
                                    {book.title} </Link> in stock: {inStock}
                            </li>
                        )
                    })
                }
            </ul>



        </div>
    )
}

export default Books