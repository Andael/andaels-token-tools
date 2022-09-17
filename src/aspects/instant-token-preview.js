/**
 * @file Instant Token Preview
 * Foundry V10 lets you preview any changes you make to a token’s configuration. However, the
 * preview only updates on blur (for text fields) or when you let go (for sliders). This feature
 * makes it so that the preview updates immediately.
 */

/**
 * Enables instant token preview for a TokenConfig dialog.
 * @param {JQuery} html The dialog’s root element.
 */
export function enable(html)
{
    html.on('input', onFormInput)
}

/**
 * Called when the [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
 * event is triggered inside a TokenConfig dialog.
 * @param {Event} evt
 */
function onFormInput(evt)
{
    const input = evt.target

    // Ignore select/textarea fields:
    if (!(input instanceof HTMLInputElement))
        return

    // Text fields used to enter colors require some special logic:
    if (input.type == 'text' && input.classList.contains('color'))
    {
        // Ignore incomplete text (let the user finish typing):
        if (!foundry.data.validators.isColorString(input.value))
            return

        // Update the associated color picker:
        $(input).siblings('[type=color]').val(input.value)
    }

    // Trick Foundry into updating the preview:
    $(input).trigger('change')
}
