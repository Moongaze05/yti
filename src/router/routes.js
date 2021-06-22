const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '/',
                component: () =>
                    import ('pages/Index.vue'),
            },
            {
                path: '/profile',
                component: () =>
                    import ('pages/Profile.vue'),
            },
            {
                path: '/materials',
                component: () =>
                    import ('pages/Materials.vue'),
            },
            {
                path: '/rating',
                component: () =>
                    import ('pages/Rating.vue'),
            },
        ]
    },


    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes