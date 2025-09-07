import {FlatList, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
    const CURRENT_WEATHER = {
        location: 'Tampere',
        date: '07.09.2025',
        temperature: 17,
        condition: 'cloudy', // Ionicons: 'cloudy'
        highTemperature: 19,
        lowTemperature: 10,
        precipitationProbability: 20,
    };

    const HOUR_FORECAST_DATA = [
        {time: '06:00', temperature: 8, condition: 'cloudy', precipitationProbability: 10},
        {time: '08:00', temperature: 10, condition: 'partly-sunny', precipitationProbability: 5},
        {time: '10:00', temperature: 12, condition: 'partly-sunny', precipitationProbability: 5},
        {time: '12:00', temperature: 14, condition: 'sunny', precipitationProbability: 0},
        {time: '14:00', temperature: 14, condition: 'partly-sunny', precipitationProbability: 10},
        {time: '16:00', temperature: 13, condition: 'cloudy', precipitationProbability: 15},
        {time: '18:00', temperature: 11, condition: 'rainy', precipitationProbability: 40},
        {time: '20:00', temperature: 9, condition: 'rainy', precipitationProbability: 50},
        {time: '22:00', temperature: 8, condition: 'cloudy-night', precipitationProbability: 20},
        {time: '00:00', temperature: 7, condition: 'cloudy-night', precipitationProbability: 10},
        {time: '02:00', temperature: 7, condition: 'cloudy-night', precipitationProbability: 5},
        {time: '04:00', temperature: 6, condition: 'cloudy-night', precipitationProbability: 5},
    ];

    const WEEK_FORECAST_DATA = [
        {
            day: 'Monday',
            highTemperature: 15,
            lowTemperature: 7,
            condition: 'partly-sunny',
            precipitationProbability: 20
        },
        {day: 'Tuesday', highTemperature: 14, lowTemperature: 6, condition: 'rainy', precipitationProbability: 50},
        {day: 'Wednesday', highTemperature: 14, lowTemperature: 6, condition: 'cloudy', precipitationProbability: 30},
        {day: 'Thursday', highTemperature: 15, lowTemperature: 7, condition: 'sunny', precipitationProbability: 10},
        {day: 'Friday', highTemperature: 13, lowTemperature: 6, condition: 'rainy', precipitationProbability: 60},
        {
            day: 'Saturday',
            highTemperature: 14,
            lowTemperature: 6,
            condition: 'partly-sunny',
            precipitationProbability: 25
        },
        {day: 'Sunday', highTemperature: 15, lowTemperature: 7, condition: 'cloudy', precipitationProbability: 35},
    ];


    return (
        <LinearGradient
            colors={['#4e54c8', '#8f94fb']}
            style={{flex: 1}}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.search_bar_container}>
                    <Ionicons name='search' size={30} style={styles.search_icon}></Ionicons>
                    <TextInput
                        style={styles.search_bar}
                        placeholder='Search locations'
                        placeholderTextColor={TEXT_COLOR}
                    />

                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name='location-outline' size={45}
                              style={styles.location_icon}></Ionicons>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.location}>{CURRENT_WEATHER.location}</Text>
                        <Text style={styles.date_text}>{CURRENT_WEATHER.date}</Text>
                    </View>

                </View>

                <View
                    style={styles.current_conditions_parent_container}>
                    <View style={styles.current_conditions_container}>
                        <Text style={styles.temperature}>{CURRENT_WEATHER.temperature}°</Text>
                        <Text style={styles.conditions}>{CURRENT_WEATHER.condition}</Text>
                        <View style={styles.temperatures_container}>
                            <Text style={styles.conditions}>↑{CURRENT_WEATHER.highTemperature}°</Text>
                            <Text style={styles.conditions}>↓{CURRENT_WEATHER.lowTemperature}°</Text>
                        </View>
                        <View style={styles.hour_forecast_precipitation_container}>
                            <Ionicons name='umbrella' size={29} style={styles.icon_style}/>
                            <Text style={styles.body_text}>{CURRENT_WEATHER.precipitationProbability}%</Text>
                        </View>
                    </View>
                    <Ionicons name="cloudy" size={130} style={styles.icon_style}/>
                </View>
                <View style={{height: 175}}>
                    <FlatList keyExtractor={(item) => item.time} horizontal={true} contentContainerStyle={{gap: 20}} data={HOUR_FORECAST_DATA}
                              renderItem={({item}) => (
                                  <View style={styles.hour_forecast_container}>
                                      <Text style={styles.body_text}>{item.time}</Text>
                                      <Ionicons name={item.condition} size={40} style={styles.icon_style}/>
                                      <Text style={styles.body_text}>{item.temperature + '°'}</Text>
                                      <View style={styles.hour_forecast_precipitation_container}>
                                          <Ionicons name='umbrella' size={25} style={styles.icon_style}/>
                                          <Text style={styles.body_text}>{item.precipitationProbability}%</Text>
                                      </View>
                                  </View>
                              )}/>
                </View>

                <View style={{flex: 1}}>
                    <View style={styles.button_parent_container}>
                        <TouchableOpacity style={styles.button}>
                            <View style={styles.button_container}>
                                <Ionicons name='arrow-back' size={20} style={styles.icon_style}/>
                                <Text style={styles.button_text}>Yesterday</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <View style={styles.button_container}>
                                <Text style={styles.button_text}>Tomorrow</Text>
                                <Ionicons name='arrow-forward' size={20} style={styles.icon_style}/>
                            </View>

                        </TouchableOpacity>

                    </View>
                    <FlatList
                        data={WEEK_FORECAST_DATA}
                        keyExtractor={(item) => item.day}
                        renderItem={({item}) => (
                            <View style={styles.days_container}>
                                <Text style={styles.days_name}>{item.day}</Text>
                                <View style={styles.day_details_container}>
                                    <View style={styles.day_precipitation_container}>
                                        <Ionicons name='umbrella' size={29} style={styles.icon_style}/>
                                        <Text style={styles.body_text}>{item.precipitationProbability}%</Text>
                                    </View>
                                    <Ionicons name={item.condition} size={25} style={styles.icon_style}/>
                                    <Text style={styles.body_text}>↑{item.highTemperature}°</Text>
                                    <Text style={styles.body_text}>↓{item.lowTemperature}°</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>

            </SafeAreaView>
        </LinearGradient>


    );
}

const PAGE_PADDING = 20;
const BODY_TEXT_SIZE = 16;
const TEXT_COLOR = '#E0E0E0';
const ACCENT_COLOR = '#FFFFAA';
const BORDER_RADIUS = 20;
const ELEMENTS_BACKGROUND_COLOR = "rgba(42,44,99, 0.7)"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        paddingHorizontal: PAGE_PADDING,
    },
    search_bar_container: {
        marginTop: PAGE_PADDING,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    search_bar: {
        height: 45,
        textAlign: "center",
        color: TEXT_COLOR,
        flex: 2,
        backgroundColor: ELEMENTS_BACKGROUND_COLOR,
        borderRadius: BORDER_RADIUS,
        fontSize: BODY_TEXT_SIZE
    },
    location: {
        fontSize: 35,
        fontWeight: 'bold',
        color: TEXT_COLOR,
    },
    search_icon: {
        marginHorizontal: 10,
        color: TEXT_COLOR
    },
    location_icon: {
        marginHorizontal: 10,
        color: TEXT_COLOR
    },
    current_conditions_parent_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 40
    },
    current_conditions_container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },

    temperature: {
        fontSize: 60,
        fontWeight: 'bold',
        color: TEXT_COLOR,
    },
    conditions: {
        color: TEXT_COLOR,
        fontSize: BODY_TEXT_SIZE
    },
    temperatures_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body_text: {
        fontSize: BODY_TEXT_SIZE,
        color: TEXT_COLOR
    },
    hour_forecast_container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    hour_forecast_precipitation_container: {
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button_parent_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10
    },
    button: {
        backgroundColor: ELEMENTS_BACKGROUND_COLOR,
        fontSize: BODY_TEXT_SIZE,
        borderRadius: BORDER_RADIUS,
        width: '45%'
    },
    button_text: {
        fontSize: BODY_TEXT_SIZE,
        color: TEXT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    days_container: {
        flexDirection: "row",
        height: 60,
        backgroundColor: ELEMENTS_BACKGROUND_COLOR,
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        borderRadius: BORDER_RADIUS,
        paddingHorizontal: PAGE_PADDING,
    },
    days_name: {
        fontSize: BODY_TEXT_SIZE,
        fontWeight: 'bold',
        color: TEXT_COLOR,
        flex: 3
    },
    day_details_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    day_precipitation_container: {
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon_style: {
        color: TEXT_COLOR,
        marginVertical: 10
    },
    date_text: {
        color: ACCENT_COLOR,
        fontSize: BODY_TEXT_SIZE + 2,
        fontWeight: 'bold',
    },


});
