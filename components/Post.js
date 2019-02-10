import React from 'react';
import {Text} from "react-native";
import {Card} from "react-native-elements";

export default ({id, title, text}) => {
  return (
    <Card
      title={title}>
      <Text style={{marginBottom: 10}}>
        {text}
      </Text>
    </Card>
  );
};
