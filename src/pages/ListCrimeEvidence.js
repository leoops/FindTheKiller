import React, { Component } from 'react';
import { View, SectionList, Text } from 'react-native';
import ItemList from '../components/ItemList';
import styles from './ListCrimeEvidence.style';

/**
 * @author Leonardo Pereira
 * @description Tela de listagem de cartas do jogo
 * @class ListCrimeEvidence
 * @extends Component
 */
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

  /**
   * @memberof ListCrimeEvidence
   * @instance
   * @method renderSectionHeader - Metodo de renderização de titilo da lista.
   * @param {func} callback - Callback
   */
  renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  /**
   * @memberof ListCrimeEvidence
   * @instance
   * @method renderItem - Método de rendericação de item de lista.
   * @param {func} callback - Callback
   */
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

ListCrimeEvidence.navigationOptions = {
  header: null,
};
