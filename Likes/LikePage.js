import { View, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import Down from "../Icon/Down";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Friends from "./Friends";
import Likes from "./Likes";

const Tab = createMaterialTopTabNavigator();

export default function LikePage(props) {
  return (
    <Modal
      transparent={true}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
      visible={props.modalvisible}
      animationType="slide"
    >
      <View style={styles.like}>
        <View style={styles.likeinside}>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              style={{ marginLeft: "2%" }}
              onPress={() => {
                props.setModalvisible(false);
              }}
            >
              <Down></Down>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, textAlign: "center", width: "88%" }}>
              Likes
            </Text>
          </View>
          <Tab.Navigator>
            <Tab.Screen name="Me" component={Likes}></Tab.Screen>
            <Tab.Screen name="Friends" component={Friends}></Tab.Screen>
          </Tab.Navigator>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  like: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  likeinside: {
    bottom: 0,
    position: "absolute",
    height: "95%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});