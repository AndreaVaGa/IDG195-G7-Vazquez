package mx.edu.cetys.garay.andrea.micampus.view

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.v7.widget.LinearLayoutManager
import android.widget.Toast
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.google.gson.Gson
import mx.edu.cetys.garay.andrea.micampus.model.PerfilAdapter
import kotlinx.android.synthetic.main.activity_perfil_list_view.*
import mx.edu.cetys.garay.andrea.micampus.R.layout.activity_perfil_list_view
import mx.edu.cetys.garay.andrea.micampus.model.Perfil
import mx.edu.cetys.garay.andrea.micampus.model.EndPoints
import mx.edu.cetys.garay.andrea.micampus.model.Tutor


class PerfilListViewActivity : AppCompatActivity() {

    private val perfiles: ArrayList<Perfil> = ArrayList()
    private val gson = Gson()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activity_perfil_list_view)

        //fillPerfil()
        rv_perfil_list.layoutManager = LinearLayoutManager(this)
        obtenerPerfilRequest()
        //rv_perfil_list.adapter = PerfilAdapter(perfiles, applicationContext)
    }

    private fun obtenerPerfilRequest() {
        val queue = Volley.newRequestQueue(this)

        val stringRequest = StringRequest(Request.Method.GET, EndPoints.PERFIL.url.toString(),
                Response.Listener { response ->
                    val perfiles = gson.fromJson(response, Array<Perfil>::class.java).toList()

                    rv_perfil_list.adapter = PerfilAdapter(perfiles, applicationContext)

                }, Response.ErrorListener { error ->
            Toast.makeText(
                    applicationContext, error.message, Toast.LENGTH_SHORT).show()
        })
        queue.add(stringRequest)
    }

    fun fillPerfil() {
        perfiles.add(Perfil(
                "2",
                "1234",
                "",
                "Angel",
                "Arambula",
                "",
                2,
                2,
                Tutor("tutorA"),
                Tutor("tutorB"))
        )
        perfiles.add(Perfil(
                "2",
                "1234",
                "",
                "Shamira",
                "Macias",
                "",
                2,
                2,
                Tutor("tutorA"),
                Tutor("tutorB"))
        )
        perfiles.add(Perfil(
                "3",
                "1234",
                "",
                "Andrea",
                "Vazquez",
                "",
                2,
                2,
                Tutor("tutorA"),
                Tutor("tutorB"))
        )
        perfiles.add(Perfil(
                "4",
                "1234",
                "",
                "Ivannia",
                "Arellano",
                "",
                2,
                2,
                Tutor("tutorA"),
                Tutor("tutorB"))
        )
        perfiles.add(Perfil(
                "4",
                "1234",
                "",
                "Luis",
                "Gonzalez",
                "",
                2,
                2,
                Tutor("tutorA"),
                Tutor("tutorB"))
        )
        perfiles.add(Perfil(
                "5",
                "1234",
                "",
                "Julio",
                "Rodriguez",
                "",
                2,
                2,
                Tutor("tutorA"),
                Tutor("tutorB"))
        )
    }
}
