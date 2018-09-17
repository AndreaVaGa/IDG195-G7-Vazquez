package mx.edu.cetys.garay.andrea.micampus.model

import android.content.Context
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import kotlinx.android.synthetic.main.activity_perfil.view.*
import kotlinx.android.synthetic.main.boleta_row.view.*
import mx.edu.cetys.garay.andrea.micampus.R
import mx.edu.cetys.garay.andrea.micampus.R.layout.boleta_row

class BoletaAdapter (val items: List<Materia>, val context: Context) :
        RecyclerView.Adapter<BoletaAdapter.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return ViewHolder(
                LayoutInflater.from(context).inflate(
                        boleta_row, parent, false)
        )
    }

    override fun getItemCount(): Int {
        return items.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.txt_materia.text = items.get(position).nombre
        holder.txt_calificaciones.text = items.get(position).calificacion
        holder.txt_faltas.text = items.get(position).faltas
        holder.txt_maestro.text = items.get(position).profesor

    }

    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val txt_materia = view.tv_txt_materia
        val txt_calificaciones = view.tv_txt_calif
        val txt_faltas = view.tv_txt_faltas
        val txt_maestro= view.tv_txt_maestro
    }

}