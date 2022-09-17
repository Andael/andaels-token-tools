/**
 * @file
 * This feature adds ‘x/y offset’ sliders to the token configuration dialog. These sliders can be
 * used to modify the position of the token image relative to its base.
 */

/**
 * @param {TokenDocument} token
 */
function getAnchorFast(token)
{
    return token.flags['andaels-token-tools']?.anchor
}

export function activate()
{
    Hooks.on('renderTokenConfig', function(config, html)
    {
        // Find the ‘scale’ slider, since we’ll be adding the offset fields underneath that:
        const scaleSlider = html.find('[name=scale]')[0]

        // Get the current value of the offset fields:
        const anchor = { x: 0.5, y: 0.5, ...getAnchorFast(config.token) }

        // Add the offset fields:
        $(scaleSlider).closest('.form-group').after(`
         <div class='form-group'>
             <label>X Offset <span class='units'>(Ratio)</span>:</label>
             <div class='form-fields'>
                 <input type='range' name='flags.andaels-token-tools.anchor.x' value='${anchor.x}' min='0' max='1' step='0.01' data-dtype='Number'>
                 <span class='range-value'>${anchor.x}</span>
             </div>
         </div>
         <div class='form-group'>
             <label>Y Offset <span class='units'>(Ratio)</span>:</label>
             <div class='form-fields'>
                 <input type='range' name='flags.andaels-token-tools.anchor.y' value='${anchor.y}' min='0' max='1' step='0.01' data-dtype='Number'>
                 <span class='range-value'>${anchor.y}</span>
             </div>
         </div>`)

        // Resize the UI:
        config.setPosition()
    })
}

Hooks.on('refreshToken', function(token)
{
    const anchor = getAnchorFast(token.document)
    if (anchor)
    {
        const { width, height } = token.mesh.texture
        const { scaleX, scaleY } = token.document.texture

        token.mesh.pivot.set(
            width * (0.5 - (anchor.x ?? 0.5)) / scaleX,
            height * (0.5 - (anchor.y ?? 0.5)) / scaleY
        )
    }
})
