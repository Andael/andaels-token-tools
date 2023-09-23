interface Hooks {
    ready(): void
    refreshToken(token: Token, options: unknown): void
    renderTokenConfig(app: TokenConfig, html: JQuery, options: unknown): void
}

declare const Hooks: {
    on<K extends keyof Hooks>(name: K, fn: Hooks[K]): void
}

interface JQuery {
    after(newHtml: string): unknown
    closest(selector: string): JQuery
    find(selector: string): JQuery
    off: JQuery['on']
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

interface Token {
    mesh: TokenMesh
    document: TokenDocument
}

declare class TokenConfig {
    _previewChanges(a: object): void
    _resetPreview(): void
    element: JQuery
    original: TokenDocument
    setPosition(): void
    token: TokenDocument
}

interface TokenDocument {
    flags: {
        'andaels-token-tools'?: {
            offset?: { x?: number, y?: number }
        }
    }
    texture: { scaleX: number, scaleY: number }
}

declare class TokenMesh {
    pivot: {
        set(x: number, y: number): void
    }
    texture: {
        width: number
        height: number
    }
}

declare function hasProperty<T>(obj: T, deepKey: string): boolean
