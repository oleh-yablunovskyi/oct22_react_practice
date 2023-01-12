import { Category } from './Category';
import { User } from './User';

export interface PreparedProduct {
  id: number;
  name: string;
  categoryId: number;
  category: Category | null;
  owner: User | null;
}
