import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInputs from './components/GoalInputs';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoal( currentGoal => [...currentGoal, {id: Math.random().toString(), text: enteredGoal}])
  }
  return (
    <View style={styles.screen}>
      <GoalInputs onAddGoalHandle= {addGoalHandler}/>
      <FlatList 
      keyExtractor= {(item, index) => item.id}
      data={courseGoal} 
      renderItem={
          itemData => <GoalItems title={itemData.item.text}/>
      }>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  }
});

