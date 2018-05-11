import {Navigation} from 'react-native-navigation';
import {Repositories, SearchBox} from '../Repositories';
export const registeredScreens = [];

export const registerScreens = (store, Provider) => {  
  
  registerComponent('Repositories', Repositories);
  registerComponent('SearchBox', SearchBox);
  
  function registerComponent(name, screen) {
  	Navigation.registerComponent(
      name,
      () => screen,
	   store,
	   Provider
    );
    registeredScreens.push(name);
  }
};