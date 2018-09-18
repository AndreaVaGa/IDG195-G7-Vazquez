package mx.edu.cetys.garay.andrea.micampus.view

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.v7.widget.LinearLayoutManager
import android.view.Menu
import android.view.MenuItem
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

    private val gson = Gson()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_boleta_list_view)

        val perfil = intent.getParcelableExtra<Perfil>("perfil")
        val materias = perfil.boleta

        rv_boleta_list.layoutManager = LinearLayoutManager(this)
        rv_boleta_list.adapter = BoletaAdapter(materias, applicationContext)

        btn_menu_boleta.setOnClickListener { _ ->
            val inicio = Intent(applicationContext, MainMenuActivity::class.java)
            inicio.putExtra("perfil", perfil)
            startActivity(inicio)
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