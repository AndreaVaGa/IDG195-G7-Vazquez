package mx.edu.cetys.garay.andrea.micampus.controller

import mx.edu.cetys.garay.andrea.micampus.model.Alumno
import mx.edu.cetys.garay.andrea.micampus.model.Perfil

class Utils {
    fun buscarAlumno(alumnos: List<Alumno>, matricula: String, password: String): Alumno? {
        alumnos.listIterator().forEach {
            if (it.matricula == matricula && it.password == password) {
                return it
            }
        }
        return null
    }

    fun buscarBoleta(perfiles: List<Perfil>, matricula: String): Perfil? {
        perfiles.listIterator().forEach {
            if (it.matricula == matricula) {
                return it
            }
        }
        return null
    }

}