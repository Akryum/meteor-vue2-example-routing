export default [
  {
    path: '/',
    name: 'home',
    component: '/imports/ui/Home.vue',
  },
  {
    path: '/page1',
    name: 'page1',
    component: '/imports/ui/Page1.vue',
    // Nested routes
    children: [
      {
        path: 'a',
        name: 'page1a',
        component: '/imports/ui/Page1A.vue',
      },
      {
        path: 'b',
        name: 'page1b',
        component: '/imports/ui/Page1B.vue',
      },
    ],
  },
  {
    path: '/page2',
    name: 'page2',
    component: '/imports/ui/Page2.vue',
  },
];
