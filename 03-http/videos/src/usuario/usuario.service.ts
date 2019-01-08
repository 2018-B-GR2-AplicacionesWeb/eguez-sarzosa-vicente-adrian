import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario-entity";
import {FindManyOptions} from "../../node_modules/typeorm/find-options/FindManyOptions";

@Injectable()
export class UsuarioService {
    usuarios: Usuario[] = [
        {
            nombre: 'Adrian',
            biografia: 'Doctor',
            id: 1
        },
        {
            nombre: 'Vicente',
            biografia: 'Maestro',
            id: 2
        },
        {
            nombre: 'Carolina',
            biografia: 'Diseñadora',
            id: 3
        }
    ];
    registroActual = 4;

    // Inyectar Dependencias
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>,
    ) {
    }

    buscar(parametros?: FindManyOptions<UsuarioEntity>)
        : Promise<UsuarioEntity[]> {
        return this._usuarioRepository.find(parametros);
    }

    async crear(nuevoUsuario: Usuario): Promise<UsuarioEntity> {

        // Instanciar una entidad -> .create()
        const usuarioEntity = this._usuarioRepository
            .create(nuevoUsuario);

        // Guardar una entidad en la BDD -> .save()
        const usuarioCreado = await this._usuarioRepository
            .save(usuarioEntity);

        return usuarioCreado;
    }

    actualizar(idUsuario: number,
               nuevoUsuario: Usuario): Usuario {
        const indiceUsuario = this
            .usuarios
            .findIndex(
                (usuario) => usuario.id === idUsuario
            );
        this.usuarios[indiceUsuario] = nuevoUsuario;
        return nuevoUsuario;
    }

    borrar(idUsuario: number): Usuario {
        const indiceUsuario = this
            .usuarios
            .findIndex(
                (usuario) => usuario.id === idUsuario
            );
        const usuarioBorrado = JSON.parse(
            JSON.stringify(this.usuarios[indiceUsuario])
        );
        this.usuarios.splice(indiceUsuario, 1);
        return usuarioBorrado;
    }

    buscarPorId(idUsuario: number) {
        return this.usuarios
        // .find(u=>u.id === idUsuario);
            .find(
                (usuario) => {
                    return usuario.id === idUsuario
                }
            );
    }

    buscarPorNombreOBiografia(busqueda: string): Usuario[] {
        return this.usuarios.filter(
            (usuario) => {

                // Si la busqueda contiene algo del nombre
                const tieneAlgoEnElnombre = usuario
                    .nombre.includes(busqueda); // True / False

                // Si la busqueda contiene algo de la bio
                const tieneAlgoEnLaBio = usuario
                    .biografia.includes(busqueda);// True / False

                return tieneAlgoEnElnombre || tieneAlgoEnLaBio;
            }
        )
    }

}

export interface Usuario {
    id: number;
    nombre: string;
    biografia: string;
}