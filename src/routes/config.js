import {
  IoIosCube,
  IoIosAddCircle,
  IoIosBriefcase,
  IoIosCompass
} from 'react-icons/io';


import CreateSeller from '../pages/Seller/CreateSeller'
import ListSeller from '../pages/Seller/ListSeller';

import ListManager from '../pages/Manager/ListManager';

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
    icon: ListManager,
    exact: true,
    menu: true,
    component: ListSeller,
  },
  {
    title: "Adicionar localização",
    path: "/locales/create",
    icon: IoIosCompass,
    exact: true,
    menu: true,
    component: ListManager,
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
    title: "Customer",
    path: "/seller/adicionar",
    icon: IoIosAddCircle,
    exact: true,
    menu: true,
    component: CreateSeller,
  },
  {
    title: "Lista de vendedores",
    path: "/seller/lista",
    icon: IoIosCube,
    exact: true,
    menu: true,
    component: ListSeller,
  },
];