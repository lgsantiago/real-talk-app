import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import BackButton from "../components/BackButton";

const SingleHouseScreen = () => {
  const { price, description, image } = useLocalSearchParams();
  const { back } = useRouter();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== "") {
      setComments((prevComments) => [...prevComments, comment]);
      setComment("");
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Text style={styles.commentText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <BackButton onPress={back}/>
      <Image source={require("../images/house4.jpg")} style={styles.image} />
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment..."
          value={comment}
          onChangeText={handleCommentChange}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitComment}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.previousCommentsTitle}>Previous Comments:</Text>
      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 30,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 8,
    padding: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  commentInputContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  submitButton: {
    backgroundColor: "blue",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  previousCommentsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  commentContainer: {
    backgroundColor: "#eee",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  commentText: {
    fontSize: 16,
  },
});

export default SingleHouseScreen;
