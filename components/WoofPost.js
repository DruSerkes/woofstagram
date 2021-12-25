import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Title } from './Title';

export const WoofPost = ({ uri, title, description }) => (
  <View style={woofPostStyles.layout}>
    <Image source={uri} style={woofPostStyles.image} />
    <View style={woofPostStyles.content}>
      <Title>{title}</Title>
      <Text
        numberOfLines={2}
        elipsizeMode='tail'
        style={woofPostStyles.description}
      >
        {description}
      </Text>
    </View>
  </View>
);

const woofPostStyles = StyleSheet.create({
  layout: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5
  },
  image: {
    borderRadius: 10,
    flex: 1,
    height: 75,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex: 2,
    paddingHorizontal: 5,
    height: '100%'
  },
  title: {
    marginBottom: 3
  },
  description: {},
});