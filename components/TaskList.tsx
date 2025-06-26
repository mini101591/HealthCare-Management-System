import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';


function TaskList({ tasks, deleteItem }) {
 //Render Items
  const renderItems = ({item}) =>(
        <View style={styles.taskContainer}>
          <Text style={styles.taskText}>{item.text}</Text>
          <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
  )

  return (
    <FlatList 
      data={tasks}
      keyExtractor={(item)=>item.id}
      renderItem={renderItems}
      ListEmptyComponent={<Text style={styles.emptyText}>No Tasks Added!!</Text>}
    />
  );
}

const styles = StyleSheet.create({
   emptyText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 18,
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
    cursor:'pointer'
  },
});

export default TaskList;