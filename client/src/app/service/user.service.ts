import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http:HttpClient) { 
  }
  apiurl='http://localhost:3000/user';
  apiUrl='http://localhost:3000/folders';
  baseUrl='http://localhost:3000/documents';


  GetAll(){
    return this.http.get(this.apiurl);
  }
  removeUser(id: any) {
    return this.http.delete(this.apiurl+'/'+id);
  }

  deleteFolders(folderId: any) {
  return this.http.delete(this.apiUrl+'/'+folderId);
 }


getDocuments() {
  return this.http.get(this.baseUrl);
}

getDocumentById(documentId: string){
  const url = `${this.baseUrl}/${documentId}`;
  return this.http.get(url);
}

addDocument(documentData: any){
  return this.http.post(this.baseUrl, documentData);
}

updateDocument(documentId: any, updatedDocumentData: any){
  const url = `${this.baseUrl}/${documentId}`;
  return this.http.put(url, updatedDocumentData);
}
deleteDocument(documentId: string){
  const url = `${this.baseUrl}/${documentId}`;
  return this.http.delete(url);
}

  getUserFolders(){
    return this.http.get(this.apiUrl);
  }
  addDocumentToFolder(folderId: any, documentData: any){
    const url = `${this.apiUrl}/${folderId}/documents`;
    return this.http.post(url,documentData );
  }

  getFolderById(folderId: any) {
    return this.http.get(this.apiUrl+'/'+folderId);
  }
  getDocumentsForFolder(folderId: any) {
    return this.http.get(this.apiUrl+'/'+folderId+'/documents');
  }
  updateFolder(folderId: any, folderData: any){
    return this.http.put(this.apiUrl+'/'+folderId, folderData);
  }
  getUserId(){
    return this.http.get('id');
  }

  GetbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }

}