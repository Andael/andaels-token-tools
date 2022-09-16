/**
 * @file
 * This module makes input fields update more interactively.
 */

export function activate()
{
    Hooks.on('renderTokenConfig', function(_, form)
    {
        form.on('input', function(evt)
        {
            const input = evt.target
            if (!(input instanceof HTMLInputElement))
                return

            if (input.type == 'text' && input.classList.contains('color'))
            {
                if (!foundry.data.validators.isColorString(input.value))
                    return
                $(input).siblings('[type=color]').val(input.value)
            }

            $(input).trigger('change')
        })
    })
}
