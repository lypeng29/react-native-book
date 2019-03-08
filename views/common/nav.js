import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
export default NavHome = StackNavigator({
    Home: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: (<Button onPress={() => navigation.navigate('DrawerToggle')} title={'User'} />),
            headerRight: (<Button onPress={() => navigation.navigate('Message')} title={'Message'} />),
        })
    },
    Message: {
        screen: MessageContainer,
        navigationOptions: ({ navigation }) => ({
            title: "Message",
            headerLeft: (<Button title='Back' onPress={() => { navigation.goBack(); }} />)
        })
    },
});