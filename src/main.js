import log from './utils/log.js'
import * as imageOffset from './aspects/image-offset.js'
import * as instantTokenPreview from './aspects/instant-token-preview.js'

Hooks.on('renderTokenConfig', function(app)
{
    imageOffset.addFieldsTo(app)
    instantTokenPreview.enableFor(app)
})

Hooks.on('refreshToken', function(token)
{
    imageOffset.refreshPivot(token)
})

Hooks.on('ready', function()
{
    log('Ready')
})

TokenConfig.prototype._resetPreview = (function()
{
    const original = TokenConfig.prototype._resetPreview

    return function()
    {
        if (!hasProperty(this.original, 'flags.andaels-token-tools.offset'))
            this._previewChanges({ 'flags.andaels-token-tools.-=offset': true })

        original.call(this)
    }
})()
