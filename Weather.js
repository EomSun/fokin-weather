import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Thunderstorm: {
        iconName : 'weather-lightning-rainy',
        gradient :['#E6DADA', '#274046'],
        title:'Thunderstorm',
        subtitle:"Just Don't Go Outside",
    },
    Drizzle: {
        iconName : 'weather-rainy',
        gradient : ['#00C6FF', '#0072FF'],
        title:'Drizzle',
        subtitle:"Recommend Not to Go Outside",
    },
    Rain: {
        iconName : 'weather-rainy',
        gradient : ['#00C6FF', '#0072FF'],
        title:'Rain',
        subtitle:"Recommend Not to Go Outside",
    },
    Snow: {
        iconName : 'wetaher-snowy',
        gradient:['#403B4A','#E7E9BB'],
        title:'Snow',
        subtitle:"Recommend Not to Go Outside",
    },
    Clear: {
        iconName : 'weather-sunny',
        gradient :['#FC4A1A','#F7B733'],
        title:'Clear',
        subtitle:"Let's Go Outside !",
    },
    Clouds: {
        iconName : 'weather-cloudy',
        gradient :['#BDC3C7','#2C3E50'],
        title:'Clouds',
        subtitle:"Recommend Not to Go Outside",
    },
    Mist: {
        iconName : 'weather-fog',
        gradient : ["#4DA0B0", '#D39C38'],
        title:'Mist',
        subtitle:"Recommend Not to Go Outside",
    },
    Smoke: {
        iconName : 'weather-fog',
        gradient : ["#4DA0B0", '#D39C38'],
        title:'Smoke',
        subtitle:"Just Don't Go Outside",
    },
    Haze: {
        iconName : 'weather-fog',
        gradient : ["#4DA0B0", '#D39C38'],
        title:'Haze',
        subtitle:"Just Don't Go Outside",        
    },
    Dust: {
        iconName : 'weather-fog',
        gradient : ["#4DA0B0", '#D39C38'],
        title:'Dust',
        subtitle:"Just Don't Go Outside",
    },
    Fog: {
        iconName : 'weather-fog',
        gradient : ["#4DA0B0", '#D39C38'],
        title:'Fog',
        subtitle:"Just Don't Go Outside",
    },
    Sand: {
        iconName : 'weather-fog',
        gradient : ["#4DA0B0", '#D39C38'],
        title:'Sand',
        subtitle:"Just Don't Go Outside",
    },
    Dust: {
        iconName : 'weather-fog',
        gradient : ["#4DA0B0", '#D39C38'],
        title:'Dust',
        subtitle:"Just Don't Go Outside",
    },
    Squall: {
        iconName : 'weather-windy',
        gradient : ['#757F9A', '#D7DDE8'],
        title:'Squall',
        subtitle:"Recommend Not to Go Outside",
    },
    Tornado: {
        iconName : 'weather-tornado',
        gradient :['#E6DADA', '#274046'],
        title:'Tornado',
        subtitle:"Just Don't Go Outside",
    }
}

export default function Weather ({temp, condition}){
    return  (
         <LinearGradient
            colors={weatherOption[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle='light-content'/>
            <View style = {styles.topHalfContainer}>
                <MaterialCommunityIcons size ={96} name = {weatherOption[condition].iconName} color='white'/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style = {{...styles.halfContainer,...styles.textContainer}}>
                <Text style={styles.title}>{weatherOption[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition : PropTypes.oneOf(['Thunderstorm','Drizzle','Rain','Snow','Atmosphere','Clear','Clouds','Mist','Smoke','Haze','Dust','Fog','Sand','Dust','Squall','Tornado']).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent : 'center',
        alignItems : 'flex-start',
    },
    topHalfContainer:{
        flex:1,
        alignSelf: 'center',
        justifyContent : "center",
        alignItems:'center'
    },
    halfContainer:{
        flex:1,
        justifyContent : "center",
        alignItems:'center'
    },
    temp:{
        fontSize : 42,
        color:'white'
    },
    title:{
        color:'white',
        fontSize : 44,
        fontWeight: "300",
        marginBottom:10
    },
    subtitle:{
        color:'white',
        fontWeight:"600",
        fontSize:24
    },
    textContainer:{
        paddingHorizontal : 30,
        alignItems:'flex-start',
    }
})