export interface Pizza {
    id?: string,
    displayName?: string,
    description?: string,
    crust: string,
    sauce: string,
    cheeseAmount: string,
    size: string,
    toppings: string[]
}

export interface Order {
    email?: string,
    name?: string,
    status?: string,
    items: Pizza[],
    mode: string,
}

export interface CheckoutInfo {
    email: string,
    name: string,
}