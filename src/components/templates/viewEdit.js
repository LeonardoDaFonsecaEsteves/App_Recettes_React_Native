import React, { useState, useEffect } from "react";
import { Modal } from "react-native";
import { initialState, reducer } from "../../reducer/reducer";
import Ajouter from "../../Formulaire/Ajouter";

const viewEdit = ({ modal, close, data }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modal}
      onRequestClose={() => close()}
    >
      <Ajouter edit={true} data={data} close={() => close()} />
    </Modal>
  );
};

export default viewEdit;
