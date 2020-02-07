import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import ViewPicture from "../../components/templates/viewPicture";

const CameraPage = ({ close, dispatch }) => {
  const ref = React.createRef();
  const [CameraPage, setCameraPage] = useState({
    camera: null,
    type: Camera.Constants.Type.back
  });

  const handleCameraType = () => {
    setCameraPage({
      type:
        CameraPage.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    });
  };
  const takePicture = async () => {
    if (ref) {
      Alert.alert(
        ``,
        `Enregistrement de la photo...  `,
        [
          {},
          {
            text: "OK"
          }
        ],
        { cancelable: false }
      );
      let photo = await CameraPage.camera.takePictureAsync();
      if (photo) {
        close();
        dispatch({ type: "PICTURE", payload: photo });
      }
    }
  };

  const _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      close();
      dispatch({ type: "PICTURE", payload: result });
    }
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          ref={ref => (CameraPage.camera = ref)}
          type={CameraPage.type}
        ></Camera>
        <View
          style={{
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              backgroundColor: "transparent"
            }}
          >
            <Ionicons
              name="ios-photos"
              onPress={() => _pickImage()}
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              backgroundColor: "transparent"
            }}
          >
            <FontAwesome
              name="camera"
              style={{ color: "#fff", fontSize: 40 }}
              onPress={() => takePicture()}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              backgroundColor: "transparent"
            }}
          >
            <MaterialCommunityIcons
              name="camera-switch"
              style={{ color: "#fff", fontSize: 40 }}
              onPress={() => handleCameraType()}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CameraPage;
