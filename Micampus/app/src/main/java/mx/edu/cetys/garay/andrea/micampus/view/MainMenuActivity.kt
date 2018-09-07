package mx.edu.cetys.garay.andrea.micampus.view

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main_menu.*
import mx.edu.cetys.garay.andrea.micampus.R.id.txt_logged_user
import mx.edu.cetys.garay.andrea.micampus.R.layout.activity_main_menu
import mx.edu.cetys.garay.andrea.micampus.model.Perfil


class MainMenuActivity : AppCompatActivity() {

    class MainMenuActivity : AppCompatActivity() {

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(activity_main_menu)
            val perfil = intent.getParcelableExtra<Perfil>("perfil")
            txt_logged_user.text = perfil.carrera
        }
    }
}