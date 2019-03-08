import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import BookPage from './book/index';
import MoviePage from './movie/index';

var ScrollableTabView = require('react-native-scrollable-tab-view');

class WeixinTabBar extends Component {
    setAnimationValue({ value }) {
        console.log(value);
    }
    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue);
    }
    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#6Bae23" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity onPress={() => this.props.goToPage(i)} style={styles.tab} key={{i}}>
                <View style={styles.tabItem}>
                    <Icon
                        name={this.props.tabIconNames[i]} // 图标
                        size={30}
                        color={color} />
                    <Text style={{ color: color }}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabNames: ['图书', '电影'],
            tabIconNames: ['book', 'movie'],
        };
    }
    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (
            <ScrollableTabView
                tabBarUnderlineStyle={{ backgroundColor: '#0258d4', height: 2 }} tabBarPosition="bottom" tabBarBackgroundColor="#fff"
                tabBarInactiveTextColor="#999" tabBarActiveTextColor='#333' tabBarTextStyle={{ fontSize: 14 }}
                renderTabBar={() => <WeixinTabBar tabNames={tabNames} tabIconNames={tabIconNames} />}
            >
                <BookPage tabLabel=""/>
                <MoviePage tabLabel=""/>
            </ScrollableTabView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabs: {
        flexDirection: 'row',
        height: 50,
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});
