import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

router.beforeEach(function (to, from, next){


            console.info(to.path);
            if (to.path === '/') {
            	// alert("to:"+to.path+" from:"+from.path + " next:"+next.path);
              // next({ path: '/login' });
              next();
            } else if(to.path == '/dashboard'){
                next();
            } else if(to.path == '/401'){
            	// alert("to:"+to.path+" from:"+from.path + " next:"+next.path);
                next();
            } else if(to.path == '/404'){
            	// alert("to:"+to.path+" from:"+from.path + " next:"+next.path);
                next(); 
            } else{
            	next({path: '/404'}); 
            }


        
        // if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入

        //     next()
        // } else {
        //     alert(to.path);
        //     next('/login'); // 否则全部重定向到登录页
        //     NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        // }
       
});


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
