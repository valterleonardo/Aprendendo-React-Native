import React, {Component} from 'react';
import {
    ImageBackground,
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
} from 'react-native';

import commonStyles from '../commonStyles';
import backgroudImage from '../../assets/imgs/login.jpg';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: true,
};

export default class Auth extends Component {
    state = {
        ...initialState,
    };

    render() {
        return (
            <ImageBackground source={backgroudImage} style={styles.backgroud}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew
                            ? 'Criei a sua conta'
                            : 'Informe seus dados'}
                    </Text>
                    {this.state.stageNew && (
                        <TextInput
                            placeholder="Seu nome"
                            value={this.state.name}
                            style={styles.input}
                            onChangeText={name => this.setState({name})}
                        />
                    )}
                    <TextInput
                        placeholder="Seu e-mail"
                        value={this.state.email}
                        style={styles.input}
                        onChangeText={email => this.setState({email})}
                    />
                    <TextInput
                        placeholder="Sua senha"
                        value={this.state.password}
                        style={styles.input}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                    />
                    {this.state.stageNew && (
                        <TextInput
                            placeholder="Confirme sua senha"
                            value={this.state.confirmPassword}
                            style={styles.input}
                            onChangeText={confirmPassword =>
                                this.setState({confirmPassword})
                            }
                            secureTextEntry={true}
                        />
                    )}
                    <TouchableOpacity>
                        <View
                            style={
                                this.state.stageNew
                                    ? styles.buttonNew
                                    : styles.button
                            }>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Cadastrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: commonStyles.fontfFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 30,
    },
    subtitle: {
        fontFamily: commonStyles.fontfFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    input: {
        margin: 5,
        backgroundColor: '#FFF',
        padding: Platform.OS === 'ios' ? 20 : 10,
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%',
    },
    button: {
        backgroundColor: '#080',
        margin: 5,
        marginTop: 15,
        padding: 10,
        alignItems: 'center',
    },
    buttonNew: {
        backgroundColor: '#03A',
        margin: 5,
        marginTop: 15,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: commonStyles.fontfFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
    },
});
