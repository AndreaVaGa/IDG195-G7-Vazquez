package mx.edu.cetys.garay.andrea.micampus.model

import android.os.Parcelable
import com.google.gson.annotations.SerializedName
import kotlinx.android.parcel.Parcelize

@Parcelize
data class Materia (
    @SerializedName("materia")
    val nombre: String,
    @SerializedName("profesor")
    val profesor: String,
    @SerializedName("calif")
    val calificacion: String,
    @SerializedName("faltas")
    val faltas: String
    ) : Parcelable

