export type ComponentsVars = {
    [Name in keyof ComponentsVarsList]?: Partial<ComponentsVarsList[Name]>;
};
export interface ComponentsVarsList {
    Header: {
        root: {
            color?: string;
            bg?: string;
        };
    };
    Footer: {
        root: {
            color?: string;
            bg?: string;
        };
    };
}
