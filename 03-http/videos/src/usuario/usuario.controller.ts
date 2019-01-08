// usuario.controller.ts
import {Body, Controller, Get, Param, Post, Query, Res} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario-entity";

@Controller('Usuario')
export class UsuarioController {

    constructor(
        private readonly _usuarioService: UsuarioService,
    ) {

    }

    @Get('inicio')
    async inicio(
        @Res() response,
        @Query('accion') accion: string,
        @Query('nombre') nombre: string,
        @Query('busqueda') busqueda: string,
    ) {


        let mensaje; // undefined

        if (accion && nombre) {
            switch (accion) {
                case 'actualizar':
                    mensaje = `Registro ${nombre} actualizado`;
                    break;
                case 'borrar':
                    mensaje = `Registro ${nombre} eliminado`;
                    break;
                case 'crear':
                    mensaje = `Registro ${nombre} creado`;
                    break;
            }
        }

        let usuarios: UsuarioEntity[];
        if (busqueda) {

            const consulta = {
                where: [
                    { nombre: busqueda},
                    { biografia: busqueda}
                ]
            };
            usuarios = await this._usuarioService.buscar(consulta);
        } else {
            usuarios = await this._usuarioService.buscar();
        }

        response.render('inicio', {
            nombre: 'Adrian',
            arreglo: usuarios,
            mensaje: mensaje
        });
    }

    @Post('borrar/:idUsuario')
    borrar(
        @Param('idUsuario') idUsuario: string,
        @Res() response
    ) {
        const usuario = this._usuarioService
            .borrar(Number(idUsuario));

        const parametrosConsulta = `?accion=borrar&nombre=${usuario.nombre}`;

        response.redirect('/Usuario/inicio' + parametrosConsulta);
    }

    @Get('crear-usuario')
    crearUsuario(
        @Res() response
    ) {
        response.render(
            'crear-usuario'
        )
    }

    @Get('actualizar-usuario/:idUsuario')
    actualizarUsuario(
        @Param('idUsuario') idUsuario: string,
        @Res() response
    ) {
        const usuarioAActualizar = this
            ._usuarioService
            .buscarPorId(Number(idUsuario));

        response.render(
            'crear-usuario', {
                usuario: usuarioAActualizar
            }
        )
    }


    @Post('actualizar-usuario/:idUsuario')
    actualizarUsuarioFormulario(
        @Param('idUsuario') idUsuario: string,
        @Res() response,
        @Body() usuario: Usuario
    ) {
        usuario.id = +idUsuario;

        this._usuarioService
            .actualizar(+idUsuario, usuario);

        const parametrosConsulta = `?accion=actualizar&nombre=${usuario.nombre}`;

        response.redirect('/Usuario/inicio' + parametrosConsulta);

    }


    @Post('crear-usuario')
    async crearUsuarioFormulario(
        @Body() usuario: Usuario,
        @Res() response
    ) {

        await this._usuarioService.crear(usuario);

        const parametrosConsulta = `?accion=crear&nombre=${usuario.nombre}`;

        response.redirect('/Usuario/inicio' + parametrosConsulta)
    }
}












