import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContent}>
      <TouchableOpacity>
        <Text style={styles.text}>Gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Images</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icon-menu.png")}
          style={{ width: 25, height: 25, marginTop: 3, marginLeft: 3 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icon-2.png")}
          style={{ width: 25, height: 25, marginLeft: 3 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  text: {
    color: "#878A8D",
    fontSize: 13,
    margin: 5,
  },
});
