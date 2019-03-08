import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
export default class About extends Component {
    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        App Info
                    </Text>
                    <View style={styles.box}>
                        <Text style={styles.leftTitle}>版本</Text>
                        <Text style={styles.rightContent}>
                            v1.0_20190308
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.leftTitle}>课程地址</Text>
                        <Text style={styles.rightContent}>
                            https://ke.qq.com/webcourse/index.html#cid=203313&term_id=100240778&taid=1278010468801073&vid=e1414ek8gbc
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.leftTitle}>依赖组件</Text>
                        <Text style={styles.rightContent}>
                            react-native-elements、react-navigation、
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.leftTitle}>欠缺功能</Text>
                        <Text style={styles.rightContent}>
                            header：目前影藏了，设置了header高度为0
                        </Text>
                    </View>             
                </View>
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 0,
        lineHeight:30
    },
    title: {
        fontWeight: "bold",
        color: "#f33",
        fontSize: 20
    },
    box:{
        marginTop:20,
        flex:1
    },
    leftTitle:{
        fontSize:18,
        color:"#333",
        fontWeight:"800",
    },
    rightContent:{
        fontSize:16,
        color:"#999"
    }
})