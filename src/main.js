import http from 'k6/http';
import { check } from 'k6';

export default function () {
  let response = http.get('https://test-api.k6.io/public/crocodiles/');
  check(response, {
    'status is 200': (r) => r.status === 200,
    'response body is not empty': (r) => r.body.length > 0,
  });
}