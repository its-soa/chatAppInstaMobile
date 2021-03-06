import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";


import { connect } from "react-redux";
import {
  AppIcon,
  AppStyles,
} from "../AppStyles";
import IconMenu from 'react-native-vector-icons/Feather';
import { Configuration } from "../Configuration";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: () => {
      return ( 
        <View>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
             <IconMenu name='menu' style={styles.icon} />

          {/* {navigation.state.params && navigation.state.params.menuIcon ? (
            <FastImage
              style={styles.userPhoto}
              resizeMode={FastImage.resizeMode.cover}
              source={{ uri: navigation.state.params.menuIcon }}
            />
          ) : (
            <FastImage
              style={styles.userPhoto}
              resizeMode={FastImage.resizeMode.cover}
              source={AppIcon.images.defaultUser}
            />
          )} */}
        </TouchableOpacity>
        </View>
      );
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  // componentDidMount() {
  //   this.props.navigation.setParams({
  //     menuIcon: this.props.user.profileURL
  //   });
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Welcome {this.props.user.email}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: Configuration.home.listing_item.offset
  },
  title: {
    fontFamily: AppStyles.fontName.bold,
    fontWeight: "bold",
    color: AppStyles.color.title,
    fontSize: 25
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5
  },
  icon: {
    borderRadius: 20,
    marginLeft: 10,
    color: '#000',
    fontSize: 23,
  }
});

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(HomeScreen);
