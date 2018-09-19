package mx.edu.cetys.garay.andrea.micampus.view

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_perfil.*
import mx.edu.cetys.garay.andrea.micampus.R.layout.activity_perfil
import mx.edu.cetys.garay.andrea.micampus.model.Alumno
import java.lang.StringBuilder

class PerfilActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activity_perfil)

        val alumno = intent.getParcelableExtra<Alumno>("alumno")
        txt_nombre.text = StringBuilder()
                .append(alumno.nombre)
                .append(" ")
                .append(alumno.apellido)

        tv_txt_carrera.text = alumno.carrera
        tv_txt_semestre.text = alumno.semestre.toString()
        tv_txt_materiasaprobadas.text = alumno.aprobadas.toString()

        /*btn_menu.setOnClickListener { _ ->
            val inicio = Intent(applicationContext, MainMenuActivity::class.java)
            inicio.putExtra("tutor", alumno)
            startActivity(inicio)
        }*/

        btn_tutores.setOnClickListener { _ ->
            val tutores = Intent(applicationContext, TutoresViewActivity::class.java)
            tutores.putExtra("tutor", alumno)
            startActivity(tutores)
        }
    }

}


