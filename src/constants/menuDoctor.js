// import { UserRole } from 'helpers/authHelper';
import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'dashboard',
    icon: 'iconsminds-digital-drawing',
    label: 'menu.dashboard',
    to: `${adminRoot}/dashboard`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-home',
        label: 'menu.inicio',
        to: `${adminRoot}/doctor/inicio`,
      },
      {
        icon: 'iconsminds-male',
        label: 'menu.crear-paciente',
        to: `${adminRoot}/doctor/crear-paciente`,
      },
      {
        icon: 'iconsminds-newspaper',
        label: 'menu.casos',
        to: `${adminRoot}/doctor/casos`,
      },
      {
        icon: 'iconsminds-male',
        label: 'menu.pacientes',
        to: `${adminRoot}/doctor/pacientes`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.lorem',
        to: `${adminRoot}/doctor/lorem`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.ipsum',
        to: `${adminRoot}/doctor/ipsum`,
      },
    ],
  },
  {
    id: 'soporte',
    icon: 'iconsminds-support',
    label: 'menu.soporte',
    to: `${adminRoot}/soporte`,
    subs: [
      {
        icon: 'simple-icon-support',
        label: 'menu.centro-de-ayuda',
        to: `${adminRoot}/soporte/centro-de-ayuda`,
      },
    ],
  },
  {
    id: 'docs',
    icon: 'iconsminds-library',
    label: 'menu.docs',
    to: 'https://gogo-react-docs.coloredstrategies.com/',
    newWindow: true,
  },
  {
    id: 'login',
    icon: 'simple-icon-login',
    label: 'sample.login',
    to: `/user/login`,
  },
];
export default data;
