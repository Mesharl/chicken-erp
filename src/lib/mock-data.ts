import type {
  Metric,
  Farm,
  Flock,
  StockItem,
  SalesOrder,
  PurchaseOrder,
  Employee,
  HealthRecord,
  ProductionRow
} from "./types";

export const dashboardMetrics: Metric[] = [
  { label: "Total birds", value: "24,850", detail: "+2.4% vs last month" },
  { label: "Active flocks", value: "17", detail: "Across 3 farms" },
  { label: "Eggs today", value: "18,420", detail: "74.1% production rate" },
  { label: "Feed used", value: "1,240 kg", detail: "KES 86,800 estimated cost" },
  { label: "Mortality today", value: "42", detail: "0.17% of flock" },
  { label: "Today sales", value: "KES 312,500", detail: "KES 194,300 gross margin" }
];

export const alerts = [
  "Feed stock at Farm A is projected to run out in 3 days.",
  "Mortality in House B is above its 7-day baseline.",
  "Vaccine inventory is below the configured minimum level.",
  "Customer ABC has an overdue invoice of KES 48,000."
];

export const farms: Farm[] = [
  { id: "f1", name: "Farm A", location: "Kiambu", houses: 6, birds: 10200, production: "78.2%", status: "active" },
  { id: "f2", name: "Farm B", location: "Nakuru", houses: 5, birds: 8450, production: "71.6%", status: "active" },
  { id: "f3", name: "Farm C", location: "Machakos", houses: 4, birds: 6200, production: "69.8%", status: "active" }
];

export const flocks: Flock[] = [
  { id: "fl1", code: "FL-A-01", farm: "Farm A", house: "House 1", breed: "Kuroiler", purpose: "Layer", placed: 5000, current: 4872, ageDays: 182, status: "Laying" },
  { id: "fl2", code: "FL-A-02", farm: "Farm A", house: "House 2", breed: "Isa Brown", purpose: "Layer", placed: 4200, current: 4105, ageDays: 95, status: "Growing" },
  { id: "fl3", code: "FL-B-01", farm: "Farm B", house: "House 1", breed: "Cobb 500", purpose: "Broiler", placed: 8000, current: 7820, ageDays: 28, status: "Growing" },
  { id: "fl4", code: "FL-C-01", farm: "Farm C", house: "House 1", breed: "Sasso", purpose: "Layer", placed: 3500, current: 3410, ageDays: 210, status: "Laying" }
];

export const stockItems: StockItem[] = [
  { id: "s1", name: "Layer mash", category: "Feed", unit: "kg", onHand: 4200, reorderLevel: 2000, location: "Farm A store" },
  { id: "s2", name: "Broiler starter", category: "Feed", unit: "kg", onHand: 1800, reorderLevel: 1500, location: "Farm B store" },
  { id: "s3", name: "Newcastle vaccine", category: "Medicine", unit: "doses", onHand: 1200, reorderLevel: 2000, location: "Central store" },
  { id: "s4", name: "Disinfectant", category: "Consumable", unit: "litres", onHand: 85, reorderLevel: 40, location: "Farm A store" },
  { id: "s5", name: "Egg trays", category: "Packaging", unit: "pcs", onHand: 3200, reorderLevel: 1000, location: "Farm A packhouse" }
];

export const salesOrders: SalesOrder[] = [
  { id: "SO-1042", customer: "Fresh Mart Ltd", date: "2026-09-12", items: "Eggs 120 trays", amount: "KES 72,000", status: "Delivered" },
  { id: "SO-1041", customer: "ABC Hotels", date: "2026-09-11", items: "Eggs 80 trays", amount: "KES 48,000", status: "Overdue" },
  { id: "SO-1040", customer: "County Distributors", date: "2026-09-10", items: "Live birds 400", amount: "KES 192,000", status: "Paid" }
];

export const purchaseOrders: PurchaseOrder[] = [
  { id: "PO-221", supplier: "Unga Feeds", date: "2026-09-10", items: "Layer mash 5 tonnes", amount: "KES 350,000", status: "Received" },
  { id: "PO-220", supplier: "VetCare Kenya", date: "2026-09-08", items: "Vaccines + medicine", amount: "KES 64,500", status: "Partial" },
  { id: "PO-219", supplier: "AgriPack Ltd", date: "2026-09-05", items: "Egg trays 5000", amount: "KES 45,000", status: "Ordered" }
];

export const employees: Employee[] = [
  { id: "e1", name: "Jane Wanjiku", role: "Farm manager", farm: "Farm A", phone: "+254 712 000 111", status: "Active" },
  { id: "e2", name: "Peter Otieno", role: "Farm worker", farm: "Farm A", phone: "+254 722 000 222", status: "Active" },
  { id: "e3", name: "Mary Achieng", role: "Storekeeper", farm: "Farm B", phone: "+254 733 000 333", status: "Active" },
  { id: "e4", name: "Dr. Kamau", role: "Veterinary", farm: "All farms", phone: "+254 744 000 444", status: "Active" }
];

export const healthRecords: HealthRecord[] = [
  { id: "h1", flock: "FL-A-01", type: "Vaccination", date: "2026-09-10", detail: "Newcastle booster", by: "Dr. Kamau" },
  { id: "h2", flock: "FL-B-01", type: "Treatment", date: "2026-09-09", detail: "Coccidiosis medication", by: "Jane Wanjiku" },
  { id: "h3", flock: "FL-C-01", type: "Incident", date: "2026-09-08", detail: "Mild respiratory signs", by: "Dr. Kamau" }
];

export const productionRows: ProductionRow[] = [
  { id: "p1", date: "2026-09-12", flock: "FL-A-01", eggs: 3620, cracked: 48, rate: "74.3%" },
  { id: "p2", date: "2026-09-12", flock: "FL-C-01", eggs: 2380, cracked: 31, rate: "69.8%" },
  { id: "p3", date: "2026-09-11", flock: "FL-A-01", eggs: 3590, cracked: 42, rate: "73.7%" }
];

export const feedLogs = [
  { id: "fd1", date: "2026-09-12", flock: "FL-A-01", product: "Layer mash", qty: "420 kg", cost: "KES 29,400" },
  { id: "fd2", date: "2026-09-12", flock: "FL-B-01", product: "Broiler starter", qty: "380 kg", cost: "KES 28,500" },
  { id: "fd3", date: "2026-09-11", flock: "FL-C-01", product: "Layer mash", qty: "290 kg", cost: "KES 20,300" }
];
