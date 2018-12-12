import {Injectable} from "@nestjs/common";

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

    crear(nuevoUsuario: Usuario): Usuario {
        nuevoUsuario.id = this.registroActual;
        this.registroActual++;
        this.usuarios.push(nuevoUsuario);
        return nuevoUsuario;
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

    borrar() {

    }


}

interface Usuario {
    id: number;
    nombre: string;
    biografia: string;
}