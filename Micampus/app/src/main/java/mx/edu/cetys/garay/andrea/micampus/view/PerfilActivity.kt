package mx.edu.cetys.garay.andrea.micampus.view

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main_menu.*
import kotlinx.android.synthetic.main.activity_perfil.*
import mx.edu.cetys.garay.andrea.micampus.R
import mx.edu.cetys.garay.andrea.micampus.model.Perfil

class PerfilActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_perfil)

        val perfil = intent.getParcelableExtra<Perfil>("perfil")
        txt_nombre.text = perfil.nombre
        txt_apellido.text = perfil.apellido
        txt_boleta.text = perfil.padre.telefono

    }
}

