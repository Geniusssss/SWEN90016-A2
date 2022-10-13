import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage'
import WelcomePage from '../views/WelcomePage'
import RegisterPage from '../views/RegisterPage'
import AdminHome from "../views/AdminHome"
import HomePage from "../views/HomePage"
import AuthorizationRequest from "../components/AuthorizationRequest"
import EnglishDynamic from "../components/EnglishDynamic"
import EnglishStatic from "../components/EnglishStatic"
import EnglishStaticCRP from "../components/EnglishStaticCRP"
import EnglishStaticICK from "../components/EnglishStaticICK"
import FATSIL from "../components/FATSIL"
import IndigenousDL from "../components/IndigenousDL"
import TextSearching from "../components/TextSearching"
import UserGroup from "../components/UserGroup"
import AuthorizationAdmin from "../components/AuthorizationAdmin"
import AccessManagement from "../components/AccessManagement"
import HomeStartPage from "../components/HomeStartPage";

import Vue from 'vue'

Vue.use(VueRouter)

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
            path: '/welcome',
            component: WelcomePage
        },

        {
            path: '/home',
            name: 'HomePage',
            component: HomePage,
            children: [
                {
                    path: '/home/start',
                    name: 'start',
                    component: HomeStartPage,
                },
                {
                    path: '/home/request',
                    name: 'Request',
                    component: AuthorizationRequest,
                },
                {
                    path: '/home/englishstatic',
                    name: 'EnglishStatic',
                    component: EnglishStatic,
                },
                {
                    path: '/home/search',
                    name: 'TextSearching',
                    component: TextSearching,
                },
                {
                    path: '/home/englishdynamic',
                    name: 'EnglishDynamic',
                    component: EnglishDynamic,
                },
                {
                    path: '/home/englishstaticcrp',
                    name: 'EnglishStaticCRP',
                    component: EnglishStaticCRP,
                },
                {
                    path: '/home/englishstaticick',
                    name: 'EnglishStaticICK',
                    component: EnglishStaticICK,
                },
                {
                    path: '/home/fatsil',
                    name: 'FATSIL',
                    component: FATSIL,
                },
                {
                    path: '/home/indigenousdl',
                    name: 'IndigenousDL',
                    component: IndigenousDL,
                },
            ]
        },

        {
            path: '/admin-home',
            name: 'AdminHome',
            component: AdminHome,
            children:[
                {
                    path: '/admin-home/usergroup',
                    name: 'UserGroup',
                    component: UserGroup,
                },
                {
                    path: '/admin-home/authorizationadmin',
                    name: 'AuthorizationAdmin',
                    component: AuthorizationAdmin,
                },
                {
                    path: '/admin-home/accessmanagement',
                    name: 'AccessManagement',
                    component: AccessManagement,
                },
            ]
        },
    ]
})