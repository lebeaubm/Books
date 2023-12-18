import { useState } from 'react'
import { Link } from 'react-router-dom'

const BookSearch = ({ books }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    //List that will be displayed
    const updateFilteredBooks = (term) => {
        const filtered = books.filter((book) =>
            book.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredBooks(filtered);
    };

    //When search term is changed, it will search list
    const handleInputChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        updateFilteredBooks(term);
    };

    //search bar
    return (

        <div>
            <input
                type="text"
                placeholder="Search for a book..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            {searchTerm.length > 0 ?

                <div>
                    {<p>{filteredBooks.length} books found</p>}
                    {filteredBooks.length > 0 && (
                        <ul>
                            {filteredBooks.map((book) => (
                                <li key={book.id}> <Link to={`/books/${book.id}`}>{book.title}</Link></li>
                            ))}
                        </ul>
                    )}
                </div>
                : null}
        </div>
    );
};

export default BookSearch;