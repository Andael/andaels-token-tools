import log from './utils/log.js'
import * as imageOffset from './aspects/image-offset.js'
import * as instantTokenPreview from './aspects/instant-token-preview.js'

Hooks.on('ready', function()
{
    imageOffset.activate()
    instantTokenPreview.activate()
    log('Ready')
})
