const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    prefer_related_applications: true,
    manifestOptions: {
      share_target: {
        action: '/share',
        method: 'POST',
        enctype: 'multipart/form-data',
        params: {
          files: [{
            name: 'media',
            accept: [
              'audio/*',
              'image/*',
              'video/*'
            ]
          }]
        }
      }
    }
  }
})
