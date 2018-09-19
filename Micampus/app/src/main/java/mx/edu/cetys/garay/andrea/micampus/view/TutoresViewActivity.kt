package mx.edu.cetys.garay.andrea.micampus.view

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import kotlinx.android.synthetic.main.activity_tutores.*
import kotlinx.android.synthetic.main.content_tutores.*
import mx.edu.cetys.garay.andrea.micampus.R
import mx.edu.cetys.garay.andrea.micampus.R.layout.activity_tutores
import mx.edu.cetys.garay.andrea.micampus.model.Alumno

class TutoresViewActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activity_tutores)

        setSupportActionBar(tutores_toolbar)

        val perfil = intent.getParcelableExtra<Alumno>("tutor")

        tv_txt_nombret.text = perfil.padre.nombre
        tv_txt_telefono.text = perfil.padre.telefono
        tv_txt_trabajo.text = perfil.padre.trabajo
        tv_txt_correo.text = perfil.padre.correo
        tv_txt_direccion.text = perfil.padre.direccion

        tv_txt_nombretm.text = perfil.madre.nombre
        tv_txt_telefonom.text = perfil.madre.telefono
        tv_txt_trabajom.text = perfil.padre.trabajo
        tv_txt_correom.text = perfil.madre.correo
        tv_txt_direccionm.text = perfil.madre.direccion

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