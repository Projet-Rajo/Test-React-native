import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Footer = ({ navigation }) => {
  return (
    <>
      <View style={styles.footerTop}>
        <Text style={[styles.text, { marginLeft: 20}]}>France</Text>
      </View>

      <View style={styles.separator}></View>

      <View style={styles.footerBottom}>
        <View style={styles.footerBottomContent1}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <TouchableOpacity onPress={() => navigation.navigate("A propos")}>
              <Text style={styles.text}>A propos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>Publicité</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>Entreprise</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>
                Comment fonctionne la recherche google ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerBottomContent2}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <TouchableOpacity>
              <Text style={styles.text}>Neutre en carbone depuis 2007</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerBottomContent3}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <TouchableOpacity>
              <Text style={styles.text}>Infos consommateurs</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>Confidentialité</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>Paramètres</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerTop: {
    backgroundColor: "#F2F2F2",
  },
  separator: {
    backgroundColor: "#e1e1e1",
    width: "100%",
    height: 1,
  },
  footerBottom: {
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  footerBottomContent1: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  footerBottomContent2: {
    flex: 1,
    alignItems: "center",
  },
  footerBottomContent3: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#878A8D",
    fontSize: 13,
    margin: 10,
  },
});
