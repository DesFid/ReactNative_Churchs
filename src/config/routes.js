import {
    createStackNavigator
} from 'react-navigation';
import App from '../../App';
import Details from '../components/Church/Details';
import MyMap from '../components/MyMap/MyMap';
import Services from '../components/Church/Services';

const IndexApp = createStackNavigator({
    Home: {screen: App},
    Details: {screen: Details},
    Services: {screen: Services},
},{
    headerMode: 'screen'
})

var Routes = {
    Churchs: {screen: IndexApp},
    Map: {screen: MyMap}
}

export default Routes