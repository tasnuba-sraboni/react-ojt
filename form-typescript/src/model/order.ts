export interface Order {
    id: number;
    foodItem: string;
    quantity: number;
    assignedChef: string;
    tableNo: number;
    isDone: boolean;
}