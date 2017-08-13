import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class EmployeeList extends Component {
  render() {
    return(
      <View>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { };
};

export default connect(mapStateToProps, { })(EmployeeList);