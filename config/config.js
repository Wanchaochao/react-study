export default {
  singular: false, // pages文件夹是复数形式
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true
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
      },
      { path: 'puzzlecards', component: './puzzlecards' },
      { path: 'list', component: './list' },

    ]
  }],
  proxy: {
    '/dev': {
      target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
    },
    '/example': {
      target: 'https://easymock.verystar.net/mock/5c185ca41bdca40022797054',
      changeOrigin: true
    }
  },
}
