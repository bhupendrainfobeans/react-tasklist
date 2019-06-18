import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const TaskForm = React.lazy(()=> import('./views/TaskForm/TaskForm'));
const MyTaskList = React.lazy(()=> import('./views/TaskForm/MyTaskList'));
const TaskListReport = React.lazy(()=> import('./views/TaskForm/TaskListReport'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/task/taskform', exact: true, name: 'Submit Task detail', component: TaskForm },
  { path: '/task/mytasklist', exact: true, name: 'My Task List', component: MyTaskList },
  { path: '/task/report', exact: true, name: 'Tasks Report', component: TaskListReport }
  
];

export default routes;
