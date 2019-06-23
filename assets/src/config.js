import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import FaceIcon from '@material-ui/icons/Face';

import themes from './themes';

export const configuredTheme = themes[0].theme;

export const configuredLayout = {
  // front = réel OU classic = dev menu || non enfait on gére ça dans les route
  currentLayout: 'front',
  notificationsOpen: false
};

const iconStyle = {
  fontSize: 16
};
//BuildIcon
export const menuItems = [

  {
    title: 'Mon Compte',
    href: '/professeur/compte',
    icon: <DashboardIcon style={iconStyle} />
  },
  {
    title: 'Mes classes',
    href: '/professeur/classes',
    icon: <DesktopWindowsIcon style={iconStyle} />
  }, 
  {
      title: 'Mes Exercices',
      href: '/ecole',
      icon: <ShoppingCartIcon style={iconStyle} />
  },
  {
      title: 'Mes Eleves',
      href: '/apps/contacts',
      icon: <FaceIcon style={iconStyle} />
  },

/*
{
  title: 'Template',
  type: 'header'
},{
  title: 'Theming',
  href: '/theming',
  icon: <DesktopWindowsIcon style={iconStyle} />
}, {
  title: 'Autres / Vues',
  icon: <DesktopWindowsIcon style={iconStyle} />,
  children: [{
    title: 'Email',
    href: '/apps/email',
    icon: <EmailIcon style={iconStyle} />
  }, {
    title: 'Todo',
    href: '/apps/todo',
    icon: <CheckCircleIcon style={iconStyle} />
  }, {
    title: 'Maps',
    href: '/apps/maps',
    icon: <PinDropIcon style={iconStyle} />
  }, {
    title: 'Calendar',
    href: '/apps/calendar',
    icon: <DateRangeIcon style={iconStyle} />
  }, {
    title: 'Notes',
    href: '/apps/notes',
    icon: <EventNoteIcon style={iconStyle} />
  }, {
    title: 'Contacts',
    href: '/apps/contacts',
    icon: <FaceIcon style={iconStyle} />
  }, {
    title: 'Chat',
    href: '/apps/chat',
    icon: <ChatIcon style={iconStyle} />
  }, {
      title: 'Exercice',
      href: '/exercice',
      icon: <TextFormatIcon style={iconStyle} />
  },

    {
    title: 'Ecommerce',
    href: '/dashboards/ecommerce',
    icon: <ShoppingCartIcon style={iconStyle} />
  }, {
    title: 'Crypto',
    href: '/dashboards/crypto',
    icon: <EuroSymbolIcon style={iconStyle} />
  }, {
    title: 'Project',
    href: '/dashboards/project',
    icon: <EventNoteIcon style={iconStyle} />
  }, {
    title: 'Analytics',
    href: '/dashboards/analytics',
    icon: <EventNoteIcon style={iconStyle} />
  }]
}, {
  title: 'USER INTERFACE',
  type: 'header'
}, {
  title: 'Typography',
  href: '/pages/typography',
  icon: <TextFormatIcon style={iconStyle} />
}, {
  title: 'Colors',
  href: '/pages/colors',
  icon: <PaletteIcon style={iconStyle} />
}, {
  title: 'ELEMENTS',
  type: 'header'
}, {
  title: 'Form Controls',
  icon: <ExtensionIcon style={iconStyle} />,
  children: [{
    title: 'Autocomplete',
    href: '/elements/autocomplete'
  }, {
    title: 'Selection Controls',
    href: '/elements/selection-controls'
  }, {
    title: 'Picker',
    href: '/elements/picker'
  }, {
    title: 'Text Fields',
    href: '/elements/text-fields'
  }, {
    title: 'Selects',
    href: '/elements/selects'
  }]
}, {
  title: 'Navigation',
  icon: <MenuIcon style={iconStyle} />,
  children: [{
    title: 'App Bar',
    href: '/elements/app-bar'
  }, {
    title: 'Menu',
    href: '/elements/menu'
  }]
}, {
  title: 'Layout',
  icon: <ViewModuleIcon style={iconStyle} />,
  children: [{
    title: 'List',
    href: '/elements/list'
  }, {
    title: 'Cards',
    href: '/elements/cards'
  }, {
    title: 'Paper',
    href: '/elements/paper'
  }, {
    title: 'Avatars',
    href: '/elements/avatars'
  }, {
    title: 'Steppers',
    href: '/elements/steppers'
  }]
}, {
  title: 'Buttons & Indicators',
  icon: <InfoIcon style={iconStyle} />,
  children: [{
    title: 'Buttons',
    href: '/elements/buttons'
  }, {
    title: 'Progress',
    href: '/elements/progress'
  }]
}, {
  title: 'PAGES',
  type: 'header'
}, {
  title: 'Authentication',
  icon: <PersonIcon style={iconStyle} />,
  children: [{
    title: 'Login',
    href: '/login'
  }, {
    title: 'Register',
    href: '/register'
  }, {
    title: 'Forgot Password',
    href: '/forgot-password'
  }, {
    title: 'Profile',
    href: '/profile'
  }, {
    title: 'Lock Screen',
    href: '/lock'
  }]
}, {
  title: 'Errors',
  icon: <InfoIcon style={iconStyle} />,
  children: [{
    title: '404',
    href: '/errors/404'
  }, {
    title: '500',
    href: '/errors/500'
  }]
}
*/
/*
*/
];
