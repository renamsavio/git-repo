import React, {Component} from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';


import {Icon, Text, EmptyText, Wrapper, TopBar, Button} from '../../components/shared';
import {listRepositories, clear} from '../../actions';
import {Item} from '../../components/Repositories';

class RepoList extends Component {
  componentDidMount() {
    // this.props.listRepositories('renamsavio');
  }
  
  userOpen() {
    this.props.navigator.showLightBox({
        screen: 'SearchBox', // unique ID registered with Navigation.registerScreen
        style: {
          tapBackgroundToDismiss: true // dismisses LightBox on background taps (optional)
        }
      });
  }
  onClear() {
    this.props.clear()
  }

  render() {
    return (
      <Wrapper>
        <TopBar 
          leftComponent={
            <Text inverted>Lista de Repositórios</Text>
          }
          rightComponent={
            <Button onPress={() => this.userOpen()}>
              <Icon size={30} inverted name="ios-person-add"/>  
            </Button>
          }
        />
        {this.props.repository.repositories.length && 
          <ButtonClear warning onPress={() => this.onClear()}>
            <Text inverted>Limpar repisitorio</Text> 
          </ButtonClear>
        }
        
        <FlatList
          ListEmptyComponent={
            <EmptyText>Selecione um usuário no botão de cima, para listar os repositorios.</EmptyText>
          }
          data={this.props.repository.repositories}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (<Item data={item} />)}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    repository: state.repository  
  }
};

const mapDispatchToProps = {
  listRepositories,
  clear
};

export const Repositories = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList)
const WrapperRigth = styled.View``;

const ButtonClear = Button.extend`
  padding-right: 0;
  padding-left: 0;
  margin-horizontal: 0;
  border-radius: 0;
  
`;

