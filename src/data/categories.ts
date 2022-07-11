import { Category } from '../types/Category';

export const categories: Category = {
    food:    { title: 'Alimentação', color: 'blue',   expense: true },
    compras: { title: 'Compras',     color: 'purple', expense: true },
    rent:    { title: 'Mensal',      color: 'brown',  expense: true },
    salary:  { title: 'Salário',     color: 'green',  expense: false }
}