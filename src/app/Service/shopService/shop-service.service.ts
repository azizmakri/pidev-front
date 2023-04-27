import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:9009/store/product/getallproduct")
  }
  //addproduct(product:any){
    //return this.http.post<any>("http://localhost:9009/store/product/addproduit",product,this.httpOptions) }
    addProduct(idUser: number, idCategory: number, idSousCategory: number,
      descriptionProduct: string, priceProduct: number, quantityProduct: number,
      nameProduct: string, referenceProduct: string, 
      discountProduct: number, marqueProduct: string, image: File) {

    const formData = new FormData();
    formData.append('idUser', idUser.toString());
    formData.append('idCategory', idCategory.toString());
    formData.append('idSousCategory', idSousCategory.toString());
    formData.append('descriptionProduct', descriptionProduct);
    formData.append('priceProduct', priceProduct.toString());
    formData.append('quantityProduct', quantityProduct.toString());
    formData.append('nameProduct', nameProduct);
    formData.append('referenceProduct', referenceProduct);
    formData.append('discountProduct', discountProduct.toString());
    formData.append('marqueProduct', marqueProduct);
    formData.append('file', image);

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };

    return this.http.post<any>("http://localhost:9009/store/product/addproduit", formData, httpOptions);
  }

  }
