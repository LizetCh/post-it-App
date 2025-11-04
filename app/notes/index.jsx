import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
//import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import AddNoteModal from '@/components/AddNoteModal'
import NoteList from '@/components/NotesList'

const NoteScreen = () => {
  const [notes, setNotes] = useState([])

  const [modalVisible, setModalVisible] = useState(false)
  const [newNote, setNewNote] = useState('')

  //Función addNewNote
  const addNewNote = () => {
    if (newNote.trim() === '') return 
    setNotes((prevNotes) => [
      ...prevNotes,
      {id: Date.now().toString(), text: newNote}
    ])
    
    setNewNote('')
    setModalVisible(false)
    console.log(notes)
  }

  return (
    <View style = {styles.container}>
      <NoteList notes={notes} />
      <TouchableOpacity style={styles.addButton} 
      onPress={() => setModalVisible(true)} >
        <Text style={styles.addButtonText}>Agregar</Text>
      </TouchableOpacity> 
      {/*Modal*/}
      <AddNoteModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNewNote={addNewNote}
      />
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgrounColor: '#f8f9fa',

  },
  
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    backgroundColor: '#eeff00ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },


})