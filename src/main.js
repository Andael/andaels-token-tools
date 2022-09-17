import log from './utils/log.js'
import * as instantTokenPreview from './aspects/instant-token-preview.js'

Hooks.on('renderTokenConfig', function(app, html)
{
    instantTokenPreview.enable(html)
})

Hooks.on('ready', function()
{
    log('Ready')
})
