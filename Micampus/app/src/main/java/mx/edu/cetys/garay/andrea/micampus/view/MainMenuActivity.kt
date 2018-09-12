package mx.edu.cetys.garay.andrea.micampus.view

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main_menu.*
import mx.edu.cetys.garay.andrea.micampus.R.layout.activity_main_menu
import mx.edu.cetys.garay.andrea.micampus.model.Perfil


class MainMenuActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activity_main_menu)
        val perfil = intent.getParcelableExtra<Perfil>("perfil")

        btn_boleta.setOnClickListener { _ -> val boleta = Intent(applicationContext, BoletaListViewActivity::class.java)
            startActivity(boleta)
        }
        btn_perfil.setOnClickListener { _ -> val profile = Intent(applicationContext, PerfilActivity::class.java)
            profile.putExtra("perfil", perfil)
            startActivity(profile)

        }


    }

}