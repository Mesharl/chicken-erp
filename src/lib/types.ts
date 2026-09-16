export type Metric = {
  label: string;
  value: string;
  detail?: string;
};

export type Farm = {
  id: string;
  name: string;
  location: string;
  houses: number;
  birds: number;
  production: string;
  status: "active" | "inactive";
};

export type Flock = {
  id: string;
  code: string;
  farm: string;
  house: string;
  breed: string;
  purpose: string;
  placed: number;
  current: number;
  ageDays: number;
  status: string;
};

export type StockItem = {
  id: string;
  name: string;
  category: string;
  unit: string;
  onHand: number;
  reorderLevel: number;
  location: string;
};

export type SalesOrder = {
  id: string;
  customer: string;
  date: string;
  items: string;
  amount: string;
  status: string;
};

export type PurchaseOrder = {
  id: string;
  supplier: string;
  date: string;
  items: string;
  amount: string;
  status: string;
};

export type Employee = {
  id: string;
  name: string;
  role: string;
  farm: string;
  phone: string;
  status: string;
};

export type HealthRecord = {
  id: string;
  flock: string;
  type: string;
  date: string;
  detail: string;
  by: string;
};

export type ProductionRow = {
  id: string;
  date: string;
  flock: string;
  eggs: number;
  cracked: number;
  rate: string;
};
