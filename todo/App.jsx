import React, {useEffect, useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import {styles} from './src/components/style';
import Task from './src/components/Task';

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const fade = new Animated.Value(0.75);
  const trans = new Animated.Value(0);

  const translate = trans.interpolate({
    inputRange: [0, 25, 50, 75, 100],
    outputRange: [150, 75, 10, 75, 150],
  });
  const fading = fade.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0.75, 0.1, 0.75],
  });

  const Translate = () => {
    trans.setValue(0);
    Animated.timing(trans, {
      toValue: 100,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => Translate());
  };
  const Fading = () => {
    fade.setValue(0.1);
    Animated.timing(fade, {
      toValue: 2,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => Fading());
  };

  const handleAddTask = () => {
    if (task == null) Alert.alert('Task cannot be empty');
    else {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };
  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  const noTask = () => {
    if (taskItems.length == 0) return 'No \n task \n to \n display';
  };

  useEffect(() => {
    Fading();
    Translate();
  }, [taskItems]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Todo's list</Text>
        <Animated.View
          style={{opacity: fading, transform: [{translateY: translate}]}}>
          <Text style={styles.noneTask}>{noTask()}</Text>
        </Animated.View>
        <ScrollView>
          {taskItems.map((item, index) => {
            return (
              <View style={styles.taskContainer} key={index}>
                <Task text={item} index={index} />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => completeTask(index)}>
                  <Text style={styles.cross}>X</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.inputField}>
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.inputText}
            placeholder={'Write a Task'}
            value={task}
            onChangeText={text => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default App;
