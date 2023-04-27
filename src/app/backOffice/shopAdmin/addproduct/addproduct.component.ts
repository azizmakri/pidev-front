import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopServiceService } from 'src/app/Service/shopService/shop-service.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent   {
  constructor(private shopService: ShopServiceService ,private fb: FormBuilder,private http: HttpClient) { }
 
  ngForm!: FormGroup;
  categories = [
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
    {id: 3, name: 'Category 3'}
  ];

  // Définir les sous-catégories statiques
  sousCategories = [
    {id: 1, name: 'Subcategory 1'},
    {id: 2, name: 'Subcategory 2'},
    {id: 15, name: 'Subcategory 15'}
  ];
  image!: File;
 
  idUser!: number;
  idCategory!: number;
  idSousCategory!: number;
  descriptionProduct!: string;
  priceProduct!: number;
  quantityProduct!: number;
  nameProduct!: string;
  referenceProduct!: string;
  discountProduct!: number;
  marqueProduct!: string;


  onFileSelected(event:any) {
    this.image = event.target.files[0];
  }

  ngOnInit(): void {
    this.ngForm = this.fb.group({
      idUser: [1, Validators.required],
      idCategory: ['', Validators.required],
      idSousCategory: ['', Validators.required],
      descriptionProduct: ['', Validators.required],
      priceProduct: ['', Validators.required],
      quantityProduct: ['', Validators.required],
      nameProduct: ['', Validators.required],
      referenceProduct: ['', Validators.required],
      discountProduct: ['', Validators.required],
      marqueProduct: ['', Validators.required]
    });
  }

 

  onsubmit() {
    const formValue = this.ngForm.value;
    const idUser = formValue['idUser'];
    const idCategory = formValue['idCategory'];
    const idSousCategory = formValue['idSousCategory'];
    const descriptionProduct = formValue['descriptionProduct'];
    const priceProduct = formValue['priceProduct'];
    const quantityProduct = formValue['quantityProduct'];
    const nameProduct = formValue['nameProduct'];
    const referenceProduct = formValue['referenceProduct'];
    const discountProduct = formValue['discountProduct'];
    const marqueProduct = formValue['marqueProduct'];

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
    formData.append('file', this.image);

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'multipart/form-data'
      })
    };

    this.http.post<any>("http://localhost:9009/store/product/addproduit", formData, httpOptions)
      .subscribe(data => {
        console.log(data);
        console.error;
      });
  }
  
}
    
  

