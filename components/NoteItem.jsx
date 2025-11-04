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
    backgroundColor: '#338bfeff"',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderRadius: 8,
  },
  noteText: {
    fontSize: 16,
    color: '#ffffff',
  },
})

export default NoteItem