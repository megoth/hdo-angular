import { Navigator } from '../../shared/hdo-api/hdo-api.response';

class Promise {
  body: string;
  category_names: string[];
  id: string;
  issue_ids: string[];
  parliament_period_name: string;
  party_names: string[];
  promisor_name: string;
  type: string;
}

export class PromisesApiResponse {
  current_page: number;
  navigator: Navigator[];
  next_url: string;
  previous_url: string;
  results: Promise[]; 
  total_pages: number;
}