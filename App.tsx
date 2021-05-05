import React from 'react';
import { View, StyleSheet } from 'react-native';
import FirstScreen from './app/components/FirstScreen';
import Button from './app/shared/Button';

const App: React.FC = () => {
    return (
        <View style={styles.app}>
            <FirstScreen />
            <Button />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
