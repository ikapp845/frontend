import { View, StyleSheet, Image } from "react-native";

export default function Slide(props) {
  return (
    <View>
      <View>
        <Image source={require("../Images/ModeOne.png")} />
      </View>
      <Text>{props.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
