Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/', {name: 'today'});

Router.route('/thisWeek', {name: 'thisWeek'});

Router.route('/coolLinks', {name: 'coolLinks'});

Router.route('/textSnippets', {name: 'textSnippets'});

Router.route('/music', {name: 'music'});

Router.route('/chat', {name: 'chat'});

Router.route('/photos', {name: 'photos'});



