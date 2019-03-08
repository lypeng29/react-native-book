import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Materialicons';

export default class App extends Component {
    render() {
        return (
            <View style={style.container}>
                <Icon name="arrow-downward" size={20} />
                <Icon name="save" size={20} />
                <Icon name="arrow-back" size={20} />
                <Icon name="arrow-drop-down" size={20} />
                <Icon name="arrow-drop-down-circle" size={20} />
                <Icon name="arrow-forward" size={20} />
                <Icon name="arrow-upward" size={20} />
                <Icon name="art-track" size={20} />
            </View>
        )
    }
}

var style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#25f",
        alignItems:'center',
        justifyContent:"space-around",
        flexDirection: "row",
        marginTop:30
    },
    btn:{
        width:60,
        height:30,
        borderWidth:1,
        borderRadius:3,
        borderColor:"#333",
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor:"#ff4"
    }
})