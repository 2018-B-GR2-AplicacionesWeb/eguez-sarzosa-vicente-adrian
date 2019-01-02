import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsuarioService} from "./usuario/usuario.service";

@Module({
    imports: [], // Modulos
    controllers: [AppController], // Controllers
    providers: [
        AppService
    ], // Servicios
})
export class AppModule {
}
