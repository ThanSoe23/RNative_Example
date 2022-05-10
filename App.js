import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TextInput
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          style={styles.appContainer}
        />
        <View style={styles.btn}>
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView>
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

  goalsContainer: {
    flex: 8,
    alignItems: "center",
    textAlignVertical: "center",
  },

  goalItem: {
    height: 50,
    width: 250,
    alignItems: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 8,
    margin: 8,
    padding: 8,
    color: "black",
  },
});
