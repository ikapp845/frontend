import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import BackgroundColour from "../Styles/Background";
import Vertical from "../Icon/Vertical";
import Camera from "../Icon/Camera";
import Like from "../Icon/Like";
import Plus from "../Icon/Plus";
import { useState } from "react";
import DownPopup from "../Components/DownPopup";

function share() {}

function leavegroup() {}

function instagram() {}

function help() {}

function deleteaccount() {}

export default function CustomDrawer(props) {
  const [modalvisiblegroup, setModalvisiblegroup] = useState(false);
  const [modalvisiblemain, setModalvisiblemain] = useState(false);

  return (
    <View style={[BackgroundColour.back]}>
      <DownPopup
        data={[
          { name: "Follow us on Instagram", function: instagram },
          { name: "I want help", function: help },
          { name: "Delete my account", function: deleteaccount },
        ]}
        modalvisible={modalvisiblemain}
        setModalvisible={setModalvisiblemain}
      ></DownPopup>
      <DownPopup
        data={[
          { name: "Share Invite Link", function: share },
          { name: "Leave from group", function: leavegroup },
        ]}
        modalvisible={modalvisiblegroup}
        setModalvisible={setModalvisiblegroup}
      ></DownPopup>
      <View style={styles.top}>
        <View style={styles.profilepic}>
          <View style={styles.camera}>
            <Camera></Camera>
          </View>
        </View>
        <View style={styles.nameview}>
          <Text style={styles.name}>Mark Zuckerberg</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Like></Like>
            <Text style={{ color: "white", fontSize: 16 }}> 123</Text>
          </View>
        </View>
        <Pressable
          onPress={() => {
            setModalvisiblemain(true);
          }}
        >
          <Vertical></Vertical>
        </Pressable>
      </View>
      <TouchableOpacity
        style={styles.create}
        onPress={() => {
          setModalvisiblemain(true);
        }}
      >
        <Plus style={{ marginLeft: 10 }}></Plus>
        <Text style={styles.createtext}> Create a group</Text>
        <Vertical></Vertical>
      </TouchableOpacity>
      <View style={styles.create}>
        <TouchableOpacity style={{ width: "90%" }}>
          <Text style={[styles.createtext, { marginLeft: 25 }]}>Main</Text>
        </TouchableOpacity>
        <Pressable
          onPress={() => {
            setModalvisiblegroup(true);
          }}
        >
          <Vertical></Vertical>
        </Pressable>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profilepic: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: "#fbe2e2",
    position: "relative",
    marginLeft: 16,
  },
  camera: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 100,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 0,
  },
  nameview: {
    marginLeft: 16,
    marginRight: 30,
  },
  name: {
    fontSize: 18,
    color: "white",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: "white",
  },
  createtext: {
    color: "white",
    fontSize: 16,
    width: "80%",
  },
  create: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    width: "86%",
    marginLeft: "7%",
    height: 60,
    marginTop: 16,
  },
});
