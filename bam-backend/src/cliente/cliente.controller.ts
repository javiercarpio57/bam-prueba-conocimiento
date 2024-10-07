import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly _clienteService: ClienteService) {}

  @Get('dashboard')
  async getTransactionData() {
    const transaction_by_category = await this._clienteService.getTransactionDataByCategory();
    const top_clientes = await this._clienteService.getTopClientsByAmount();

    return {
      transaction_by_category,
      top_clientes
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._clienteService.findOne(id);
  }

}
