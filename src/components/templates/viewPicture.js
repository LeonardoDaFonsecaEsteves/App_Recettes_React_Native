import React from "react";
import { ImageBackground, Modal } from "react-native";
const ViewPicture = ({ uri, modal, close }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modal}
      onRequestClose={() => close()}
    >
      <ImageBackground
        source={{
          uri: `https://firebasestorage.googleapis.com/v0/b/recettes-ea3bc.appspot.com/o/images%2F${uri}?alt=media&token=30cd81b2-608d-42de-8cd3-1eacac6ff0ac`
        }}
        style={{ width: "100%", height: "100%" }}
      ></ImageBackground>
    </Modal>
  );
};

export default ViewPicture;
