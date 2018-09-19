package mx.edu.cetys.garay.andrea.micampus.view

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import com.google.gson.Gson
import kotlinx.android.synthetic.main.activity_perfil.*
import mx.edu.cetys.garay.andrea.micampus.R
import mx.edu.cetys.garay.andrea.micampus.R.layout.activity_perfil
import mx.edu.cetys.garay.andrea.micampus.controller.PreferencesHelper
import mx.edu.cetys.garay.andrea.micampus.model.Alumno
import java.lang.StringBuilder

class PerfilActivity : AppCompatActivity() {

    private val gson = Gson()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activity_perfil)

        val preferencesHelper = PreferencesHelper(applicationContext)
        val alumno = gson.fromJson(preferencesHelper.alumno, Alumno::class.java)

        txt_nombre.text = StringBuilder()
                .append(alumno.nombre)
                .append(" ")
                .append(alumno.apellido)

        tv_txt_carrera.text = alumno.carrera
        tv_txt_semestre.text = alumno.semestre.toString()
        tv_txt_materiasaprobadas.text = alumno.aprobadas.toString()

        btn_tutores.setOnClickListener { _ ->
            val tutores = Intent(applicationContext, TutoresViewActivity::class.java)
            tutores.putExtra("tutor", alumno)
            startActivity(tutores)
        }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.menu_main, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        return when (item.itemId) {
            R.id.action_settings -> true
            else -> super.onOptionsItemSelected(item)
        }
    }

}


