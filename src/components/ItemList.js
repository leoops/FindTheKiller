import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Exclude from '../assets/img/multiply.png';

/**
 * @author Leonardo Pereira
 * @description Componente de renderização de itens de lista
 * @class ItemList
 * @extends Component
 */
export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  /**
   * @memberof ItemList
   * @instance
   * @method selectItem - Metodo de seleção de item.
   * @param {func} callback - Callback
   */
  selectItem = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { checked } = this.state;
    const { data } = this.props;
    return (
      <TouchableOpacity style={styles.itemList} onPress={this.selectItem}>
        <Text style={[styles.textItem, checked ? styles.discartStyle : null]}>
          {data}
        </Text>
        {checked && <Image source={Exclude} style={styles.icon} />}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  discartStyle: { textDecorationLine: 'line-through' },
  textItem: { flex: 1, fontSize: 16, paddingVertical: 5 },
  itemList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#0001',
  },
  icon: {
    height: 24,
    width: 24,
  },
});
