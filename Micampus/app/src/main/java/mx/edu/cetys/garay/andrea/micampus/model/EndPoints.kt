package mx.edu.cetys.garay.andrea.micampus.model

import java.net.URL

enum class EndPoints(val url: URL) {
    ALUMNOS(URL("http://138.68.231.116:5000/alumnos")),
    PERFIL(URL("http://138.68.231.116:5000/perfil")),
    PLANDEESTUDIOS(URL("http://138.68.231.116:5000/plan"))
}