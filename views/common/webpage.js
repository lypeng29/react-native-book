import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebPage extends Component{
    constructor(props) {
        super(props);
    }    
    render(){
        var movieURL = this.props.navigation.getParam('movieURL', 'https://movie.douban.com/subject/1779313/');
        return(
            <View style={{backgroundColor:"write",flex:1}}>
                <WebView 
                startInLoadingState={true}
                contentInset={{top:-44,bottom:-120}}
                    source={{ uri: movieURL}}/>
            </View>
        )
    }
}