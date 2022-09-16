import log from './utils/log.js'
import * as moreInteractiveFields from './aspects/more-interactive-fields.js'

Hooks.on('ready', function()
{
    log('Ready')
    moreInteractiveFields.activate()
})
