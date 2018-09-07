package mx.edu.cetys.garay.andrea.micampus.controller

import mx.edu.cetys.garay.andrea.micampus.model.Perfil

class Utils {
    fun buscarPerfil(perfiles: List<Perfil>, matricula: String, password: String): Perfil {
        return perfiles.single { s -> s.matricula == matricula && s.password == password }
    }

    fun buscarPerfilN(perfiles: List<Perfil>, matricula: String, password: String): Perfil? {
        perfiles.listIterator().forEach {
            if (it.matricula == matricula && it.password == password) {
                return it
            }
        }
        return null
    }
}