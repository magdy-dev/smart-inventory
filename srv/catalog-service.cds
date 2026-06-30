using { inventory } from '../db/schema';

service CatalogService {

  // ---------------------------
  // PRODUCTS (READ ONLY)
  // ---------------------------
  @requires: 'authenticated-user'
  entity Products as projection on inventory.Products;


  // ---------------------------
  // BUSINESS ACTIONS (ADMIN ONLY)
  // ---------------------------
  @requires: 'Admin'
  action createProduct(
    name: String,
    price: Decimal,
    stock: Integer
  );

  @requires: 'Admin'
  action deleteProduct(
    ID: Integer
  );

  @requires: 'Admin'
  action updateStock(
    ID: Integer,
    stock: Integer
  );

}