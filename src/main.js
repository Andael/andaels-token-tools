import log from './utils/log.js'
import * as imageAnchor from './aspects/image-anchor.js'
import * as instantTokenPreview from './aspects/instant-token-preview.js'

Hooks.on('ready', function()
{
    imageAnchor.activate()
    instantTokenPreview.activate()
    log('Ready')
})
