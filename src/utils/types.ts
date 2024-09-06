// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}

export type MediaQueryKeys = '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm'
