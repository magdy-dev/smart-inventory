const cds = require('@sap/cds');

module.exports = (srv) => {

    const { Products } = srv.entities;

    // -----------------------------------
    // CREATE PRODUCT (ADMIN ONLY ACTION)
    // -----------------------------------
    srv.on('createProduct', async (req) => {

        const { name, price, stock } = req.data;

        if (!name || price == null || stock == null) {
            return req.reject(400, 'Missing product data');
        }

        return INSERT.into(Products).entries({
            name,
            price,
            stock
        });
    });


    // -----------------------------------
    // DELETE PRODUCT
    // -----------------------------------
    srv.on('deleteProduct', async (req) => {

        const { ID } = req.data;

        const product = await SELECT.one.from(Products).where({ ID });

        if (!product) {
            return req.reject(404, 'Product not found');
        }

        return DELETE.from(Products).where({ ID });
    });


    // -----------------------------------
    // UPDATE STOCK
    // -----------------------------------
    srv.on('updateStock', async (req) => {

        const { ID, stock } = req.data;

        if (stock < 0) {
            return req.reject(400, 'Stock cannot be negative');
        }

        const product = await SELECT.one.from(Products).where({ ID });

        if (!product) {
            return req.reject(404, 'Product not found');
        }

        return UPDATE(Products)
            .set({ stock })
            .where({ ID });
    });

};