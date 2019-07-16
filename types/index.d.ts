export interface Options {
    reviver?: (key?: string, value?: any) => any;
    initialValue?: any;
}
declare function safeParse(str: string, options?: Options): [any, any];
export default safeParse;
