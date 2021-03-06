export declare class AddProductToCatalogCommand {
    readonly name: string;
    readonly sku: string;
    readonly price: number;
    readonly currency: string;
    constructor(name: string, sku: string, price: number, currency: string);
}
