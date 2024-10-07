import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { ClienteModule } from './cliente/cliente.module';
import * as credentials from './bamtest-437823-aa4669760f72.json';

@Module({
  imports: [ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor () {
    admin.initializeApp({
        credential: admin.credential.cert(credentials as ServiceAccount),
        databaseURL: 'https://bamtest-437823.firebaseio.com'
    })
  }
}
