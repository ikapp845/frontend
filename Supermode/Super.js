import { Modal, StyleSheet, View, Text, Image } from "react-native";
import SuperData from "./SuperData";

export default function Super(props) {
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
});
