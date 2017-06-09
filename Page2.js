import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { updateCount } from './actions/countActions';
import { connect } from 'react-redux';

class Page2 extends React.Component {
  dragon = () => {
    this.props.updateCount({
      count: this.props.count + 1,

    })
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.dragon}>
        <View >
          <Text>Page 2 {this.props.count}</Text>
        </View>
      </TouchableWithoutFeedback>

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
  export default connect(mapStateToProps, mapDispatchToActionCreators)(Page2);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
