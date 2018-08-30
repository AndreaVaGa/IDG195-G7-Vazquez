package mx.edu.cetys.garay.andrea.myfirstapp;

import com.google.gson.annotations.SerializedName;

public class Tutor {
    @SerializedName("id")
    private String id;
    @SerializedName("Nombre")
    private String Nombre;
    @SerializedName("Apellido")
    private String Apellido;
    @SerializedName("Direccion")
    private String Direccion;
    @SerializedName("Telefono")
    private String Teléfono;

    @SerializedName("Empresa")
    private Empresa empresa = new Empresa();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getDireccion() {
        return Direccion;
    }

    public void setDirección(String direccion) {
        Direccion = direccion;
    }

    public String getTeléfono() {
        return Teléfono;
    }

    public void setTeléfono(String teléfono) {
        Teléfono = teléfono;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Tutor{");
        sb.append("id='").append(id).append('\'');
        sb.append(", Nombre='").append(Nombre).append('\'');
        sb.append(", Apellido='").append(Apellido).append('\'');
        sb.append(", Direccion='").append(Direccion).append('\'');
        sb.append(", Teléfono='").append(Teléfono).append('\'');
        sb.append(", empresa=").append(empresa);
        sb.append('}');
        return sb.toString();
    }
}
