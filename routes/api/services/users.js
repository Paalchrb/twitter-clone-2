const { Pool } = require('pg');

// Creates a connection pool to the database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


/****
* Parameters: handle
* Function: Fetches user data from database
* Return: Object containing name, handle and id
****/
const getUserByHandle = async handle => {
  const qs = `
    SELECT name, handle, id, password
    FROM users
    WHERE handle = $1
  `;

  const { rows } = await pool.query(qs, [handle]);
  return rows[0];
};


/****
* Parameters: name, handle, password
* Function: Create a new user occurence in database
* Return: Object containing user id
****/
const createUser = async (name, handle, password) => {
  const qs = `
    INSERT INTO users
      (name, handle, password)
    VALUES
      ($1, $2, $3)
    RETURNING id
  `;

  const { rows } = await pool.query(qs, [name, handle, password]);
  return rows[0];
};


/****
* Parameters: 
* Function: Fetches all users from database
* Return: Array of Objects containing user id, name and handle
****/
const getAllUsers = async () => {
  const qs = `
    SELECT id, name, handle
    FROM users
  `;
  
  const { rows } = await pool.query(qs)
  return rows;
};


/****
* Parameters: id
* Function: Delete user from database
* Return: Object containing user handle of the deleted user
****/
const deleteUserById = async id => {
  const qs = `
    DELETE FROM users
    WHERE id = $1
    RETURNING handle
  `;

  const { rows } = await pool.query(qs, [id]);
  return rows[0];
}


module.exports = {
  getUserByHandle,
  createUser,
  getAllUsers,
  deleteUserById,
}