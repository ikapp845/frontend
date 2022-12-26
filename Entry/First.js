import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackgroundColour from "../Styles/Background";
import Google from "../Icon/Google";

export default function First({ navigation }) {
  return (
    <View style={BackgroundColour.back}>
      <View>
        <Text>IK</Text>
      </View>
      <TouchableOpacity
        style={styles.google}
        onPress={() => {
          navigation.navigate("Username");
        }}
      >
        <Google></Google>
        <Text style={styles.googletext}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  google: {
    alignItems: "center",
    justifyContent: "center",
    width: "83%",
    backgroundColor: "white",
    height: 60,
    borderRadius: 50,
    marginLeft: "8.5%",
    flexDirection: "row",
  },
  googletext: {
    textAlign: "center",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
