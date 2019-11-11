import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-elements';
import { connect } from 'react-redux'
import {rateMenu} from '../../state/actions/ratingActions'


  const RatingWrapper = ({ rateMenu }) => {

    return (
      <View style={styles.rating}>
        <Text>Your Rating: </Text>
        <AirbnbRating
        count={5}
        showRating={false}
        onFinishRating={rateMenu}
        defaultRating={0}
        size={15}
        />
      </View>
    );
  };


  const mapDispatchToProps = {
    rateMenu
   };

export default connect(null, mapDispatchToProps)(RatingWrapper)

const styles = StyleSheet.create({
    rating:{
        display:"flex",
        justifyContent:"center",
        textAlign: "center",
      }
});