'use strict';

module.exports = {
    client: {
      lib: {
          css :[],
          js: [],
          tests: []
      },
        less: [],
        js: [
            'modules/core/client/app/config.js',
            'modules/core/client/app/init.js'
        ],
        views: [],
        templates: [],
        statics:['public','dist/core/server/views','.'],
        index:['modules/core/server/views/index.html'],
    },
    server:{},
    common: {
        path:{
            server:{
                views: 'modules/core/server/views/*.*'
            },
            client:{
                dest:'dist'
            }
        }
    }
}
