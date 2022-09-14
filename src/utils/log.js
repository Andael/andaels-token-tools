/**
 * @file Functions that write to the console. Console output will be prefaced
 * with this module’s name.
 */

const PREFACE = ['%cAndael’s Token Tools%c %s', 'font: bold 1.1em sans-serif', '']

/**
 * Writes information to the console.
 * @param  {...unknown} output The message or data to write to the console.
 * @returns {void}
 */
function log(...output)
{
    console.log(...PREFACE, ...output)
}

export default log
