import React, {Component} from 'react';
import {
    ImageBackground,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import commonStyles from '../commonStyles';
import backgroudImage from '../../assets/imgs/login.jpg';
import AuthInput from '../components/AuthInput';

import {server, showError, showSuccess} from '../common';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false,
};

export default class Auth extends Component {
    state = {
        ...initialState,
    };

    signinOrSignup = () => {
        if (this.state.stageNew) {
            this.signup();
        } else {
            this.signin();
        }
    };

    signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
            });

            showSuccess('Usuário cadastro com sucesso!');
            this.setState({...initialState});
        } catch (e) {
            showError(e);
        }
    };

    signin = async () => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password,
            });

            // eslint-disable-next-line dot-notation
            axios.defaults.headers.common['Authorization'] = `bearer ${
                res.data.token
            }`;
            this.props.navigation.navigate('Home');
        } catch (e) {
            showError(e);
        }
    };

    render() {
        const validations = [];
        validations.push(this.state.email && this.state.email.includes('@'));
        validations.push(
            this.state.password && this.state.password.trim().length >= 6,
        );
        if (this.state.stageNew) {
            validations.push(
                this.state.password === this.state.confirmPassword,
            );
            validations.push(
                this.state.name && this.state.name.trim().length >= 2,
            );
        }

        const validForm = validations.reduce((t, a) => t && a);

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
                        <AuthInput
                            icon="user"
                            placeholder="Seu nome"
                            value={this.state.name}
                            style={styles.input}
                            onChangeText={name => this.setState({name})}
                        />
                    )}
                    <AuthInput
                        icon="at"
                        placeholder="Seu e-mail"
                        value={this.state.email}
                        style={styles.input}
                        onChangeText={email => this.setState({email})}
                    />
                    <AuthInput
                        icon="lock"
                        placeholder="Sua senha"
                        value={this.state.password}
                        style={styles.input}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                    />
                    {this.state.stageNew && (
                        <AuthInput
                            icon="asterisk"
                            placeholder="Confirme sua senha"
                            value={this.state.confirmPassword}
                            style={styles.input}
                            onChangeText={confirmPassword =>
                                this.setState({confirmPassword})
                            }
                            secureTextEntry={true}
                        />
                    )}
                    <TouchableOpacity
                        onPress={this.signinOrSignup}
                        disabled={!validForm}>
                        <View
                            style={[
                                this.state.stageNew
                                    ? [styles.buttonNew]
                                    : styles.button,
                                !validForm ? styles.buttonDisabled : {},
                            ]}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Cadastrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.alternative}
                    onPress={() =>
                        this.setState({
                            stageNew: !this.state.stageNew,
                            name: '',
                            password: '',
                            confirmPassword: '',
                        })
                    }>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew
                            ? 'Já possui conta?'
                            : 'Ainda não possui conta?'}
                    </Text>
                </TouchableOpacity>
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
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: commonStyles.fontfFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    input: {
        marginTop: 5,
        backgroundColor: '#FFF',
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%',
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 3,
    },
    buttonNew: {
        backgroundColor: '#03A',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 3,
    },
    buttonDisabled: {
        backgroundColor: '#777',
    },
    buttonText: {
        fontFamily: commonStyles.fontfFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
    },
    alternative: {
        padding: 10,
    },
});
