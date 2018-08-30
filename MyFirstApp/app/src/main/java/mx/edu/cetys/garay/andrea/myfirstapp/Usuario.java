package mx.edu.cetys.garay.andrea.myfirstapp;

public class Usuario {
    private String id;
    private String username;
    private String password;
    private String Nombre;
    private String Apellido;
    private String Carrera;
    private int Semestre;
    private int materias;
    private Tutor padre = new Tutor();
    private Tutor madre = new Tutor();

}
