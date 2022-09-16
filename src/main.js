import log from './utils/log.js'
import * as moreInteractiveFields from './aspects/more-interactive-fields.js'

Hooks.on('ready', function()
{
    moreInteractiveFields.activate()
    log('Ready')
})
