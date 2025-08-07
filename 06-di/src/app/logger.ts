import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger {

  info(msg: string) {
    console.log(`INFO: ${msg}`);
  }

  warn(msg: string) {
    console.warn(`WARN: ${msg}`);
  }

  error(msg: string) {
    console.error(`ERROR: ${msg}`);
  }
}
