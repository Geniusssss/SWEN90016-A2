import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage'
import WelcomePage from '../views/WelcomePage'
import RegisterPage from '../views/RegisterPage'
import HomePage from "../views/HomePage"

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

        {
            name: 'home',
            path: '/home',
            component: HomePage
        },
    ]
})