package mx.edu.cetys.garay.andrea.appcetys.view

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import mx.edu.cetys.garay.andrea.appcetys.model.Perfil
import kotlinx.android.synthetic.main.activity_main_menu.*
import mx.edu.cetys.garay.andrea.appcetys.R.id.txt_logged_user
import mx.edu.cetys.garay.andrea.appcetys.R.layout.activity_main_menu


class MainMenuActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activity_main_menu)
        val perfil = intent.getParcelableExtra<Perfil>("perfil")
        txt_logged_user.text = perfil.carrera + " " + perfil.apellido + " " + perfil.nombre
    }
}
