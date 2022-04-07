declare global
{
    interface FlagConfig
    {
        Token: {
            'andaels-token-tools'?: {
                /** The anchor for this token’s image. */
                anchor?: { x: number; y: number }
            }
        }
    }
}

export { }
