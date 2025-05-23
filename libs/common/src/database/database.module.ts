import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';

@Module({
    imports: [MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) =>({
            uri: configService.get<string>('MONGODB_URI'),
        }),
        inject: [ConfigService],
    })],
})
export class DatabaseModule {
    static forFuture(models:ModelDefinition[]){
        return MongooseModule.forFeature(models);
    }
}
