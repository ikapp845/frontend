import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import BackgroundColour from "../Styles/Background";
import { useState } from "react";
import DownPopup from "../Components/DownPopup";

function takephoto() {}

function choosefromgallery() {}

export default function Pic() {
  const [state, setState] = useState(false);
  const [modalvisible, setModalvisible] = useState(false);
  return (
    <View style={BackgroundColour.back}>
      <DownPopup
        data={[
          { name: "Take a photo", function: takephoto },
          { name: "Choose from Gallery", function: choosefromgallery },
        ]}
        modalvisible={modalvisible}
        setModalvisible={setModalvisible}
      ></DownPopup>
      <View style={styles.head}>
        <Text style={styles.headtext}>
          Upload a picture to help others identify you
        </Text>
      </View>
      <View style={styles.pic}>
        <TouchableOpacity
          style={[styles.save]}
          onPress={() => {
            setModalvisible(true);
          }}
        >
          <View style={styles.picture}></View>
          <Text>Upload a profile picture</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.save, state ? { opacity: 1 } : { opacity: 0.5 }]}
        onPress={() => {}}
      >
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    width: "89%",
    marginLeft: "5.5%",
    marginTop: 50,
  },
  headtext: {
    fontSize: 22,
    textAlign: "center",
    color: "white",
  },
  save: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: "83%",
    borderRadius: 30,
    height: 80,
    marginLeft: "8.5%",
    marginTop: 30,
  },
  picture: {
    position: "absolute",
    height: 100,
    width: 100,
    borderWidth: 6,
    borderRadius: 100,
    backgroundColor: "#bcd3ff",
    borderColor: "white",
    top: -75,
    alignItems: "center",
  },
  pic: {
    marginTop: 80,
  },
});
