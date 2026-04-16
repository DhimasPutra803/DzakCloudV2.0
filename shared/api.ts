/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * FAQ Item type
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Product type for pricing
 */
export interface Product {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

/**
 * Service type
 */
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

/**
 * FAQ response
 */
export interface FAQResponse {
  items: FAQItem[];
}

/**
 * Products response
 */
export interface ProductsResponse {
  items: Product[];
}

/**
 * Services response
 */
export interface ServicesResponse {
  items: Service[];
}

/**
 * User Profile type
 */
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  package: string;
  joinDate: string;
  avatar: string;
  status: "active" | "inactive" | "suspended";
}

/**
 * Activity type
 */
export interface Activity {
  id: string;
  type: string;
  title: string;
  description: string;
  timestamp: string;
  status: "success" | "pending" | "failed";
}

/**
 * Payment type
 */
export interface Payment {
  id: string;
  date: string;
  amount: number;
  amountLabel: string;
  package: string;
  status: "paid" | "pending" | "failed";
  invoiceId: string;
}

/**
 * Dashboard data response
 */
export interface DashboardResponse {
  profile: UserProfile;
  activities: Activity[];
  payments: Payment[];
  stats: {
    activeServices: number;
    totalSpent: string;
    uptime: string;
  };
}
