import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E3F2FD",
  },
  iconButton: {
    marginRight: 16,
  },
  searchBar: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    color: "#37474F",
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  bookItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFCC80",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  unavailableBook: {
    backgroundColor: "#B0BEC5",
  },
  bookImage: {
    width: 60,
    height: 90,
    borderRadius: 6,
  },
  bookInfo: {
    marginLeft: 12,
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#37474F",
  },
  bookAuthor: {
    fontSize: 14,
    color: "#546E7A",
  },
  noResults: {
    marginTop: 50,
    alignItems: "center",
  },
  noResultsText: {
    fontSize: 16,
    color: "#546E7A",
    fontStyle: "italic",
  },
});
