import { IoIosCloudOutline, IoIosAddCircleOutline } from 'react-icons/io';
import CreateSeller from '../pages/CreateSeller'

export const SellersRoutes = [
  {
    title: "Adicionar vendedor",
    path: "/seller/adicionar",
    icon: IoIosAddCircleOutline,
    exact: true,
    menu: true,
    component: CreateSeller,
  },
  {
    title: "Pedidos",
    path: "/admin/pedidos",
    icon: IoIosCloudOutline,
    exact: true,
    menu: true,
    component: CreateSeller,
  },
];