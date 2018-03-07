import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SRNPage } from '@souche-f2e/srn-framework';
class List extends SRNPage {
    static navigation = {
        title: '列表'
    }

    constructor (props) {
        super(props);
    }

    componentWillMount () {

    }

    render () {
        return (
          <View></View>
        )
    }

}

export default List
