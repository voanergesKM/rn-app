import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  AddImageButton,
  Button,
  ButtonText,
  CreateContainer,
  CreatePostText,
  DeleteButton,
  ImageWrapper,
  Input,
} from './CreatePost.styled';

const initialState = {
  image: '',
  title: '',
  location: '',
};

export const CreatePostsScreen = () => {
  const [data, setData] = useState(initialState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const isShowedKeyboard = () => {
    setIsKeyboardShown(true);
  };

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', hideKeyboard);

    return () => {
      Keyboard.removeAllListeners('keyboardDidHide', hideKeyboard);
    };
  }, []);

  return (
    // <View style={{ flex: 1 }}>
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <CreateContainer>
          <ImageWrapper>
            <AddImageButton style={{ borderRadius: 50 }}>
              <Icon name="camera" color="#BDBDBD" size={25} />
            </AddImageButton>
          </ImageWrapper>
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
              <CreatePostText style={{ marginBottom: 32 }}>Upload photo</CreatePostText>
              <Input
                placeholder="Title"
                style={{ marginBottom: 17 }}
                value={data.title}
                onChangeText={value => setData(prevState => ({ ...prevState, title: value }))}
                onFocus={isShowedKeyboard}
              />
              <View style={{ position: 'relative', marginBottom: 32 }}>
                <Input
                  style={{ paddingLeft: 28 }}
                  placeholder="Location"
                  value={data.location}
                  onChangeText={value => setData(prevState => ({ ...prevState, location: value }))}
                  onFocus={isShowedKeyboard}
                />
                <View style={{ position: 'absolute', top: '25%' }}>
                  <Icon name="location-outline" color="#BDBDBD" size={25} />
                </View>
              </View>
              <Button>
                <ButtonText>Publish</ButtonText>
              </Button>
            </View>
            <DeleteButton onPress={() => setData(initialState)}>
              <Icon name="trash-outline" color="#DADADA" size={20} />
            </DeleteButton>
          </View>
        </CreateContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    // </View>
  );
};
