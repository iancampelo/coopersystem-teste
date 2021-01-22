
import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import Modal from 'modal-enhanced-react-native-web'

const ResgateModal = (props) => {
  const {visible, navigation, title, buttonText, text} = props

  return (
    <Modal
      isVisible={visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textModal}>{text}</Text>
          <TouchableHighlight
            style={styles.defaultButton}
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <Text style={styles.textStyle}>{buttonText}</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal> 
  )
}

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 0,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5
  },
  defaultButton: {
    backgroundColor: '#fae128',
    padding: 10,
    elevation: 2,
    marginTop: 10
  },
  textStyle: {
    color: "#005aa5",
    fontWeight: "bold",
    textAlign: "center",
  },
  textModal: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ResgateModal
