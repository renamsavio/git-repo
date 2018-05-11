import React, {Component} from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';


import {Icon, Text, EmptyText, TopBar, Button, TextInput} from '../../components/shared';
import {listRepositories} from '../../actions';
import {Item} from '../../components/Repositories';

class Search extends Component {
  componentDidMount() {
    this.state = {text: ''}; 
  }

  onCancel() {
    this.props.navigator.dismissLightBox();
  }

  searchUser() {
    this.props.listRepositories(this.state.text);
    this.onCancel();
  }
  render() {
    return (
      <Wrapper>
        <Text>Digite o nome do usuário:</Text>
        <TextInput 
          onChangeText={(text) => this.setState({text})}
        />
        <WrapperGroup>
          <Button danger onPress={() => this.onCancel()}>
            <Text inverted>Cancelar</Text>
          </Button>
          <Button success onPress={() => this.searchUser()}>
            <Text inverted>Adcionar</Text>
          </Button>
        </WrapperGroup>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    repository: state.repository  
  }
};

const mapDispatchToProps = {
  listRepositories
};

export const SearchBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

const Wrapper = styled.View`
  background-color: #fff;
    width: 300;
    padding-vertical: 10;
    padding-horizontal: 10;
`;

const WrapperGroup = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-vertical: 10;
`;