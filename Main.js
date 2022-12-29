import { View, StyleSheet, Text } from "react-native";
import Entry from "./Sections/Entry";
import Group from "./Sections/Group";
import Questonnaire from "./Sections/Questonnaire";

export default function Main() {
  return (
    <View style={styles.main}>
      <Entry></Entry>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
  },
});
