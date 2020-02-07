import React, { useState } from "react";
import { View, Text, TouchableNativeFeedback, Alert } from "react-native";
import Display from "react-native-display";
import CountDown from "react-native-countdown-component";
import styles from "../../styles/styles";
import Details from "./details";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

const List = ({ data }) => {
  const [state, setState] = useState({
    enable: false,
    timer: false,
    status: null,
    pause: true
  });
  const soundObject = new Audio.Sound();

  const toggleDisplay = () => {
    let toggle = !state.enable;
    setState({ ...state, enable: toggle });
  };
  const displayTimer = () => {
    let toggle = !state.timer;
    setState({ ...state, timer: toggle });
  };

  const stop = () => {
    soundObject.stopAsync();
  };

  const handlePlaySound = async () => {
    let source = require("../../sound/1614.mp3");
    try {
      await soundObject.loadAsync(source);
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
    Alert.alert(
      ``,
      `${data.name}  est terminer `,
      [{}, { text: "OK", onPress: () => stop() }],
      { cancelable: false }
    );
    let toggle = !state.timer;
    setState({ ...state, timer: toggle });
  };

  return (
    <ScrollView>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => toggleDisplay()}
      >
        <View style={styles.item} backgroundColor={data.color}>
          <Text style={styles.title}>{data.name}</Text>
          <Display
            style={styles.row}
            enable={state.timer}
            enterDuration={250}
            exitDuration={250}
            exit="fadeOutLeft"
            enter="fadeInLeft"
          >
            <CountDown
              size={15}
              until={data.time * 60}
              onFinish={() => handlePlaySound()}
              running={state.pause}
              digitStyle={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#1CC625"
              }}
              style={styles.chrono}
              digitTxtStyle={{ color: "#1CC625" }}
              timeLabelStyle={{ color: "red", fontWeight: "bold" }}
              separatorStyle={{ color: "#1CC625" }}
              timeToShow={["H", "M", "S"]}
              timeLabels={{ m: null, s: null }}
              showSeparator
            />
            <View
              style={{
                height: 35,
                width: 50,
                marginLeft: 15
              }}
            >
              <Icon
                onPress={() => setState({ ...state, pause: !state.pause })}
                size={25}
                style={{ marginLeft: 10, margin: 5 }}
                name={state.pause === true ? "md-pause" : "md-play"}
              />
            </View>
          </Display>
        </View>
      </TouchableNativeFeedback>
      <Display
        enable={state.enable}
        enterDuration={350}
        exitDuration={350}
        exit="fadeOutRight"
        enter="fadeInLeft"
      >
        <Details
          data={data}
          display={state.timer}
          timer={() => displayTimer()}
        />
      </Display>
    </ScrollView>
  );
};

export default List;
