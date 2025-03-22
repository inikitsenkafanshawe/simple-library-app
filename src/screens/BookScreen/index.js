import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
} from "react-native";
import { BooksContext } from "../../context/BooksContext";
import styles from "./styles";

export default function BookScreen({ route, navigation }) {
  const { book } = route.params;
  const { borrowBook, returnBook } = useContext(BooksContext);

  const handleBorrow = async () => {
    try {
      await borrowBook(book.id);
      Alert.alert("Success", "Book borrowed successfully!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const handleReturn = async () => {
    try {
      await returnBook(book.id);
      Alert.alert("Success", "Book returned successfully!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Book Cover */}
          <Image source={{ uri: book.imageUrl }} style={styles.bookImage} />
          <View style={styles.bookInfo}>
            {/* Title & Author */}
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookAuthor}>{book.author}</Text>

            {/* Borrow/Return Button */}
            <TouchableOpacity
              onPress={book.available ? handleBorrow : handleReturn}
              style={[
                styles.button,
                book.available ? styles.borrowButton : styles.returnButton,
              ]}
            >
              <Text style={styles.buttonText}>
                {book.available ? "Borrow Book" : "Return Book"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>{book.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
