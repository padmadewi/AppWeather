import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      position: 'relative',
    },
    textStyle: {
      fontSize: 25,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Header;
