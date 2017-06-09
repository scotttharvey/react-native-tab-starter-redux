import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Scene, Router, TabBar, Modal, Actions} from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from "./store";
import Home from "./Home";
import Page2 from "./Page2";
import Page3 from "./Page3";

class TabIcon extends React.Component {
  render(){
    return(
      <Text style={{backgroundColor:'olive', textAlign:'center', color: this.props.selected ? 'red' : 'black' }}>{this.props.title}</Text>
    )
  }
}


export default class App extends React.Component {

  render() {
    return (
<Provider store={store}>
  <Router >
    <Scene key='root'  >
        <Scene key='tabbar' tabs={true} style={{flex:1}}>


          <Scene  hideNavBar icon={TabIcon} key='Page2' component={Page2} title='Page2'
            />
          <Scene  hideNavBar icon={TabIcon} key='home' component={Home} title="Homiep" initial={true}
             onPress={Actions.Page2}
          />
          <Scene hideNavBar icon={TabIcon} key='Page3' component={Page3} title='Page3'  />

        </Scene>



    </Scene>

  </Router>


</Provider>






    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
