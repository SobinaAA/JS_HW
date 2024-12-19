export type sortMethod = "Name" | "Price" | "Manufacturer" | "Created On";
export type direction = "ASC" | "DESC";
export interface ISort  {
    field: sortMethod,
    direction: direction
}