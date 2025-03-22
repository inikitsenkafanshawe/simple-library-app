import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
  },
  scrollContainer: {
    padding: 16,
  },
  content: {
    flexDirection: "row",
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#37474F",
    marginBottom: 8,
  },
  bookAuthor: {
    fontSize: 16,
    color: "#546E7A",
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  borrowButton: {
    backgroundColor: "#1E88E5",
  },
  returnButton: {
    backgroundColor: "#FF7043",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#424242",
    marginVertical: 20,
    lineHeight: 24,
    textAlign: "justify",
    fontStyle: "italic",
  },
});
