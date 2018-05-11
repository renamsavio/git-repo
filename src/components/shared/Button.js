import React from 'react';
import styled, {css} from 'styled-components/native';
import {isNumber} from 'lodash';
import {compose, withProps, pure} from 'recompose';
import {TouchableOpacity} from 'react-native';

const enhancedButton = (props) => <TouchableOpacity {...props} />;

export const Button = styled(enhancedButton)`
  background: ${props => props.background || 'rgba(0,0,0,0)'};
  border-radius: ${props =>
    isNumber(props.borderRadius)
      ? props.borderRadius
      : props.theme.borderRadius};
  align-items: center;
  justify-content: center;
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
  flex-direction: row;
  margin-horizontal: 10;

  ${props =>
    props.success &&
    css`
    background: ${props => props.theme.success};
  `}

  ${props =>
    props.danger &&
    css`
    background: ${props => props.theme.danger};
  `}

  ${props =>
    props.warning &&
    css`
    background: ${props => props.theme.warning};
  `}
  
  ${props => 
    props.icon && 
    css`
      padding-top: 0;
      padding-right: 0;
      padding-left: 0;
      padding-bottom: 0;
      margin-horizontal: 0;
    `
  }
`;
