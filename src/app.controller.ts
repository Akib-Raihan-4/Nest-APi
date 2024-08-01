/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Controller()
export class AppController {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  @Get('db-test')
  async testDatabase() {
    try {
      // Try to query the database
      await this.dataSource.query('SELECT 1');
      return { message: 'Successfully connected to the database!' };
    } catch (error) {
      console.error('Database connection error:', error);
      return { message: 'Failed to connect to the database', error: error.message };
    }
  }
}