package mx.edu.cetys.garay.andrea.micampus.view

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.google.gson.Gson
import kotlinx.android.synthetic.main.activity_main_menu.*
import mx.edu.cetys.garay.andrea.micampus.R.layout.activity_main_menu
import mx.edu.cetys.garay.andrea.micampus.model.Perfil
import mx.edu.cetys.garay.andrea.micampus.controller.PreferencesHelper
import mx.edu.cetys.garay.andrea.micampus.controller.Utils
import mx.edu.cetys.garay.andrea.micampus.model.Alumno
import mx.edu.cetys.garay.andrea.micampus.model.EndPoints

class MainMenuActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activity_main_menu)

        btn_boleta.setOnClickListener { _ ->
            val boleta = Intent(applicationContext, BoletaListViewActivity::class.java)
            startActivity(boleta)
        }

        btn_perfil.setOnClickListener { _ ->
            val profile = Intent(applicationContext, PerfilActivity::class.java)
            startActivity(profile)
        }
    }

}