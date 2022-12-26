import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import BackgroundColour from "../Styles/Background";

export default function Username({ navigation }) {
  const [state, setState] = useState(false);
  return (
    <View style={BackgroundColour.back}>
      <View style={styles.headview}>
        <Text style={styles.head}>What does your friends call you?</Text>
      </View>
      <TextInput
        placeholder="@username"
        style={[
          styles.box,
          { marginTop: 68, backgroundColor: "white", paddingLeft: 20 },
        ]}
        placeholderTextColor={"rgba(0,0,0,0.2 )"}
      ></TextInput>
      <Pressable
        style={[state ? styles.instyle : styles.outstyle, styles.box]}
        onPressIn={() => {
          setState(true);
          navigation.navigate("Gender");
        }}
        onPressOut={() => {
          setState(false);
        }}
      >
        <View style={styles.signbox}>
          <Text style={styles.sign}>Sign me up</Text>
          {/* <Text>Add The right arrow here</Text> */}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headview: {
    width: "89%",
    justifyContent: "center",
  },
  head: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 22,
    color: "white",
  },
  box: {
    width: "83%",
    height: 70,
    marginLeft: "8.5%",
    marginRight: "8.5%",
    paddingLeft: "8.5%",
    paddingRight: "8.5%",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 16,
  },
  instyle: {
    backgroundColor: "#51f6cf",
  },
  outstyle: {
    backgroundColor: "#51f6cf",
    opacity: 0.5,
  },
  sign: {
    color: "white",
    fontSize: 16,
    marginRight: 30,
  },
  signbox: {
    flexDirection: "row",
  },
});
