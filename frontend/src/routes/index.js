import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import StudentsCreate  from '../components/Students/Create';
import StudentsList from '../components/Students/List';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/student/create',
    name: 'Create a new student',
    component: StudentsCreate
  },
  {
    path: '/student/list',
    name: 'List all students',
    component: StudentsList
  }
];

const router = new VueRouter({
  routes
});

export default router;