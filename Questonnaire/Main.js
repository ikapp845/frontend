import { View, Text, StyleSheet } from "react-native";
import LikeButton from "../Components/LikeButton";
import BackgroundColour from "../Styles/Background";
import ProfilePic from "../Components/ProfilePic";
import Question from "./Question";
import UsernameSearch from "../Components/UsernameSearch";
import Super from "../Supermode/Super";
import { useState } from "react";

export default function Main({ navigation }) {
  const [modalvisible, setModalvisible] = useState(true);

  return (
    <View
      style={[
        BackgroundColour.back,
        { alignItems: "center", position: "relative" },
      ]}
    >
      <Super
        modalvisible={modalvisible}
        setModalvisible={setModalvisible}
      ></Super>
      <View style={styles.header}>
        <ProfilePic navigation={navigation} val={40}></ProfilePic>
        <Text style={styles.slidetext}>1 of 12</Text>
        <LikeButton></LikeButton>
      </View>
      <Question></Question>
      <UsernameSearch></UsernameSearch>
    </View>
  );
}

const styles = StyleSheet.create({
  slidetext: {
    color: "white",
    fontSize: 14,
    marginLeft: "26%",
    marginRight: "26%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
