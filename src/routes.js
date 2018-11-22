import OrderView from './components/OrderView.vue';
import Preview from './components/Preview.vue';
import Invoice from './components/Invoice.vue';

const routes = [
    {
        path: '/',
        component: OrderView
    }, 
    {
        path: '/Preview',
        component: Preview
    }, 
    {
        path: '/Invoice',
        component: Invoice
    }
]

export default routes;