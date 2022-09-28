import 'reflect-metadata';

import React, { useEffect } from 'react';
import { StatusBar, LogBox } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import Navigation from '../configuration/navigation/navigation';
import Theme from '../configuration/metrics/theme';
import { store, persistor } from '../configuration/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

LogBox.ignoreAllLogs();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Theme.color.COLOR_PRIMARY,
        secondary: Theme.color.COLOR_SECONDARY
    }
};

const App: React.FC = () => {
    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PaperProvider theme={theme}>
                    <Navigation />
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
