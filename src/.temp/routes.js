const c1 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\Users\\seoji\\Documents\\MEGAsync\\programingfiles\\GridSome-Blog\\src\\templates\\Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-translate-page-vue" */ "C:\\Users\\seoji\\Documents\\MEGAsync\\programingfiles\\GridSome-Blog\\src\\templates\\TranslatePage.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\seoji\\Documents\\MEGAsync\\programingfiles\\GridSome-Blog\\node_modules\\gridsome\\app\\pages\\404.vue")
const c4 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\seoji\\Documents\\MEGAsync\\programingfiles\\GridSome-Blog\\src\\templates\\Post.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\seoji\\Documents\\MEGAsync\\programingfiles\\GridSome-Blog\\src\\pages\\Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/comparison/:title/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    path: "/:title/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
