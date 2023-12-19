import { Controller, Get, Render } from '@nestjs/common';
import * as mysql from 'mysql2';
import { AppService } from './app.service';
import { NewCuponDto } from './newCuponDto';
import { Response } from 'express';

const conn = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'theater_test',
}).promise();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async index() {
    const [data] = await conn.execute('SELECT id, title, percentage, code FROM cupons');
    return { title: 'Főoldal', index: data };
  }

  @Get('/form')
  @Render('form')
  form() {
    return { title: 'Kupon hozzáadása' };
  }
}
