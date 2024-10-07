import pandas as pd
import sys

from google.cloud import firestore
from google.oauth2 import service_account

# Crear en batches el contenido en Google Cloud
def bulk_create(collection_name, data):
    batch = db.batch()

    for i in range(0, len(data), 500):
        current_batch = data[i:i + 500]
        
        for d in current_batch:
            doc = db.collection(collection_name).document(str(d['documento']))
            batch.set(doc, d)

        batch.commit()
        print(f'{len(current_batch)} DOCS INSERTED IN {collection_name}')


if __name__ == '__main__':
    if len(sys.argv) == 3:
        credentials_path = sys.argv[1]
        project_name = sys.argv[2]
    else:
        print('HOW TO USE:\npython parte_3.py <credentials_file> <project_name>')
        credentials_path = './bam-prueba-conocimiento-7687f93aaf6b.json'
        project_name = 'bam-prueba-conocimiento'

    credentials = service_account.Credentials.from_service_account_file(credentials_path)
    db = firestore.Client(project=project_name, credentials=credentials)

    # Carga el archivo CSV
    data_file = './datos_base_clientes.csv'
    df = pd.read_csv(data_file)
    data = []

    # Estructurar data para crear documentos
    for i, row in df.iterrows():
        data.append({
            'documento': int(row['documento']),
            'tipo_doc': int(row['tipo_doc']),
            'categoria': row['categoria'],
            'mnt_trx_mm': float(row['mnt_trx_mm']),
            'num_trx': int(row['num_trx']),
            'pct_mnt_tot': float(row['pct_mnt_tot']),
            'pct_num_trx_tot': float(row['pct_num_trx_tot']),
        })

    print('START CREATING...')
    bulk_create('clientes', data)




