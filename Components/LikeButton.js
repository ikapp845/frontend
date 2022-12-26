import { TouchableOpacity, StyleSheet } from "react-native";
import Like from "../Icon/Like";

export default function LikeButton() {
  return (
    <TouchableOpacity style={styles.like}>
      <Like></Like>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  like: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.1607843137254902)",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
