import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  View,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      // fetch("https://fakestoreapi.com/products")
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
          // console.log(json.products);
          setProducts(json.products);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };
  // <View style={styles.itemsView} title={item.title} />

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={{ paddingTop: "10%" }}>
          <ActivityIndicator size="large" color="#ff0000" />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemsView}>
                <Image
                  source={{ uri: item.images[0] }}
                  style={styles.productImage}
                />
                <View style={styles.detailView}>
                  <Text style={styles.title}>
                    {item.title.length > 10
                      ? item.title.substring(0, 22) + ".."
                      : item.title}
                  </Text>
                  {/* <Text style={styles.price}>{"$" + item.price}</Text> */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 30,
                    }}
                  >
                    <View style={styles.price}>
                      <Text>{"$" + item.price}</Text>
                    </View>
                    <View>
                      <AntDesign name="pluscircleo" size={24} color="green" />
                    </View>
                    <View>
                      <AntDesign
                        name="minussquareo"
                        size={24}
                        color="#ff0000"
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f1f3f4",
    marginTop: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
  productImage: {
    width: 100,
    height: 98,
  },
  detailView: {
    width: "60%",
    height: "100%",
    paddingLeft: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
  },
  price: {
    width: 70,
    padding: 5,
    backgroundColor: "#c2c2c2",
  },
});
