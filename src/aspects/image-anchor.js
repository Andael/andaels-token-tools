/**
 * @file
 * This feature adds ‘x/y offset’ sliders to the token configuration dialog. These sliders can be
 * used to modify the position of the token image relative to its base.
 */

function getAnchorFast(token)
{
    const flags = token.flags
    const anchor = flags['andaels-token-tools']?.anchor
    if (anchor)
    {
        anchor.x ??= 0.5
        anchor.y ??= 0.5
    }
    return anchor
}

export function activate()
{
    Hooks.on('renderTokenConfig', function(config, html)
    {
        // Find the ‘scale’ slider, since we’ll be adding the offset fields underneath that:
        const scaleSlider = html.find('[name=scale]')[0]

        // Get the current value of the offset fields:
        const anchor = getAnchorFast(config.token) ?? { x: 0.5, y: 0.5 }

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


Token.prototype.refresh = (function()
{
    const original = Token.prototype.refresh

    return function()
    {
        original.apply(this)

        const anchor = getAnchorFast(this.document)
        if (anchor)
        {
            const icon = this.mesh
            // const scale = 1 / this.data.scale
            const { scaleX, scaleY } = this.document.texture

            icon.pivot.set(
                icon.texture.width * (0.5 - anchor.x) / scaleX,
                icon.texture.height * (0.5 - anchor.y) / scaleY
            )
        }

        return this
    }
})()
