import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Modal, Portal, Button, PaperProvider, TextInput } from 'react-native-paper';
export default function Help() {

  const [visible, setVisible] = React.useState(false);
  const [note,setNote]=useState('');
  const [notes,setNotes]=useState([]);


  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20,margin:10};

  const handleSubmit=()=>{
    if(note.trim() !== ''){
      const noteId = Date.now();
      setNotes([...notes, {id : noteId, content: note}]);
    setNote('');
    hideModal();
    }
    
  }

  const handleDelete =(noteId)=>{
    setNotes(notes.filter((note)=>note.id !== noteId));
  }
  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Add Your Notes</Text>
          <TextInput 
            value={note}
            onChangeText={setNote}
            placeholder='Enter Your Notes...'
            style={styles.textInpput}
          />
        <View style={{width:150}}>
          <Button style={{ backgroundColor: "blue" }} mode="contained" onPress={handleSubmit}>
            Add Note
          </Button>
        </View>
        </Modal>
      </Portal>

      <View style={styles.container}>
      <Button style={ { marginTop: 30, backgroundColor:'blue'}} onPress={showModal}>
        <Text style={{ color: "white" }}>
        ADD Notes
        </Text>
      </Button>
      {notes.map((note,index)=>(
        <View key={index} style={styles.noteContainer}>
            <Text style={{borderLeftColor:"blue", borderLeftWidth:2, color:"white",padding:10,borderRadius:10}}>{note.content}</Text>
       
          <Button style={{ backgroundColor: 'white' }} onPress={()=>handleDelete(note.id)}>
              Delete
          </Button>
        </View>  
      ))}
      </View>
      
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textInpput:{
    height:40,
    borderColor:'white',
    borderWidth:1,
    paddingHorizontal:10,
    marginVertical:10
  },
  noteContainer:{
flexDirection:'row',
alignItems:'center',
backgroundColor:'gray',
justifyContent:'space-between',
margin:10,
padding:10
  }
});