import React from 'react';
import styled from 'styled-components/native';
import {compose, pure, setPropTypes, withProps} from 'recompose';
import {isNumber} from 'lodash';

import {Text, StatusBar} from './index';


export const TopBar = ({leftComponent, rightComponent}) => (
  <MainWrapper>
    <StatusBar color="transparent" />
    <Wrapper>
      {leftComponent}
      {rightComponent}
    </Wrapper>
  </MainWrapper>
);

const MainWrapper = styled.View`z-index: 2;`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.bgSecondary};
  padding-left: 10;
  padding-right: 10;
  border-width: 1;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-color: ${props => props.theme.transparent};
  min-height: 53;
`;

const Image = styled.Image`
  resize-mode: contain;
  position: absolute;
  left: 50%;
  width: 110;
  height: 53;
  margin-left: -45;
`;
