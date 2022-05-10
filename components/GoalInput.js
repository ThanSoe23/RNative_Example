import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.body}>
      <TextInput
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        style={styles.appContainer}
      />
      <View style={styles.btn}>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </View>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "row",
    alignItems: "start",
  },
  appContainer: {
    height: 50,
    width: 250,
    padding: 10,
    borderWidth: 1,
    borderColor: "indigo",
    borderRadius: 4,
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
});
