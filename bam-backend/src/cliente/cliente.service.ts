import { Injectable, NotFoundException } from '@nestjs/common';

import * as admin from 'firebase-admin';

@Injectable()
export class ClienteService {
  private db = admin.firestore();
  private customer_collection = this.db.collection('clientes');

  async findOne(id: string): Promise<any> {
    const cliente_doc = await this.customer_collection.doc(id).get();

    if (!cliente_doc.exists) {
      throw new NotFoundException('Customer not found');
    }

    return { id: cliente_doc.id, ...cliente_doc.data() };
  }

  async getTransactionDataByCategory(): Promise<any[]> {
    const snapshot = await this.customer_collection.get();

    const categoryData = {};

    snapshot.forEach(doc => {
      const data = doc.data();
      const { categoria, mnt_trx_mm } = data;

      if (categoria in categoryData) {
        categoryData[categoria] += mnt_trx_mm;
      } else {
        categoryData[categoria] = mnt_trx_mm;
      }
    });

    return Object.entries(categoryData).map(([categoria, mnt_trx_mm]) => ({
      categoria,
      mnt_trx_mm,
    }));
  }

  async getTopClientsByAmount(): Promise<any[]> {
    const snapshot = await this.customer_collection.get();
    const clientes = [];

    snapshot.forEach(doc => {
      const data = doc.data();
      clientes.push({
        id: doc.id,
        mnt_trx_mm: data.mnt_trx_mm
      });
    });

    clientes.sort((a, b) => b.mnt_trx_mm - a.mnt_trx_mm);
    return clientes.slice(0, 5);
  }
}
