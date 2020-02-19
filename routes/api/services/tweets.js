const { Pool } = require('pg');

// Creates a connection pool to the database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


/****
* Parameters: 
* Function: Fetches all tweets from database
* Return: Array of Objects containing Tweet idpos, text, created_at, user_id and User name, handle
****/
const getAllTweets = async() => {
  const qs = `
    SELECT T.*, U.name, U.handle
    FROM tweets AS T, users AS U
    WHERE T.user_id = U.id
    ORDER BY T.idpos DESC
  `;

  const { rows } = await pool.query(qs);
  return rows;
}


/****
* Parameters: id
* Function: Fetches tweet by id
* Return: Object containing Tweet idpos, text, created_at, user_id and User name, handle
****/
const getTweetById = async id => {
  const qs = `
    SELECT T.*, U.name, U.handle
    FROM tweets AS T, users AS U
    WHERE T.idpos = $1
  `;

  const { rows } = await pool.query(qs, [id]);
  return rows[0];
};


/****
* Parameters: message, userId
* Function: Creates a new tweet instance in database
* Return: Object containing Tweet idpos, text, created_at, user_id and User name, handle
****/
const postTweet = async (message, userId) => {
  const qs = `
    INSERT INTO tweets
      (message, user_id)
    VALUES
      ($1, $2)
    RETURNING *
  `;

  const { rows } = await pool.query(qs, [message, userId]);
  return rows[0];
};


module.exports = {
  getAllTweets,
  getTweetById,
  postTweet,
};