import log from './utils/log.js'
import * as instantTokenPreview from './aspects/instant-token-preview.js'

Hooks.on('renderTokenConfig', function(app)
{
    instantTokenPreview.enableFor(app)
})

Hooks.on('ready', function()
{
    log('Ready')
})
