import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';



const GoalInput = prop => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Type here" style={styles.inputText} onChangeText={goalInputHandler}
                value={enteredGoal} />
            <Button title="ADD GOAL" onPress={prop.onAddGoalHandle.bind(this, enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    inputText: { width: '65%', borderColor: 'red', borderWidth: 1 },
});

export default GoalInput;