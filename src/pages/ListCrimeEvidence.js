import React, { Component } from 'react';
import { View, SectionList, Text, Image, TouchableOpacity } from 'react-native';

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
    <Text
      style={{
        backgroundColor: '#dd1a',
        paddingVertical: 8,
        marginHorizontal: 10,
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 20,
        borderWidth: 0.5,
        overflow: 'hidden',
      }}
    >
      {title}
    </Text>
  );

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flex: 1,
        marginVertical: 5,
        paddingLeft: 10,
        paddingVertical: 5,
        backgroundColor: '#0001',
      }}
    >
      <Text>{item}</Text>
      <Image />
    </TouchableOpacity>
  );

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
