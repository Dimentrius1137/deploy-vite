export default {
    base:"/deploy-vite/",
    build: {
      rollupOptions: {
         input: {
            main: 'index.html',
            search: 'search.html',
            title: 'page.html'
         },
      },
   },
  }