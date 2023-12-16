import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

const houses = [
  {
    id: 1,
    image: require("../images/house1.jpg"),
    description: "Beautiful house with garden",
    price: "$500,000",
  },
  {
    id: 2,
    image: require("../images/house2.jpg"),
    description: "Spacious house with a pool",
    price: "$700,000",
  },
  {
    id: 3,
    image: require("../images/house3.jpg"),
    description: "Beautiful house with garden",
    price: "$500,000",
  },
  {
    id: 4,
    image: require("../images/house4.jpg"),
    description: "Spacious house with a pool",
    price: "$700,000",
  },
  {
    id: 5,
    image: require("../images/house5.jpg"),
    description: "Beautiful house with garden",
    price: "$500,000",
  },
  // Add more houses here
];

const AppHeader = () => (
  <View style={styles.header}>
    <Image source={require("../images/realTalkLogo.png")} style={styles.logo} />
    <Text style={styles.headerText}>Real Talk</Text>
  </View>
);

export default function Houses() {
  const renderHouse = ({ item }) => (
    <View style={styles.card}>
      <Link
        href={{
          pathname: "SingleHouseScreen",
          params: {
            price: item.price,
            description: item.description,
            image: item.image,
          },
        }}
        asChild
      >
        <Pressable>
          {() => <Image source={item.image} style={styles.image} />}
        </Pressable>
      </Link>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppHeader />
      <FlatList
        data={houses}
        renderItem={renderHouse}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFBD59",
    height: 50,
  },
  headerText: {
    fontSize: 24,
    fontFamily: "American Typewriter",
    marginLeft: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
    padding: 16,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    color: "gray",
  },
});
