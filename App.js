import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/images/mainBgImage.jpg')}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Register</Text>
          <View style={styles.avatar}>
            <TouchableOpacity style={styles.addIconAvatar}>
              <Icon name="add-circle-outline" color="#FF6C00" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  text: {
    color: 'tomato',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  formContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 92,
    paddingBottom: 78,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  formTitle: {
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
  },

  avatar: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    width: 120,
    height: 120,
    transform: [{ translateY: -60 }],
  },

  addIconAvatar: {
    position: 'absolute',
    right: -14,
    bottom: 14,
  },
});
