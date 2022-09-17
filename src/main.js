import log from './utils/log.js'
import * as imageOffset from './aspects/image-offset.js'
import * as instantTokenPreview from './aspects/instant-token-preview.js'

Hooks.on('renderTokenConfig', function(app, html)
{
    imageOffset.renderTokenConfig(app, html)
    instantTokenPreview.enable(html)
})

Hooks.on('refreshToken', function(token)
{
    imageOffset.refreshToken(token)
})

Hooks.on('ready', function()
{
    log('Ready')
})
