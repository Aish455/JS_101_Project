// Define a 2D array to store book information
const bookstore = [
  [1, 'Start with why', 'Simon Sinek', 80.0, 13],
  [2, 'But how do it know', 'J. Clark Scott', 59.9, 22],
  [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
  [4, 'Zero to One', 'Peter Thiel', 45.0, 12],
  [5, "You don't know JS", 'Kyle Simpson', 39.9, 9]
];

// Function to add a new book to the bookstore
function addBook(bookId, bookTitle, author, price, quantity) {
  const newBook = [bookId, bookTitle, author, price, quantity];
  bookstore.push(newBook);
}

// Function to query a book by bookId, title, or author
function queryBook(query) {
  for (const book of bookstore) {
    // Check if the query matches bookId, title, or author
    if (book.includes(query)) {
      return book;
    }
  }
  return null; // Book not found
}

// Function to sell books and generate a bill
function sellBook(bookTitle, quantity, customerBalance) {
  const book = queryBook(bookTitle);

  if (book && book[4] >= quantity && book[3] * quantity <= customerBalance) {
    // Sufficient quantity and customer balance
    book[4] -= quantity; // Update quantity in stock
    const totalPrice = book[3] * quantity;
    console.log(`Sold ${quantity} copies of "${bookTitle}" for a total of $${totalPrice}`);
    console.log(`Remaining stock for "${bookTitle}": ${book[4]}`);
    console.log(`Customer's remaining balance: $${customerBalance - totalPrice}`);
  } else {
    console.log('Sale unsuccessful. Check quantity in stock or customer balance.');
  }
}

console.log("Book store:");
console.table(bookstore);
// Test the functions
addBook(6, 'The Pragmatic Programmer', 'Andrew Hunt, David Thomas', 55.0, 15);
console.log('Bookstore after adding a new book:');
console.table(bookstore);

const queriedBook = queryBook('Clean Code');
console.log('Book information for "Clean Code":');
console.log(queriedBook);

sellBook('Clean Code', 3, 200);
