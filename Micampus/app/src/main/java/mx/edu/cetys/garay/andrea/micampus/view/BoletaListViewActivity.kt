package mx.edu.cetys.garay.andrea.micampus.view

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.v7.widget.LinearLayoutManager
import android.widget.Toast
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.google.gson.Gson
import kotlinx.android.synthetic.main.activity_boleta_list_view.*
import kotlinx.android.synthetic.main.activity_main_menu.*
import kotlinx.android.synthetic.main.activity_perfil_list_view.*
import kotlinx.android.synthetic.main.boleta_row.*
import mx.edu.cetys.garay.andrea.micampus.R
import mx.edu.cetys.garay.andrea.micampus.model.*

class BoletaListViewActivity : AppCompatActivity() {

    private val boleta : ArrayList<Boleta> = ArrayList()
    private val gson = Gson()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_boleta_list_view)
        val perfil = intent.getParcelableExtra<Perfil>("perfil")
        rv_boleta_list.layoutManager = LinearLayoutManager(this)
        obtenerBoletaRequest()

    }

    private fun obtenerBoletaRequest() {
        val queue = Volley.newRequestQueue(this)

        val stringRequest = StringRequest(Request.Method.GET, EndPoints.PERFIL.url.toString(),
                Response.Listener { response ->
                    val materias = gson.fromJson(response, Array<Boleta>::class.java).toList()

                    rv_boleta_list.adapter = BoletaAdapter(materias, applicationContext)

                }, Response.ErrorListener { error ->
            Toast.makeText(
                    applicationContext, error.message, Toast.LENGTH_SHORT).show()
        })
        queue.add(stringRequest)
    }

}