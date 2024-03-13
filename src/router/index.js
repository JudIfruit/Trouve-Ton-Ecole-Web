import { createRouter, createWebHistory } from 'vue-router';

import home from "@/pages/home.vue"
import Login from "@/pages/connexion/login"
import Register from "@/pages/connexion/register"
import documentation from "@/pages/documentation"
import ecole from "@/pages/ecole"
import membre from "@/pages/membre"

import dashboard from "@/pages/master/dashboard.vue"
import settings from "@/pages/master/settings.vue"
import download from "@/pages/master/download"
import message from "@/pages/master/message"
import profile from "@/pages/master/profile"

const routes = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: dashboard,
        children: [
            {
                name: 'profile',
                path: '/profile',
                component: profile
            },
            {
                name: 'download',
                path: '/download',
                component: download
            },
            {
                name: 'message',
                path: '/message',
                component: message
            }
        ]
    },
    {
        name: 'home',
        path: '/',
        component: home
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'settings',
        path: '/settings',
        component: settings
    },
    {
        name: 'documentation',
        path: '/documentation',
        component: documentation
    },
    {
        name: 'ecole',
        path: '/ecole',
        component: ecole
    },
    {
        name: 'membre',
        path: '/membre',
        component: membre
    }
];

const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
