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

module.exports = { insertData , fetchdata };
