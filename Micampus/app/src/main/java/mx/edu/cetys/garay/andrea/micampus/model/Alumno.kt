package mx.edu.cetys.garay.andrea.micampus.model

import android.os.Parcelable
import com.google.gson.annotations.SerializedName
import kotlinx.android.parcel.Parcelize

@Parcelize
data class Alumno(
        @SerializedName("id")
        val id: String,
        @SerializedName("matricula")
        val matricula: String,
        @SerializedName("nombre")
        val nombre: String,
        @SerializedName("apellido")
        val apellido: String,
        @SerializedName("carrera")
        val carrera: String,
        @SerializedName("tutor1")
        val padre: Tutor,
        @SerializedName("tutor2")
        val madre: Tutor,
        @SerializedName("password")
        val password: String,
        @SerializedName("semestre")
        val semestre: Int,
        @SerializedName("aprobadas")
        val aprobadas: Int
) : Parcelable