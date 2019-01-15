import React, { Component } from 'react';
import {
  View,
  SectionList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ItemList from '../components/ItemList';

export default class ListCrimeEvidence extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
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
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  renderItem = ({ item }) => {
    return <ItemList data={item} />;
  };

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
const styles = StyleSheet.create({
  sectionTitle: {
    backgroundColor: '#dd1a',
    paddingVertical: 8,
    marginHorizontal: 10,
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
    borderRadius: 20,
    borderWidth: 0.5,
    overflow: 'hidden',
  },
});
ListCrimeEvidence.navigationOptions = {
  header: null,
};
