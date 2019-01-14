import React, { Component } from 'react';
import { View, SectionList, Text } from 'react-native';

export default class ListCrimeEvidence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.evidenceList = [
      {
        title: 'Suspeitos',
        data: [
          'Coronel Mustard',
          'Sra. White',
          'Miss Scarlett',
          'Mrs. Peacock',
          'Reverendo Green',
          'Professor Plum',
        ],
      },
      {
        title: 'Armas',
        data: [
          'Candelabro',
          'Faca',
          'Revolver',
          'Corda',
          'Cano',
          'Chave Inglesa',
        ],
      },
      {
        title: 'Lugares',
        data: [
          'Biblioteca',
          'Cozinha',
          'Hall',
          'Escritório',
          'Sala de estar',
          'Sala de jantar',
          'Sala de música',
          'Salão de festas',
          'Salão de jogos',
        ],
      },
    ];
  }

  renderSectionHeader = ({ section: { title } }) => (
    <Text style={{ backgroundColor: '#0003' }}>{title}</Text>
  );

  renderItem = ({ item }) => <Text>{item}</Text>;

  keyExtractor = (item, index) => `${item.title}${index}`;
  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          sections={this.evidenceList}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  };
}

ListCrimeEvidence.navigationOptions = {
  header: null,
};
