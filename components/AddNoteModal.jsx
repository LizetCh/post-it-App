import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddNoteModal = ({
  modalVisible, setModalVisible, newNote, setNewNote, addNewNote
}) => {
  return(
          <Modal
            visible={modalVisible}
            animationType='slide'
            transparent
            onRequestClose={() => setModalVisible(false)}
    
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Agregar una nueva nota</Text>
                <TextInput 
                  style={styles.input}
                  placeholder='Teclea una descripción'
                  placeholderTextColor={'#999'}
                  onChangeText={setNewNote}
                />
                <View style={styles.modalButtons}>
                  {/*Botón cancelar*/}
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                  </TouchableOpacity>
    
                  {/*Botón Aceptar*/}
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={addNewNote}
                  >
                    <Text style={styles.saveButtonText}>Aceptar</Text>
                  </TouchableOpacity>
    
                </View>
              </View>
            </View>
          </Modal>
  )
}

export default AddNoteModal

const styles = StyleSheet.create({
    modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
      modalContent: {
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 20,
      width: '80%',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#4b4949ff',
      borderRadius: 8,
      padding: 10,
      color: '#4b4949ff',
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    cancelButton: {
      backgroundColor: '#b4adadff',
      padding: 10,
      borderRadius: 8,
      flex: 1,
      marginRight: 10,
      alignItems: 'center',

    },
    cancelButtonText: {
      color: '#272727ff',
      fontWeight: 'bold',
    },
    saveButton: {
      backgroundColor: '#1d75f0ff',
      padding: 10,
      borderRadius: 8,
      flex: 1,
      marginLeft: 10,
      alignItems: 'center',
    },
    saveButtonText: {
      color: '#ffffff',
      fontWeight: 'bold',
    }
})