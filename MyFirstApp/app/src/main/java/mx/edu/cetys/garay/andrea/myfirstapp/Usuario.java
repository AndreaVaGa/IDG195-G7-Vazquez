package mx.edu.cetys.garay.andrea.myfirstapp;

import com.google.gson.annotations.SerializedName;

public class Usuario {
    @SerializedName("id")
    private String id;
    @SerializedName("matricula")
    private String username;
    @SerializedName("contrasena")
    private String password;
    @SerializedName("Nombre")
    private String Nombre;
    @SerializedName("Apellido")
    private String Apellido;
    @SerializedName("Carrera")
    private String Carrera;
    @SerializedName("Semestre")
    private int Semestre;
    @SerializedName("materiasaprobadas")
    private int materias;
    @SerializedName("Padre")
    private Tutor padre;
    @SerializedName("Madre")
    private Tutor madre;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String apellido) {
        Apellido = apellido;
    }

    public String getCarrera() {
        return Carrera;
    }

    public void setCarrera(String carrera) {
        Carrera = carrera;
    }

    public int getSemestre() {
        return Semestre;
    }

    public void setSemestre(int semestre) {
        Semestre = semestre;
    }

    public int getMaterias() {
        return materias;
    }

    public void setMaterias(int materias) {
        this.materias = materias;
    }

    public Tutor getPadre() {
        return padre;
    }

    public void setPadre(Tutor padre) {
        this.padre = padre;
    }

    public Tutor getMadre() {
        return madre;
    }

    public void setMadre(Tutor madre) {
        this.madre = madre;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Usuario{");
        sb.append("id='").append(id).append('\'');
        sb.append(", username='").append(username).append('\'');
        sb.append(", password='").append(password).append('\'');
        sb.append(", Nombre='").append(Nombre).append('\'');
        sb.append(", Apellido='").append(Apellido).append('\'');
        sb.append(", Carrera='").append(Carrera).append('\'');
        sb.append(", Semestre=").append(Semestre);
        sb.append(", materias=").append(materias);
        sb.append(", padre=").append(padre);
        sb.append(", madre=").append(madre);
        sb.append('}');
        return sb.toString();
    }


}
