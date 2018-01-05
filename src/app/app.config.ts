import { HttpHeaders } from '@angular/common/http';

export const AppConfig = {
  url : 'http://46.101.176.161:8080/',
  httpOptions: {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
};
