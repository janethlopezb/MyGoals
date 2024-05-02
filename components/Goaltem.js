import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({itemData, OnDeLeteItem}){
    return(
        <Pressable>
            <View style={StyleSheet.goalsItem}>
            <Text style={StyleSheet.goalsText}>{itemData.item}</Text>
            </View>
            </Pressable>

    )
}

export default GoalItem

const style=StyleSheet.create({
    goalsItem:{
        margin:8,
        padding:8,
        borderRadius: 6,
        backgroundColor: '"8576FF',
        color:'white'
    },
    goalText:{
        color:'white'
    
    }
})