import { adminRoot } from './defaultValues';
// import { UserRole } from "helpers/authHelper"

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
        to: `${adminRoot}/dashboard/inicio`,
      },
      {
        icon: 'iconsminds-newspaper',
        label: 'menu.crear-caso',
        to: `${adminRoot}/dashboard/crear-caso`,
      },
      {
        icon: 'iconsminds-male',
        label: 'menu.crear-paciente',
        to: `${adminRoot}/dashboard/crear-paciente`,
      },
      {
        icon: 'iconsminds-doctor',
        label: 'menu.crear-ortodoncista',
        to: `${adminRoot}/dashboard/crear-ortodoncista`,
      },
      {
        icon: 'iconsminds-newspaper',
        label: 'menu.casos',
        to: `${adminRoot}/dashboard/casos`,
      },
      {
        icon: 'iconsminds-male',
        label: 'menu.pacientes',
        to: `${adminRoot}/dashboard/pacientes`,
      },
      {
        icon: 'iconsminds-doctor',
        label: 'menu.ortodoncistas',
        to: `${adminRoot}/dashboard/ortodoncistas`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.lorem',
        to: `${adminRoot}/dashboard/lorem`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.ipsum',
        to: `${adminRoot}/dashboard/ipsum`,
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
];
export default data;
