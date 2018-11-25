import OrderView from './components/OrderView.vue';
import Custmomize from './components/Customize.vue';
import Preview from './components/Preview.vue';
import Invoice from './components/Invoice.vue';

const routes = [
    {
        path: '/',
        component: OrderView
    }, 
    {
        path: '/customize',
        component: Custmomize
    }, 
    {
        path: '/preview',
        component: Preview
    },
    {
        path: '/invoice',
        component: Invoice
    }
]

export default routes;