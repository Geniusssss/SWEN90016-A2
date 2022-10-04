import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage'
import WelcomePage from '../views/WelcomePage'
import RegisterPage from '../views/RegisterPage'
import HomePage from "../views/HomePage"
import AdminLogin from "../views/AdminLogin"
import AdminHome from "../views/AdminHome"

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
            name: 'admin-login',
            path: '/admin-login',
            component: AdminLogin
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

        {
            name: 'home',
            path: '/home',
            component: HomePage
        },

        {
            name: 'admin-home',
            path: '/admin-home',
            component: AdminHome
        },
    ]
})