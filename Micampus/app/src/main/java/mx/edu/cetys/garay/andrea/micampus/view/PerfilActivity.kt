package mx.edu.cetys.garay.andrea.micampus.view

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_perfil.*
import mx.edu.cetys.garay.andrea.micampus.R.layout.activity_perfil
import mx.edu.cetys.garay.andrea.micampus.model.Perfil

class PerfilActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activity_perfil)

        val perfil = intent.getParcelableExtra<Perfil>("perfil")
        txt_nombre.text = perfil.nombre + " " + perfil.apellido
        tv_txt_carrera.text = perfil.carrera
        tv_txt_semestre.text = perfil.semestre.toString()
        tv_txt_materiasaprobadas.text = perfil.materiasaprobadas.toString()


        btn_menu.setOnClickListener { _ ->
            val inicio = Intent(applicationContext, MainMenuActivity::class.java)
            inicio.putExtra("perfil",perfil)
            startActivity(inicio)
        }

        btn_tutores.setOnClickListener { _ -> val tutores = Intent (applicationContext, TutoresViewActivity::class.java)
            tutores.putExtra("perfil",perfil)
            startActivity(tutores)
        }
    }

}


