/**
 * @file Functions that write to the console. Console output will be prefaced
 * with this module’s name.
 */

const PREFACE = ['%cAndael’s Token Tools%c %s', 'font: bold 1.1em sans-serif', '']

function log(...output: any[]): void
{
    console.log(...PREFACE, ...output)
}

namespace log
{
    export function error(...output: any[]): void
    {
        console.error(...PREFACE, ...output)
    }

    export function unexpected<T extends object, K extends string & keyof T>(obj: T, key: K | `_${K}`): undefined
    {
        console.error(...PREFACE,
            `did not expect property ‘%s’ on %O to be %O`,
            key,
            obj,
            (obj as any)[key])
        return undefined
    }
}

export default log
