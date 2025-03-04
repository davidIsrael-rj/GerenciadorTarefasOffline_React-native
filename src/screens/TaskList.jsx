import React, { Component } from "react";
import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";

import commonStyles from "../commonStyles";
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'
import Task from "../components/Task";

export default class TaskList extends Component {

    state ={
        tasks: [{
            id: Math.random(),
            desc: 'Comprar Livro de React Native',
            estimateAt: new Date(),
            doneAt: new Date(),
        },
        {
            id: Math.random(),
            desc: 'Ler Livro de React Native',
            estimateAt: new Date(),
            doneAt: null,
        },
        {
            id: Math.random(),
            desc: 'Vender Livro de React Native',
            estimateAt: new Date(),
            doneAt: null,
        }]
    }


    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={styles.backgroud}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitulo}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                  <FlatList data={this.state.tasks}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => <Task {...item}/>}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroud: {
        flex: 3
    },
    taskList: {
        flex: 7,
        padding:10
    },
    titleBar: {
        flex: 1,
        alignContent: "flex-end",
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize:50,
        color: commonStyles.colors.secondary,
        marginLeft:20,
        marginBottom:20,
    },
    subtitulo:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize:20,
        marginLeft:20,
        marginBottom:30
    }
})