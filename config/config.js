export default {
  singular: false, // pages文件夹是复数形式
  plugins: [
    ['umi-plugin-react', {
      antd: true
    }],
  ],
  routes: [{
    path: '/',
    component: './HelloWorld',
  }]
}
