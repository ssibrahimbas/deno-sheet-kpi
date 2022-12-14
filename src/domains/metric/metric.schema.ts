export interface MetricSchema {
  event_time: Date;
  event_type: string;
  product_id: string;
  category_id: string;
  category_code: string;
  brand: string;
  price: number;
  user_id: string;
  user_session: string;
}
