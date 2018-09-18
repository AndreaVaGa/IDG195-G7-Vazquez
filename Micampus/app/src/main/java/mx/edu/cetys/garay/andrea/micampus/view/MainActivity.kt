package mx.edu.cetys.garay.andrea.micampus.view


import android.content.Intent
import android.os.Bundle
import android.support.design.widget.Snackbar
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
import mx.edu.cetys.garay.andrea.micampus.model.Perfil
import mx.edu.cetys.garay.andrea.micampus.controller.PreferencesHelper
import mx.edu.cetys.garay.andrea.micampus.model.Alumno

class MainActivity : AppCompatActivity() {
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
            obtenerBoletaRequest(matricula)
        }

    }

    private fun obtenerAlumnoRequest(matricula: String, password: String) {
        val queue = Volley.newRequestQueue(applicationContext)

        val stringRequest = StringRequest(Request.Method.GET, EndPoints.ALUMNOS.url.toString(),
                Response.Listener { response ->
                    val alumnos = gson.fromJson(response, Array<Alumno>::class.java).toList()
                    val alumno = utils.buscarAlumno(alumnos, matricula, password)

                    if (alumno != null) {
                        val preferencesHelper = PreferencesHelper(this)
                        preferencesHelper.matricula = alumno.matricula
                        preferencesHelper.alumno = gson.toJson(alumno).toString()

                        obtenerBoletaRequest(alumno.matricula)
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

    private fun obtenerBoletaRequest(matricula: String) {
        val queue = Volley.newRequestQueue(applicationContext)

        val stringRequest = StringRequest(Request.Method.GET, EndPoints.PERFIL.url.toString(),
                Response.Listener { response ->
                    val perfiles = gson.fromJson(response, Array<Perfil>::class.java).toList()

                    val perfil = utils.buscarBoleta(perfiles, matricula)
                    if (perfil != null) {
                        val preferencesHelper = PreferencesHelper(this)
                        preferencesHelper.matricula = perfil.matricula
                        preferencesHelper.alumno = gson.toJson(perfil).toString()

                        val intent = Intent(applicationContext, MainMenuActivity::class.java)
                        intent.putExtra("perfil", perfil)
                        startActivity(intent)
                        finish()
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
