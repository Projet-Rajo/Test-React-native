import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import Footer from "../components/HomeComponents/Footer" 
import Header from "../components/HomeComponents/Header" 
import Search from "../components/HomeComponents/Search" 

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.main}>
        <Search />
      </View>

      <View style={styles.footer}>
        <Footer navigation={navigation}/>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    alignItems: "flex-end",
    flex: 1,
    marginTop: 20,
  },
  main: {
    flex: 3,
    alignItems: "center",
  }
});
