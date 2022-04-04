declare global
{
    interface FlagConfig
    {
        Token: {
            wor?: {
                /** The anchor for this token’s image. */
                anchor?: { x: number; y: number }
            }
        }
    }
}

export { }
