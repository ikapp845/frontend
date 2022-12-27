import { Modal, StyleSheet, View, Text, Image } from "react-native";
import SuperData from "./SuperData";
import Slide from "./Slide";
import { useState } from "react";

export default function Super(props) {
  const [no, setNo] = useState(2);
  return (
    <Modal
      visible={props.modalvisible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
    >
      <View style={styles.super}>
        <Text style={styles.main}>See who sent this</Text>
        <View style={styles.second}>
          <Text style={styles.secondtext}>with </Text>
          <Image source={require("../Images/Crown.png")} />
          <Text style={styles.secondtext}> Super mode</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Slide desc={SuperData[no].desc} img={SuperData[no].img}></Slide>
        </View>
        <View style={styles.slider}>
          <View style={[styles.sliderdot, { backgroundColor: "white" }]}></View>
          <View style={[styles.sliderdot, { backgroundColor: "white" }]}></View>
          <View style={[styles.sliderdot, { backgroundColor: "white" }]}></View>
        </View>
        <Text style={styles.price}>
          {`\u20A8`}100
          <Text style={{ color: "#818181", fontSize: 12 }}>/w</Text>
        </Text>
        <View style={styles.continue}>
          <Text style={styles.continuetext}>Continue</Text>
        </View>
        <Text>Maybe Later</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  super: {
    width: "95%",
    height: "80%",
    backgroundColor: "#d9d977",
    marginLeft: "2.5%",
    marginTop: "10%",
    borderRadius: 20,
  },
  main: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    marginTop: 25,
    fontWeight: "bold",
  },
  second: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  secondtext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  slider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  sliderdot: {
    width: 8,
    height: 8,

    borderRadius: 8,
    margin: 5,
  },
  price: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e1e1e",
  },
  continue: {
    backgroundColor: "#ab6ce8",
    width: "90%",
    alignItems: "center",
    marginLeft: "5%",
    height: 60,
    justifyContent: "center",
  },
  continuetext: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
