import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { updateCount } from './actions/countActions';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';


class Home extends React.Component {
  dragon = () => {
    this.props.updateCount({
      count: this.props.count + 1,

    })
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.dragon} >
        <View>
          <Text>Home Page {this.props.count}</Text>
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Text onPress={Actions.Page2}>Change me </Text>
      </View>


      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.test.count
  }
}

  const mapDispatchToActionCreators = {
    updateCount: updateCount
  }
  export default connect(mapStateToProps, mapDispatchToActionCreators)(Home);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
