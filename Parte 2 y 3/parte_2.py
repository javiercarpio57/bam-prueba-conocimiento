import psycopg2
import sys
import logging

# Configuración del logger para la bitácora
def create_logger(filename):
    logging.basicConfig(filename=filename, level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Conexión a la base de datos
def connect_db(db_conn_string):
    try:
        conn = psycopg2.connect(db_conn_string)
        logging.info('CONNECTED TO DATABASE')
        return conn
    except Exception as e:
        logging.error(f'CONNECTION FAILED: {e}')
        sys.exit(1)

# Leer consulta SQL desde archivo .sql
def read_query(sql_file):
    try:
        with open(sql_file, 'r') as file:
            query = file.read()
            logging.info(f'QUERY READED AT {sql_file}')
            return query
    except Exception as e:
        logging.error(f'READING QUERY FAILED: {e}')
        sys.exit(1)

# Ejecutar consulta y obtener resultados
def execute_query(conn, query):
    try:
        cur = conn.cursor()
        cur.execute(query)
        result = cur.fetchall()
        logging.info('QUERY EXECUTED')
        return result
    except Exception as e:
        logging.error(f'EXECUTING QUERY FAILED: {e}')
        sys.exit(1)

# Guardar el resultado en la base de datos destino
def store_results(dest_conn_string, results, table_dest):
    try:
        dest_conn = psycopg2.connect(dest_conn_string)
        cur = dest_conn.cursor()
        
        insert_query = f'INSERT INTO {table_dest}(QueryResult) VALUES (%s)'
        cur.execute(insert_query, (str(results),))
        dest_conn.commit()
        logging.info(f'RESULTS STORED IN {table_dest}')
        
        dest_conn.close()
    except Exception as e:
        logging.error(f'STORING RESULTS FAILED: {e}')
        sys.exit(1)

def main():
    print(len(sys.argv))
    if len(sys.argv) != 5:
        print('HOW TO USE:\npython part2.py <db_origen_conn_string> <archivo_sql> <db_dest_conn_string> <archivo_log>')
        sys.exit(1)

    db_origen_connection = sys.argv[1]
    sql = sys.argv[2]
    db_dest_connection = sys.argv[3]
    log_file = sys.argv[4]

    # Configurar logger
    create_logger(log_file)
    logging.info('PROGRAM STARTED')
    
    conn_origen = connect_db(db_origen_connection)
    query = read_query(sql)
    results = execute_query(conn_origen, query)
    store_results(db_dest_connection, results, 'QueryResults')

    # Cerrar conexión a la base de datos origen
    conn_origen.close()
    logging.info('CONNECTION CLOSED')

if __name__ == '__main__':
    main()

