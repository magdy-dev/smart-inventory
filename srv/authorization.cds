annotate CatalogService.Products with @restrict: [
  {
    grant: 'READ',
    to: 'authenticated-user'
  },
  {
    grant: '*',
    to: 'Admin'
  }
];