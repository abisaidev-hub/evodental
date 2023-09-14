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
        to: `${adminRoot}/admin/inicio`,
      },
      {
        icon: 'iconsminds-newspaper',
        label: 'menu.crear-caso',
        to: `${adminRoot}/admin/crear-caso`,
      },
      {
        icon: 'iconsminds-male',
        label: 'menu.crear-paciente',
        to: `${adminRoot}/admin/crear-paciente`,
      },
      {
        icon: 'iconsminds-doctor',
        label: 'menu.crear-doctor',
        to: `${adminRoot}/admin/crear-doctor`,
      },
      {
        icon: 'iconsminds-newspaper',
        label: 'menu.casos',
        to: `${adminRoot}/admin/casos`,
      },
      {
        icon: 'iconsminds-male',
        label: 'menu.pacientes',
        to: `${adminRoot}/admin/pacientes`,
      },
      {
        icon: 'iconsminds-doctor',
        label: 'menu.doctores',
        to: `${adminRoot}/admin/doctores`,
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
];
export default data;
