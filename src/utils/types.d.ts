interface Hooks {
    ready(): void
    renderTokenConfig(app: unknown, html: JQuery, options: unknown): void
}

declare const Hooks: {
    on<K extends keyof Hooks>(name: K, fn: Hooks[K]): void
}

interface JQuery {
    on<K extends keyof HTMLElementEventMap>(
        eventName: K,
        listener: (this: unknown, ev: HTMLElementEventMap[K]) => any): this;
    siblings(selector: string): JQuery
    trigger<K extends keyof HTMLElementEventMap>(eventName: K): this
    val(value: string): this
}

declare const $: {
    (element: HTMLElement): JQuery
}

declare namespace foundry.data.validators {
    export function isColorString(str: string): boolean
}
