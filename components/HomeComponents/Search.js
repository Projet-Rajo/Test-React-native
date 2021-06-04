import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Search = () => {
  return (
    <>
      <View style={styles.searchTitle}>
        <Image
          source={require("../../assets/google.png")}
          style={{width: 280, height: 85}}
        />
      </View>

      <View style={styles.searchInput}>
        <Image
          source={require("../../assets/icon-search.png")}
          style={styles.iconInput}
        />
        <TextInput
          style={[{ width: "80%" }]}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity>
          <Image
            source={require("../../assets/micro-icon.png")}
            style={styles.iconInput}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Recherche google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text>J'ai de la chance</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchTitle: {
    flexDirection: "row",
  },
  title: {
    fontSize: 60,
    margin: 1,
    fontWeight: "bold",
    fontFamily: 'arial'
  },
  searchInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    height: 40,
    borderRadius: 35,
    margin: 10,
    width: "35%",
    minWidth: 300
  },
  iconInput: {
    padding: 0,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: "stretch",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    margin: 2,
    height: 40,
    borderRadius: 5,
  },
});
