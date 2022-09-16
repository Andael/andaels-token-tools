import log from './utils/log.js'
import * as instantTokenPreview from './aspects/instant-token-preview.js'

Hooks.on('ready', function()
{
    instantTokenPreview.activate()
    log('Ready')
})
