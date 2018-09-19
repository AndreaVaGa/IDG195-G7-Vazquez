package mx.edu.cetys.garay.andrea.micampus.controller

import android.content.Context
import android.preference.PreferenceManager

class PreferencesHelper(context: Context) {
    companion object {
        private const val MATRICULA = "data.source.prefs.MATRICULA"
        private const val ALUMNO = "data.source.prefs.ALUMNO"
    }

    private val preferences = PreferenceManager.getDefaultSharedPreferences(context)

    var matricula: String = preferences.getString(MATRICULA, "")
        set (value) = preferences.edit().putString(MATRICULA, value).apply()

    var alumno: String = preferences.getString(ALUMNO, "")
        set (value) = preferences.edit().putString(ALUMNO, value).apply()
}