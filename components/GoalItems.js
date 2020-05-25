import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItems = prop => {
    return (
    <View style={styles.listItems} >
        <Text>{prop.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    listItems: {
      padding:10,
      marginVertical: 5,
      backgroundColor: "#ccc",
      borderColor: 'black',
      borderWidth: 1
    
    }
});
export default GoalItems;