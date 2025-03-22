import React, { createContext, useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  // Fetch all books from Firestore
  const loadBooks = async () => {
    const booksRef = collection(db, "books");
    const snapshot = await getDocs(booksRef);
    setBooks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  // Borrow a book (set available: false)
  const borrowBook = async (bookId) => {
    const borrowedBooks = books.filter(book => !book.available);
    if (borrowedBooks.length >= 3) {
      throw new Error("You cannot borrow more than 3 books at a time.");
    }

    const bookRef = doc(db, "books", bookId);
    await updateDoc(bookRef, { available: false });
    loadBooks(); // Refresh books data
  };

  // Return a book (set available: true)
  const returnBook = async (bookId) => {
    const bookRef = doc(db, "books", bookId);
    await updateDoc(bookRef, { available: true });
    loadBooks(); // Refresh books data
  };

  return (
    <BooksContext.Provider value={{ books, loadBooks, borrowBook, returnBook }}>
      {children}
    </BooksContext.Provider>
  );
};