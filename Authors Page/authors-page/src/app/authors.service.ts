import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
    return ["William Shakespeare", "Mark Twain", "J. R. R. Tolkien"];
  }
}
