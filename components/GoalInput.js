import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText == "") {
      Alert.alert("Try Again", "Please fill data", [
        { text: "okay", style: "destructive", onPress: setEnteredGoalText("") },
      ]);
    } else {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    }
  }

  return (
    <>
      <StatusBar />
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.body}>
          <Image source={require("../assets/images/step3_onboard.png")} />

          <TextInput
            placeholder="Your course goal!"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            style={styles.appContainer}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.btn}>
              <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View>
              <Button title="Cancel" onPress={props.onCancel} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: "20%",
    backgroundColor: "lightblue",
  },
  appContainer: {
    width: "80%",
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "indigo",
    borderRadius: 4,
    marginTop: 50,
  },

  btn: {
    height: 50,
    marginLeft: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },

  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
