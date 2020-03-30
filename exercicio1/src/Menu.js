import React from 'react';
import {createDrawerNavigator} from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import Inverter, {MegaSena} from './componentes/Multi';

export default createDrawerNavigator(
  {
    MegaSena: {
      screen: () => <MegaSena numeros={8} />,
      navigationOptions: {title: 'MegaSena'},
    },
    Inverter: {
      screen: () => <Inverter texto="react nativo !" />,
    },
    ParImpar: {
      screen: () => <ParImpar numero={30} />,
      navigationOptions: {title: 'Par Impar'},
    },
    Simples: {
      screen: () => <Simples texto="Simples" />,
    },
  },
  {drawerWidth: 300},
);
