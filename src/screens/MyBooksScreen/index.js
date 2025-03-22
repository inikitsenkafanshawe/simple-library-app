import React, { useContext, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { BooksContext } from "../../context/BooksContext";
import styles from "./styles";

export default function MyBooksScreen() {
  const { books, loadBooks, returnBook } = useContext(BooksContext);
  const [refreshing, setRefreshing] = useState(false);

  // Get borrowed books (where available === false)
  const borrowedBooks = books.filter((book) => !book.available);

  const handleReturn = async (bookId) => {
    try {
      await returnBook(bookId);
      Alert.alert("Success", "Book returned successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    // Call loadBooks to fetch the latest data
    loadBooks().finally(() => {
      setRefreshing(false);
    });
  }, [loadBooks]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Borrowed Books</Text>

      {/* Borrowed Book List */}
      <FlatList
        data={borrowedBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            {/* Book Cover */}
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.bookImage}
              resizeMode="contain"
            />

            {/* Title & Author */}
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
            </View>

            {/* Return Button */}
            <TouchableOpacity
              onPress={() => handleReturn(item.id)}
              style={styles.returnButton}
            >
              <Text style={styles.returnButtonText}>Return</Text>
            </TouchableOpacity>
          </View>
        )}
        // Show a message if there are no filter results
        ListEmptyComponent={
          <Text style={styles.noBooksText}>No borrowed books</Text>
        }
        // Pull to refresh
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}
