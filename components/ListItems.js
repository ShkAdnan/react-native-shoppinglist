import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from "react-native";
import  Icon  from "react-native-vector-icons/dist/FontAwesome";

const ListItems = ({ item, deleteItem }) => {
    return (      
        <TouchableOpacity style={styles.itemList}>
            <View style={styles.itemListView}>
                <Text style={styles.itemListText}>{item.text}</Text>
                <Icon name="remove" color="firebrick" size={20} 
                    onPress={() => deleteItem(item.id) }
                />
            </View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    itemList : {
      padding : 15,
      backgroundColor : '#f8f8f8',
      borderBottomWidth : 1,
      borderColor : '#eee'
    },
    itemListView : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems : 'center'
    },
    itemListText : {
        fontSize : 18
    }
  });

export default ListItems