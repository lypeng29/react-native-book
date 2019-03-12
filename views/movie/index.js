import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SearchBar from '../common/searchbar';
import Util from '../common/util';
import Api from '../common/api';
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            show: true,
            keyword: '狙击'
        };
    }
    componentDidMount() {
        // 初次请求数据
        this.getData();
    }
    updateSearch = search => {
        this.setState({ keyword: search });
    }
    searchText = () => {
        this.getData();
    }
    // 以下写法报错，不识别this
    // searchText (){
    //     this.getData();
    // }

    getData() {
        // 显示loading
        this.setState({
            show: false
        });
        // 请求数据
        var that = this;
        var url = Api.movie_search + '?count=20&q=' + this.state.keyword;
        Util.getRequest(url, function (response) {
            // 请求成功
            if (!response.subjects || response.subjects.length == 0) {
                return alert("未查询到数据");
            }
            // 显示loading,将请求结果赋值给data
            that.setState({
                show: true,
                data: response.subjects
            });
        }, function (error) {
            // 请求失败
            alert(error);
        });
    }
    render() {
        return (
            <ScrollView>
                <SearchBar
                    placeholder="请输入电影关键词..."
                    onChangeText={this.updateSearch}
                    onPress={this.searchText}
                />
                {
                    // 请求数据时显示loading，请求成功显示列表
                    this.state.show ?
                        <View style={styles.container} >
                            {
                                this.state.data.map((item, i) => {
                                    var actors=[];
                                    for (var i in item.casts) {
                                        actors.push(item.casts[i].name + ' ');
                                    }
                                    return (
                                        <TouchableOpacity style={styles.list} key={i} onPress={() => this.props.navigation.push('MovieDetails', { 'movieURL': item.alt })}>
                                            <Image source={{ uri: item.images.small }} style={styles.images} />
                                            <View style={styles.rightbox}>
                                                <Text style={styles.title}>{item.title}</Text>
                                                {/* <Text>演员：{
                                                    item.casts == '' ? '未知' :
                                                    item.casts.map(
                                                        function (vo) {
                                                            return vo.name + ' ';
                                                        }
                                                    )
                                                }</Text> */}
                                                <Text>演员：{actors == '' ? '未知' : actors}</Text>

                                                <Text>类别：{
                                                    item.genres=='' ? '未知' :
                                                    item.genres.map(
                                                        function (vo) {
                                                            return vo + ' ';
                                                        }
                                                    )
                                                }</Text>
                                                <Text>年份：{item.publisher} {item.year}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </View>
                        : Util.loading
                }
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        padding: 10,
        marginTop: 0
    },
    btn: {
        width: 100,
        height: 30
    },
    images: { width: 80, height: 100 },
    title: {
        fontWeight: "bold",
        color: "#f33"
    },
    rightbox: {
        flex: 1,
        marginLeft: 10
    },
    list: {
        flex: 1,
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10
    }
})