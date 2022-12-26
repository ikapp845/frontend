import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

export default function DownPopup(props) {
  return (
    <Modal
      animationType="slide"
      visible={props.modalvisible}
      transparent={true}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
      style={styles.pop}
    >
      <View style={styles.upload}>
        <View style={styles.hole}></View>
        {props.data.map((obj) => (
          <TouchableOpacity
            key={`${obj.name}`}
            style={styles.button}
            onPress={obj.function}
          >
            <Text style={styles.buttontext}>{obj.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  pop: {},
  upload: {
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    width: "100%",
    bottom: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  hole: {
    width: 36,
    height: 4,
    backgroundColor: "#b793d6",
    marginBottom: 4,
    marginTop: 8,
    borderRadius: 5,
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#eeeeee",
    height: 50,
    justifyContent: "center",
    width: "89%",

    marginBottom: 4,
    marginTop: 4,
  },
  buttontext: {
    textAlign: "center",
    fontSize: 16,
  },
});