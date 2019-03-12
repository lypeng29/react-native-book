import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet,TouchableOpacity } from 'react-native';
import SearchBar from '../common/searchbar';
import Util from '../common/util';
import Api from '../common/api';
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            show: true,
            keyword: 'react'
        };
    }
    componentDidMount(){
        // 初次请求数据
        this.getData();
    }
    updateSearch = search => {
        this.setState({ keyword: search });   
    }
    searchText=()=>{
        this.getData();
    }
    // 以下写法报错，不识别this
    // searchText (){
    //     this.getData();
    // }

    getData(){
        // 显示loading
        this.setState({
            show: false
        });
        // 请求数据
        var that = this;
        var url = Api.book_search + '?count=20&q=' + this.state.keyword;
        Util.getRequest(url, function (response) {
            // 请求成功
            if (!response.books || response.books.length == 0) {
                return alert("未查询到数据");
            }
            // 显示loading,将请求结果赋值给data
            that.setState({
                show: true,
                data: response.books
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
                    placeholder="请输入关键词（书名、作者）..."
                    onChangeText={this.updateSearch}
                    onPress={this.searchText}
                />
                {
                    // 请求数据时显示loading，请求成功显示列表
                    this.state.show ?
                        <View style={styles.container} >
                            {
                                this.state.data.map((item, i) => {
                                    return (
                                        <TouchableOpacity style={styles.list} key={i} onPress={() => this.props.navigation.push('Details', { 'bookID': item.id })}
                                            activeOpacity={0.5}>
                                            <Image source={{ uri: item.images.small }} style={styles.images} />
                                            <View style={styles.rightbox}>
                                                <Text style={styles.title}>{item.title}</Text>
                                                <Text>价格：{item.price ? item.price : '暂无'}</Text>
                                                <Text>作者：{
                                                    item.author.map(
                                                        function(vo){
                                                            return vo + ' ';
                                                        }
                                                        )
                                                    }</Text>
                                                <Text>{item.publisher} {item.pubdate}</Text>
                                                <Text>{item.pages ? item.pages : '未知'} 页</Text>
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
        padding:10,
        marginTop: 0
    },
    btn:{
        width:100,
        height:30
    },
    images: { width: 80, height: 100 },
    title:{
        fontWeight:"bold",
        color:"#f33"
    },
    rightbox:{
        flex:1,
        marginLeft:10
    },
    list:{
        flex: 1,
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingTop:10,
        paddingBottom:10
    }
})