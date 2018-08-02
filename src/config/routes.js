import {
    StackNavigator
} from 'react-navigation';
import App from '../../App';
import Details from '../components/Church/Details';
import MyMap from '../components/MyMap/MyMap';

const IndexApp = StackNavigator({
    Home: {
        screen: App
    },
    Details: {screen: Details}
},{
    headerMode: 'screen'
})

var Routes = {
    Churchs: {screen: IndexApp},
    Map: {screen: MyMap}
}

export default Routes