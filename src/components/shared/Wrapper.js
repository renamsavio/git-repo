import React from 'react';
import {
  View
} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Wrapper = styled(View).attrs({
  showsVerticalScrollIndicator: props =>
    props.showsVerticalScrollIndicator || false,
  behavior: props => props.behavior || 'padding'
})`
  flex: 1;
  background: ${props => props.theme.bg};
  ${props =>
    props.secondary &&
    css`
    background: ${props => props.theme.bgSecondary};
  `};
`;
