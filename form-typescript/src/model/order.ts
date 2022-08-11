export interface Order {
    id: number;
    foodItem: string;
    quantity: string;
    assignedChef: string;
    tableNo: string;
    isDone: boolean;
}