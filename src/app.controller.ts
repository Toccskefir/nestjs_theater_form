import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
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
    return { title: 'Kupon hozzáadása', errors: [] };
  }

  @Post('/form')
  @Render('form')
  async formPost(@Body() newCupon: NewCuponDto, @Res() res: Response) {
    const errors: string[] = [];
    const codeRegex = /^[A-Z]{4}-[0-9]{6}$/;

    if (newCupon.title.trim() === '') {
      errors.push('Adja meg az előadás címét!');
    }

    if (newCupon.percentage < 1 || newCupon.percentage > 99 || isNaN(newCupon.percentage)) {
      errors.push('A kedvezmény értéke 1-99% között kell legyen!');
    }

    if (newCupon.code.trim() === '') {
      errors.push('Adja meg a kupon kódját!');
    } else if (codeRegex.test(newCupon.code) === false) {
      errors.push('A kupon kódja nem megfelelő formátumú! (pl.: ABCD-123456)');
    }

    if (errors.length > 0) {
      res.render('form', { title: 'Kupon hozzáadása', errors });
    } else {
      const title: string = newCupon.title;
      const percentage: number = newCupon.percentage;
      const code: string = newCupon.code;
      const [data] = await conn.execute('INSERT INTO cupons (title, percentage, code) VALUES (?, ?, ?)', [title, percentage, code]);
      res.redirect('/');
    }
  }
}
