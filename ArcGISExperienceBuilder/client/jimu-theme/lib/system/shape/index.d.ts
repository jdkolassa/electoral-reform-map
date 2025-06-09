export interface Shape {
    shape1: string;
    shape2: string;
}
export type ShapeOptions = Partial<Shape>;
declare const shape: Shape;
export declare const createShape: (options: ShapeOptions) => Shape;
export default shape;
