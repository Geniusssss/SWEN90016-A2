import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage'
import WelcomePage from '../views/WelcomePage'
import RegisterPage from '../views/RegisterPage'

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/welcome'
        },

        {
            path: '/login',
            component: LoginPage
        },
        
        {
            path: '/register',
            component: RegisterPage
        },

        {
            name: 'welcome',
            path: '/welcome',
            component: WelcomePage
        },
    ]
})