import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 800,
  duration: "30s",
  ext: {
    loadimpact: {
      projectID: 3690333,
      name: 'Network Benchmarking'
    }
  }
}

export default function () {
  http.get('http://localhost:8082');
  sleep(1);
}