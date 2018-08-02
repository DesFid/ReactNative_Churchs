import {
    createBottomTabNavigator
} from 'react-navigation';
import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React, {Component} from 'react';
import Routes from './config/routes';
import getStore from './store'
const AppNavigator = createBottomTabNavigator(Routes,
    {
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            activeBackgroundColor: '#3393FF',
            inactiveTintColor: '#D2D2D2',
            inactiveBackgroundColor: '#1A86FE',
            labelStyle: {
                fontSize: 16,
                paddingVertical: 10 
            }
        }
    });

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state)
    return newState || state
}

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
    state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = getStore(navReducer);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

