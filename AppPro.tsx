/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    SafeAreaView,
} from 'react-native';

function AppPro(): JSX.Element {

    const isDarkMode = useColorScheme() === 'light';
    console.log("isDarkMode", isDarkMode)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={isDarkMode ? styles.darkText : styles.lightText}>Hello World!</Text>
                <Text style={isDarkMode ? styles.darkText : styles.lightText}>Hello World!</Text>
                <Text style={isDarkMode ? styles.darkText : styles.lightText}>Hello World!</Text>
                <Text style={isDarkMode ? styles.darkText : styles.lightText}>Hello World!</Text>
                <Text style={isDarkMode ? styles.darkText : styles.lightText}>Hello World!</Text>
            </View>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    lightText: {
        color: '#FFFFFF',
    },
    darkText: {
        color: '#000000',
    },
});

export default AppPro;
