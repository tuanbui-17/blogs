interface DETAIL {
    id: number;
    value: string;
    type: 'email' | 'phone' | 'location' | 'name' | 'role';
}

export interface PERSONAL {
    id: number; 
    title: string;
    details: DETAIL[];
}