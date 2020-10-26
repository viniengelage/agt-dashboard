import { IoIosCube, IoIosAddCircle } from 'react-icons/io';
import CreateSeller from '../pages/CreateSeller'
import ListSeller from '../pages/ListSeller/Index';

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

export const CustomerRoutes = [
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