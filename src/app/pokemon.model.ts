export interface Pokemon {
  id: number;
  name: string;
  type: string;
  selected: boolean;
  atk: number | null;
  def: number | null;
  sAtk: number | null;
  sDef: number | null;
  wins?: number;
  losses?: number;
  Image?: string;
}
