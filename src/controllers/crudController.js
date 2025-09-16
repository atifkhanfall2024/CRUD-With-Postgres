const Connection = require('../config/Connection');

// Controller function for inserting data
const insertData = async (req, res) => {
  try {
    const { name, id } = req.body;

    if (!name || !id) {
      return res.status(400).json({ message: "Name and ID are required" });
    }

    const insertQuery = 'INSERT INTO crud_table (name, id) VALUES ($1, $2)';
    const values = [name, id];

    await Connection.query(insertQuery, values);

    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (err) {
    console.error('Error inserting data:', err);
    res.status(500).json({ message: 'Error inserting data', error: err });
  }
};


// get data 

const fetchdata = async(req , res)=>{

 try{

  // const nameToFind = 'Zeeshan khan';
//const query = 'SELECT name FROM crud_table WHERE name = $1';
//const values = [nameToFind];

  // const result = await Connection.query(query,values)

   const fetch = 'SELECT * FROM crud_table'
  const result = await Connection.query(fetch)
   res.status(200).json(result.rows);
 }
catch(err){
      console.error('Error fetching data:', err);
    res.status(500).json({ message: 'Server error', error: err });
}
}


// update data 

const UpdateData = async(req,res)=>{

 try{
   const {id , name} =  req.body

  // first i will check that if user is present or not in database

  const check  = await Connection.query('SELECT * FROM crud_table WHERE id = $1 ' , [id])

  if(check.rows.length===0){
      return res.status(404).json({ message: "User not found" });
  }


  // if user found then update 

  const query = 'UPDATE crud_table SET name = $1  WHERE id = $2 '
  const values = [name , id]

  await Connection.query(query , values)
  res.status(200).json({ message: "User updated successfully" });
 }catch(err){
      console.error(err);
    res.status(500).json({ message: "Server error", error: err });
 }

}


// delete data 

const deleteUser = async (req, res) => {
  try {
    const { id, name } = req.body;

    if (!id || !name) {
      return res.status(400).json({ message: "ID and name are required" });
    }

    const check = await Connection.query(
      'SELECT * FROM crud_table WHERE id = $1 AND name = $2',
      [id, name]
    );

    if (check.rows.length === 0) {
      return res.status(404).json({ message: "User not found or name mismatch" });
    }

    await Connection.query('DELETE FROM crud_table WHERE id = $1 AND name = $2', [id, name]);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};


module.exports = { insertData , fetchdata , UpdateData , deleteUser};
