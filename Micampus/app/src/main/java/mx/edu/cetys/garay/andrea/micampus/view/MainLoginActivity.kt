package mx.edu.cetys.garay.andrea.micampus.view


import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import android.widget.Toast
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.google.gson.Gson

import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.content_main.*
import mx.edu.cetys.garay.andrea.micampus.R
import mx.edu.cetys.garay.andrea.micampus.controller.Utils
import mx.edu.cetys.garay.andrea.micampus.model.EndPoints
import mx.edu.cetys.garay.andrea.micampus.controller.PreferencesHelper
import mx.edu.cetys.garay.andrea.micampus.model.Alumno

class MainLoginActivity : AppCompatActivity() {
    private val utils = Utils()
    private val gson = Gson()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(toolbar)

        btn_login.setOnClickListener { _ ->
            val matricula = edt_matricula.text.toString()
            val password = edt_password.text.toString()
            obtenerAlumnoRequest(matricula, password)
        }

        val preferencesHelper = PreferencesHelper(applicationContext)
        val matricula = preferencesHelper.matricula
        if (!matricula.isNullOrEmpty()) {
            openMainMenuCloseCurrentActivity()
        }
    }

    private fun obtenerAlumnoRequest(matricula: String, password: String) {
        val queue = Volley.newRequestQueue(applicationContext)

        val stringRequest = StringRequest(Request.Method.GET, EndPoints.ALUMNOS.url.toString(),
                Response.Listener { response ->
                    val alumnos = gson.fromJson(response, Array<Alumno>::class.java).toList()
                    val alumno = utils.buscarAlumno(alumnos, matricula, password)

                    if (alumno != null) {
                        val preferencesHelper = PreferencesHelper(applicationContext)
                        preferencesHelper.matricula = alumno.matricula
                        preferencesHelper.alumno = gson.toJson(alumno).toString()

                        openMainMenuCloseCurrentActivity()
                    } else {
                        Toast.makeText(
                                applicationContext,
                                "Perfil no encontrado, pague su inscripcion",
                                Toast.LENGTH_SHORT
                        ).show()
                    }
                }, Response.ErrorListener { error ->
            Toast.makeText(
                    applicationContext, error.message, Toast.LENGTH_SHORT).show()
        })
        queue.add(stringRequest)
    }

    private fun openMainMenuCloseCurrentActivity() {
        val intent = Intent(applicationContext, MainMenuActivity::class.java)
        startActivity(intent)
        finish()
    }


    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.menu_main, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            R.id.action_settings -> true
            else -> super.onOptionsItemSelected(item)
        }
    }
}
