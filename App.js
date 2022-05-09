import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.appContainer}
        />
        <View style={styles.btn}>
          <Button title="Add Goal" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 80,
    paddingHorizontal: 10,
    alignItems: "center",
  },

  body: {
    flex: 1,
    flexDirection: "row",
    alignItems: "start",
  },

  btn: {
    height: 50,
    marginLeft: 10,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },

  appContainer: {
    height: 50,
    width: 250,
    padding: 10,
    borderWidth: 1,
    borderColor: "indigo",
    borderRadius: 4,
  },
});
