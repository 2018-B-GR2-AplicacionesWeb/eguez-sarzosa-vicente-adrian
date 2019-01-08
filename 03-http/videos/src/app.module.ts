import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsuarioModule} from "./usuario/usuario.module";
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario-entity";

@Module({
    imports: [
        TypeOrmModule
            .forRoot({
                type: 'mysql',
                host: '172.31.103.225',
                port: 3306,
                username: 'adrian',
                password: 'root',
                database: 'web-adrian',
                synchronize: true,
                dropSchema: false,
                entities: [
                    UsuarioEntity
                ]
            }),
        UsuarioModule
    ], // Modulos
    controllers: [AppController], // Controllers
    providers: [
        AppService
    ], // Servicios
})
export class AppModule {
}
