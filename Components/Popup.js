import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Popup(props) {
  return (
    <Modal
      style={styles.pop}
      animationType="fade"
      visible={props.modalvisible}
      transparent={true}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
    >
      <Text style={styles.head}>Are you sure you want to leave the group?</Text>
      <Text style={styles.head2}>
        You'll be removed from the group without notifying other user's
      </Text>
      <TouchableOpacity style={styles.leave}>
        <Text style={styles.leavetext}>Leave</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancel}>
        <Text style={styles.canceltext}>Cancel</Text>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  pop: {
    borderRadius: 30,
    width: "73%",
    marginLeft: "13.5%",
    backgroundColor: "white",
  },
  leave: {
    backgroundColor: "#434a54",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  head: {
    opacity: 0.87,
    fontSize: 16,
    marginTop: 30,
  },
  head2: {
    fontSize: 14,
    opacity: 0.87,
    marginTop: 25,
  },
  leavetext: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  canceltext: {
    color: "#434a54",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 32,
  },
});
