import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

function getData(url) {
    fetch(url).then((response) => {
        return response.json();
    })
        .then((responseData) => {
            alert(responseData.message);
        })
        .catch((err) => {
            alert(err);
        })
}

function postData(url) {
    let formData = new FormData();
    formData.append("username", 'lisi');
    var opts = {
        method: 'POST',
        body: formData
    }
    fetch(url, opts).then((response) => {
        return response.json();
        // return response.text();
    })
        .then((responseData) => {
            alert(responseData.message);
        })
        .catch((err) => {
            alert(err);
        })
}

export default class index extends Component {
    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity onPress={() => { getData('https://www.dpshop.net/index/request_get?username=zhangsan') }}>
                    <View style={style.btn}>
                        <Text>GET</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { postData('https://www.dpshop.net/index/request_post') }}>
                    <View style={style.btn}>
                        <Text>POST</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

var style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#aef",
        alignItems: 'center',
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 0
    },
    btn: {
        width: 60,
        height: 30,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "#333",
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#ff4"
    }
})