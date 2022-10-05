import getComp from 'setjs/template/component.js';
// import todo from 'app/site/examples/todo.js';

export default {
  templates: ['site/home'],
  comp: function() {
    var pageComp = getComp('site/home');
    return pageComp;
  }
};
