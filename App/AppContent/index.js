// @flow

import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

import Counter from './Counter'

import styles from  './styles'

type Props = {
    setBackgroundOpaque: () => void
}

class AppContent extends Component<Props> {
    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.instructions}>
                    AppContent
                </Text>
                <Counter />
                <TextInput />
            </View>
        )
    }
}

export default AppContent
