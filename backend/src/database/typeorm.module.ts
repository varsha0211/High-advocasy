import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: DataSource,
      inject: [],
      useFactory: async () => {
        try {
          const dataSource = new DataSource({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,

            synchronize: false,
            entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
            migrations: [`${__dirname}/../database/migrations/*{.ts,.js}`],
          });
          await dataSource.initialize();
          console.log('Database connected successfully');
          return dataSource;
        } catch (err) {
          console.log('Error connecting to database', err);
          throw err;
        }
      },
    },
  ],
  exports: [DataSource],
})
export class TypeOrmModule {}
