import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import AboutPage from './book/about';
import BookPage from './book/index';
import MoviePage from './movie/index';
import BookDetailsPage from './book/detail';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

const bottomTabNavigator = createBottomTabNavigator({
        Book: BookPage,
        Movie: MoviePage,
        About: AboutPage
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Book') {
                    iconName = focused ? 'book' : 'book' ; //可以根据focused更换图标
                } else if (routeName === 'Movie') {
                    iconName = 'movie';
                }else{
                    iconName = 'stars';
                }
                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            //根据是否激活，改变颜色
            activeTintColor: 'tomato', 
            inactiveTintColor: 'gray',
        }
    });
const AppStack = createStackNavigator(
    {
        bottomTabNavigator: {
            screen: bottomTabNavigator
        },
        Details: {
            screen: BookDetailsPage,
            // navigationOptions: {
            //     title: "图书详情"
            // }
        }
    }, {
        initialRouteName: "bottomTabNavigator",
        // 默认header bar样式配置
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#2596f3',
                height: 0 //影藏header
            }
        },
    });
const AppContainer = createAppContainer(AppStack);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}