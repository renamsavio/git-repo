import React from 'react';
import styled, {css} from 'styled-components/native';
import {FlatList as NativeFlatList} from 'react-native';

const FlatListCore = (props) => (
  <NativeFlatList
    {...props}
  />
);

export const FlatList = styled(FlatListCore)`
  flex: 1;
  background: ${props => props.theme.bg};
  ${props =>
    props.secondary &&
    css`
    background: ${props => props.theme.bgSecondary};
  `};
`;
