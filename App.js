import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import { v4 as uuidv4 } from 'uuid';
import ListItems from "./components/ListItems";
import AddListItem from "./components/AddListItem";

const App = () => {
  
  const [ items , setItems ] = useState([
    { id: '1' , text : 'Eggs'},
    { id: '2' , text : 'Milk'},
    { id: '3' , text : 'Bread'},
    { id: '4' , text : 'Juice'}
]);

const deleteItem = (id) => {
  setItems(preItems => {
    return preItems.filter(item => item.id != id );
  });
}

const addItem = (text) => {
  if(!text){
    Alert.alert('Error' , 'Please add some item first' )
  }else{
    setItems(preItems => {
      return [{id : '5' , text } , ...preItems]
    });
  }
}

  return (
      <View style={styles.container}>
        <Header />
        <AddListItem addItem={addItem}/>
        <FlatList 
          data={items} 
          renderItem={({item}) => (
            <ListItems 
              item={item} 
              deleteItem={deleteItem} 
              keyExtractor={item => item.id}
            />
          )}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
});

export default App;