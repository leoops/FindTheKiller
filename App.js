import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Routes from './src/routes/Routes';

/**
 * @author Leonardo Pereira
 * @class App
 * @extends {Component}
 * @description Classe de inicialização de rotas do aplicativo
 */
class App extends Component {
  render = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    );
  };
}

export default App;
