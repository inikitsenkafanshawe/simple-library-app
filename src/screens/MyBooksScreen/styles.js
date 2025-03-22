import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E3F2FD",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E88E5",
    marginBottom: 16,
  },
  noBooksText: {
    fontSize: 16,
    color: "#424242",
    textAlign: "center",
    marginTop: 20,
    fontStyle: "italic",
  },
  bookItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#B0BEC5",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
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
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: "#546E7A",
  },
  returnButton: {
    backgroundColor: "#FF7043",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  returnButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});
