package mx.edu.cetys.garay.andrea.micampus.view

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_tutores_view.*
import mx.edu.cetys.garay.andrea.micampus.R.layout.activity_tutores_view
import mx.edu.cetys.garay.andrea.micampus.model.Perfil

class TutoresViewActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activity_tutores_view)

        val perfil = intent.getParcelableExtra<Perfil>("perfil")
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

        btn_perfil.setOnClickListener { _ ->
            val perf = Intent(applicationContext, MainMenuActivity::class.java)
            perf.putExtra("perfil",perfil)
            startActivity(perf)
        }

    }
}
