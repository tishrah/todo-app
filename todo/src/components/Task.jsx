import React, {useEffect, useState} from 'react';
import {Animated, Text, TouchableOpacity, View, Easing} from 'react-native';
import {styles} from './style';

const Task = props => {
  const [check, setCheck] = useState(false);
  const fade = new Animated.Value(0);
  const fading1 = fade.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [
      'rgb(204, 255, 204)',
      'rgb(255, 153, 153)',
      'rgb(204, 255, 204)',
    ],
  });
  const fading2 = fade.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [
      'rgb(255, 153, 153)',
      'rgb(204, 255, 204)',
      'rgb(255, 153, 153)',
    ],
  });

  const Fading = () => {
    fade.setValue(0);
    Animated.timing(fade, {
      toValue: 2,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => Fading());
  };
  useEffect(() => {
    Fading();
  });

  const completeTask = () => {
    setCheck(!check);
  };
  const checked = () => {
    if (check) return '#47d147';
    else return 'white';
  };
  const completed = () => {
    if (check) return '#90ff90';
    else {
      if (props.index % 2 == 0) return fading1;
      else return fading2;
    }
  };

  return (
    <Animated.View style={[styles.taskItem, {backgroundColor: completed()}]}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}>
          <Text style={styles.todoIndex}>{props.index + 1}</Text>
        </TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity
        style={[styles.circle, {backgroundColor: checked()}]}
        onPress={() => completeTask()}></TouchableOpacity>
    </Animated.View>
  );
};

export default Task;
