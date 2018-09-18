package mx.edu.cetys.garay.andrea.micampus.controller

import android.content.Context
import android.preference.PreferenceManager

class PreferencesHelper(context: Context) {
    companion object {
        private const val DEVICE_TOKEN = "data.source.prefs.MATRICULA"
        private const val ALUMNO = "data.source.prefs.ALUMNO"
    }

    private val preferences = PreferenceManager.getDefaultSharedPreferences(context)

    var matricula: String = preferences.getString(DEVICE_TOKEN, "")
        set (value) = preferences.edit().putString(DEVICE_TOKEN, value).apply()

    var alumno: String = preferences.getString(ALUMNO, "")
        set (value) = preferences.edit().putString(ALUMNO, value).apply()
}