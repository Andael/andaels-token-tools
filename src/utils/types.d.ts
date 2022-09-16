interface Hooks {
    ready: () => void
}

declare const Hooks: {
    on<K extends keyof Hooks>(name: K, fn: Hooks[K]): void
}
