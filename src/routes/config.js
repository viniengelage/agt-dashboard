import {
  IoIosCube,
  IoIosAddCircle,
  IoIosBriefcase,
  IoIosCompass,
  IoIosListBox,
  IoIosCart
} from 'react-icons/io';


import CreateSeller from '../pages/Seller/CreateSeller'
import ListSeller from '../pages/Seller/ListSeller';

import ListManager from '../pages/Manager/ListManager';

import CreateLocale from '../pages/Admin/CreateLocale'

export const AdminRoutes = [
  {
    title: "Adicionar manager",
    path: "/managers/create",
    icon: IoIosBriefcase,
    exact: true,
    menu: true,
    component: ListSeller,
  },
  {
    title: "Lista de managers",
    path: "/managers/index",
    icon: IoIosListBox,
    exact: true,
    menu: true,
    component: ListManager,
  },
  {
    title: "Adicionar localização",
    path: "/locales/create",
    icon: IoIosCompass,
    exact: true,
    menu: true,
    component: CreateLocale,
  },
];

export const SellersRoutes = [
  {
    title: "Adicionar vendedor",
    path: "/seller/adicionar",
    icon: IoIosAddCircle,
    exact: true,
    menu: true,
    component: CreateSeller,
  },
  {
    title: "Pedidos",
    path: "/admin/pedidos",
    icon: IoIosCube,
    exact: true,
    menu: true,
    component: CreateSeller,
  },
];

export const ManagerRoutes = [
  {
    title: "Adicionar vendedor",
    path: "/seller/create",
    icon: IoIosCart,
    exact: true,
    menu: true,
    component: CreateSeller,
  },
  {
    title: "Lista de vendedores",
    path: "/seller/index",
    icon: IoIosListBox,
    exact: true,
    menu: true,
    component: ListSeller,
  },
];