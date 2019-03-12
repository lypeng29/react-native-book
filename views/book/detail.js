import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Icon,Header,Button } from 'react-native-elements';
import Util from '../common/util';
import Api from '../common/api';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
export default class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookID: '',
            bookData: null
        };
    }
    componentDidMount(){
        // bookID = this.props.navigation.getParam('bookID', 26378583);
        // this.setState({
        //     bookID: bookID
        // })
        this.getData();
    }
    getData(){
        // var url = Api.book_detail_id + this.state.bookID;
        var url = Api.book_detail_id + this.props.navigation.getParam('bookID', 26378583);
        var that = this;
        Util.getRequest(url,function(data){
            that.setState({
                bookData: data
            })
        },function(error){
            alert(error);
        })
    }
    render(){
        var bookData = this.state.bookData;
        return (
            <ScrollView>
                {
                    bookData != null ?
                    <View>
                            {/* <Button
                                icon={{
                                    name: "assignment-return",
                                    size: 15,
                                    color: "white"
                                }}
                                onPress={() => this.props.navigation.goBack()}
                                title="返回"
                            />   */}

                            <View style={styles.list}>
                                <Image source={{ uri: bookData.images.small }} style={styles.images} />
                                <View style={styles.rightbox}>
                                    <Text style={styles.title}>{bookData.title}</Text>
                                    <Text>价格：{bookData.price ? bookData.price : '暂无'}</Text>
                                    <Text>作者：{
                                        bookData.author.map(
                                            function (vo) {
                                                return vo + ' ';
                                            }
                                        )
                                    }</Text>
                                    <Text>{bookData.publisher} {bookData.pubdate}</Text>
                                    <Text>{bookData.pages ? bookData.pages : '未知'} 页</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text>图书简介</Text>
                                <Text>{bookData.summary}</Text>
                            </View>
                            <View style={{marginTop:10}}>
                                <Text>作者简介</Text>
                                <Text>{bookData.author_intro}</Text>
                            </View>
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