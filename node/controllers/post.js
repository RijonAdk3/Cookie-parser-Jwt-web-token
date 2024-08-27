import db from "../db.js";
export const post = (req, res) => {
    const {name,email,password}= req.body;
    const sql="select * from user where email=?"
    db.query(sql,email,(err,data)=>{
        if(err){
            res.send(err)
        }else{
            if(data.length>0){
                res.send({statuscode:300,message:"Email already exists!!"})
            }else{
                const sql = "Insert into user(`name`, `email`, `password`) value(?,?,?)";
                db.query(sql, [name, email, password], (err, result) => {
                    if (err) return res.send(err);
                    res.send({ data: result, message: "signup sucessfully" });
                });
            }
        }
    })

};

export const getUser = (req, res) => {
    const sql = "select * from user";
    db.query(sql, (err, data) => {
        if (err) {
            res.send({
                statusCode: 400,
                message: "something went wrong!",
                err: err,
            });
        } else {
            if (data.length === 0) {
                res.send({ statusCode: 300, message: "user not available!!" });
            } else {
                res.send(data);
            }
        }
    });
};

export const getSingleUser=(req,res)=>{
    const id=parseInt(req.params.id)
    const sql="select * from user where id=?"
    db.query(sql,id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            if(result.length===0){
                res.send("user not found")
            }else{
                // res.send(result)
                const {password,...rest}=result[0]
                res.send(rest)
            }
        }
    })
}

export const updateUser = (req, res) => {
    const { name, email, password } = req.body;
    const id = parseInt(req.params.id);

    const sql = "UPDATE user SET name=?, email=?, password=? WHERE id=?";
    const values = [name, email, password, id];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res
                .status(500)
                .send({ statusCode: 500, message: "Something went wrong!!" });
        }

        res.send({ statusCode: 200, message: "User updated successfully!" });
    });
};

export const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = "delete from user where id=?";
    db.query(sql, id, (err, data) => {
        if (err) res.sed(err);
        res.send({ data: data, message: "user deleted sucessfully" });
    });
};
