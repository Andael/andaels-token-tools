import '@league-of-foundry-developers/foundry-vtt-types/index-lenient'

declare global
{
    namespace Hooks
    {
        export interface StaticCallbacks
        {
            closeTokenConfig: Hooks.CloseApplication<TokenConfig>
            renderTokenConfig: Hooks.RenderApplication<TokenConfig>
        }
    }
}
