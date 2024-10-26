import pg from 'pg';

const { Pool } = pg;

let pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: ((process.env.PGPORT as unknown) as number),
  database: process.env.PGDATABASE,
});

let query = async (text: string, params: unknown[])=> {
  let start = Date.now();
  let res = await pool.query(text, params);
  let duration = Date.now() - start;
  console.log(
    `
      SQL Query executed: ${text},
      Parâmetros: ${params},
      Duração da query: ${duration}ms,
      RowsCount: ${res.rowCount} registros,
    `
  )
  return {
    fields: res.fields,
    command: res.command,
    rows: res.rows,
    rowCount: res.rowCount
  };
}

export { query }

