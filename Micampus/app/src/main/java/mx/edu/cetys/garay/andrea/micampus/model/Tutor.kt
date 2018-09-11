package mx.edu.cetys.garay.andrea.micampus.model

import android.os.Parcelable
import com.google.gson.annotations.SerializedName
import kotlinx.android.parcel.Parcelize

@Parcelize
data class Tutor(@SerializedName("nombre") val nombre: String,
                 @SerializedName("telefono") val telefono: String
                 ) : Parcelable