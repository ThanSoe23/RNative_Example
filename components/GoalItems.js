import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    height: 50,
    width: 250,
    alignItems: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    borderColor: "indigo",
    borderRadius: 8,
    margin: 8,
    padding: 8,
    color: "green",
  },
});
