export interface Shadow {
    shadow1: string;
    shadow2: string;
    shadow3: string;
}
export type ShadowsOptions = Partial<Shadow>;
export declare const createShadow: (options: ShadowsOptions) => Shadow;
export default createShadow;
