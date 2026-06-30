using { managed } from '@sap/cds/common';
namespace inventory;

entity Products : managed {
    key ID : UUID;
    name   : String(100);
    price  : Decimal(10,2);
    stock  : Integer;
}

entity Orders : managed {
    key ID : UUID;
    product : Association to Products;
    quantity : Integer;
    totalPrice : Decimal(10,2);
    status : String(20);
}