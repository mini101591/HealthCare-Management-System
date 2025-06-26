import {useState} from 'react';
import { View, Text,TextInput, Button, StyleSheet } from 'react-native';
import TaskList from './TaskList';

type Task = {
  id: string;
  text: string;
};

function TaskInput() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]); // Stores all tasks

  // Adds task to list
  function addTask() {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask('');
    }
  }
 
  // Removes task from list
  function deleteItem(id: string) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            value={task}
            onChangeText={setTask}
          />
        <Button title='Add Task' onPress={addTask}/>
      </View>
      <View><TaskList tasks={tasks}  deleteItem={deleteItem} /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 40,
    backgroundColor: '#fff',
  },
});

export default TaskInput;