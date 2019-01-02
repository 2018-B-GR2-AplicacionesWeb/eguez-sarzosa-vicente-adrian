// usuario.module.ts

import {Module} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Module({
    imports:[],
    controllers:[],
    providers:[
        UsuarioService
    ],
    exports:[
        UsuarioService
    ]
})
export class UsuarioModule {
}
