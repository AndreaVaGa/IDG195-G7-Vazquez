package mx.edu.cetys.garay.andrea.appcetys.view

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.design.widget.Snackbar
import android.view.Menu
import android.view.MenuItem
import android.widget.Toast
import com.google.gson.Gson
import mx.edu.cetys.garay.andrea.appcetys.R
import mx.edu.cetys.garay.andrea.appcetys.controller.Utils
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.content_main.*
import mx.edu.cetys.garay.andrea.appcetys.R.id.toolbar
import mx.edu.cetys.garay.andrea.appcetys.model.EndPoints
import mx.edu.cetys.garay.andrea.appcetys.model.Perfil

class MainActivity : AppCompatActivity() {
    private val utils = Utils()
    private val gson = Gson()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(toolbar)

        fab.setOnClickListener { view ->
            Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                    .setAction("Action", null).show()
        }

        btn_login.setOnClickListener { _ ->
            obtenerPerfilRequest()
        }
    }

    private fun obtenerPerfilRequest() {
        val queue = Volley.newRequestQueue(this)

        val matricula = edt_matricula.text.toString()
        val password = edt_password.text.toString()

        val stringRequest = StringRequest(Request.Method.GET, EndPoints.PERFIL.url.toString(),
                Response.Listener { response ->
                    val perfiles = gson.fromJson(response, Array<Perfil>::class.java).toList()

                    val perfil = utils.buscarPerfilN(perfiles, matricula, password)
                    if (perfil != null) {
                        val intent = Intent(applicationContext, MainMenuActivity::class.java)
                        val intent2 = Intent(applicationContext, PerfilListViewActivity::class.java)
                        //intent.putExtra("nombre", perfil.nombre)
                        intent.putExtra("perfil", perfil)
                        startActivity(intent2)
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
