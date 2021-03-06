import React from 'react';
import styled, {css} from 'styled-components/native';
import {default as NativeIcon} from 'react-native-vector-icons/Ionicons';
import {compose, setPropTypes, withProps} from 'recompose';
import {string} from 'prop-types';
import {Platform} from 'react-native';

const IconProps = (props) => {
  return <NativeIcon {...props} />
};


export const Icon = styled(IconProps).attrs({
  size: props => props.size || 25,
  color: props => props.color || props.theme.text
})`
  color: ${props => props.color};

  ${props =>
    props.success &&
    css`
    color: ${props => props.theme.success};
  `}

  ${props =>
    props.inverted &&
    css`
    color: ${props => props.theme.textInverted};
  `}

  ${props =>
    props.danger &&
    css`
    color: ${props => props.theme.danger};
  `}

  ${props =>
    props.warning &&
    css`
    color: ${props => props.theme.warning};
  `}

  ${props =>
    props.secondary &&
    css`
    color: ${props => props.theme.textSecondary};
  `}
`;
