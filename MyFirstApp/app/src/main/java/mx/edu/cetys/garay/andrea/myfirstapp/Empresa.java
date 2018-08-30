package mx.edu.cetys.garay.andrea.myfirstapp;

import com.google.gson.annotations.SerializedName;

public class Empresa {

    @SerializedName("id")
    private String id;
    @SerializedName("Nombre")
    private String nombre;
    @SerializedName("Telefono")
    private String Telefono;
    @SerializedName("Direccion")
    private String Dirección;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return Telefono;
    }

    public void setTelefono(String telefono) {
        Telefono = telefono;
    }

    public String getDirección() {
        return Dirección;
    }

    public void setDirección(String dirección) {
        Dirección = dirección;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Empresa{");
        sb.append("id='").append(id).append('\'');
        sb.append(", nombre='").append(nombre).append('\'');
        sb.append(", Telefono='").append(Telefono).append('\'');
        sb.append(", Dirección='").append(Dirección).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
