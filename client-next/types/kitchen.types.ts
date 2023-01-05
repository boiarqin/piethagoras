export interface Employee {
    id: number,
    firstName: string,
    lastName: string,
    jobTitle: string,
    schedule: string[]
}

export interface InventoryItem {
    id: number,
    itemName: string,
    category: string,
    supplier: string,
    supplierId: string,
    units: number,
    unitOfMeasure: string,
    amountPerUnit: number,
    availableQuantity?: string,
}

// export interface NormalizedInventoryItem {
//     id: number,
//     itemName: string,
//     category: string,
//     supplier: string,
//     supplierId: string,
//     unitOfMeasure: string,
//     availableQuantity: number,
// }

export interface LegacySystemError {
    error: {
        message: string
    }
}