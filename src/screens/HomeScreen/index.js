import React, { useContext, useLayoutEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { BooksContext } from "../../context/BooksContext";
import styles from "./styles";

export default function HomeScreen({ navigation }) {
  const { books, loadBooks } = useContext(BooksContext);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  // Add Icon Button in Header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("MyBooks")}
          style={styles.iconButton}
        >
          <FontAwesome5 name="book-reader" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    // Call loadBooks to fetch the latest data
    loadBooks().finally(() => {
      setRefreshing(false);
    });
  }, [loadBooks]);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by title..."
        placeholderTextColor="#90A4AE"
        value={search}
        onChangeText={setSearch}
      />

      {/* Book List */}
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Book", { book: item })}
            style={[
              styles.bookItem,
              !item.available && styles.unavailableBook, // Grey out if unavailable
            ]}
          >
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
          </TouchableOpacity>
        )}
        // Show a message if there are no search results
        ListEmptyComponent={
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No books found</Text>
          </View>
        }
        // Pull to refresh
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}
