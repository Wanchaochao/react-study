export default {
  singular: false, // pages文件夹是复数形式
  plugins: [
    ['umi-plugin-react', {
      antd: true
    }],
  ],
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: 'HelloWorld'
      },
      {
        path: '/helloworld',
        component: 'HelloWorld'
      },
      {
        path: '/dashboard',
        routes: [
          {path: '/dashboard/analysis', component: 'Dashboard/Analysis'},
          {path: '/dashboard/monitor', component: 'Dashboard/Monitor'},
          {path: '/dashboard/workplace', component: 'Dashboard/Workplace'},
        ]
      }
    ]
  }]
}
