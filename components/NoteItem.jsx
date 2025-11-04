import { StyleSheet, Text, View } from 'react-native'



const NoteItem = ({note}) => {
  return (
    <View style = {styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  noteItem: {
    backgroundColor: '#eed970ff',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderRadius: 8
  },
  noteText: {
    fontSize: 16,
    color: '#000000ff',
  },
})

export default NoteItem