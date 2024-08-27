import db from "../db.js";

export const createProduct = (req, res) => {
    const { product_name, product_desc, price, user_id } = req.body;
    const sql =
        "insert into product(product_name,product_desc,price,user_id) values(?,?,?,?)";
    const values = [product_name, product_desc, price, user_id];
    db.query(sql, values, (err, result) => {
        if (err) res.send(err);
        res.send(result);
    });
};
export const getProductByUserID = (req, res) => {
    const { user_id } = req.body;
    const sql = `select p.product_name, p.product_desc,p.price 
    from 
    user u 
    join 
    product p on 
    u.id=p.user_id 
    where 
    user_id=?`;
    db.query(sql, user_id, (err, result) => {
        if (err) res.send(err);
        if (result.length === 0) res.send("product are not available");
        res.send(result);
    });
};
export const getProduct = (req, res) => {

    const id = parseInt(req.params.id);
    console.log(id)
    const sql = `select p.product_name, p.product_desc,p.price 
    from 
    user u 
    join 
    product p on
    u.id=p.user_id
    where
    p.product_id=?`;
    db.query(sql,id, (err, result) => {
        if (err) res.send(err);
        if (result.length === 0) res.send("product are not available");
        res.send(result);
    });
};
