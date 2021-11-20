package com.pupp.pupperapi.Models;

import java.io.File;

import org.springframework.web.client.HttpServerErrorException.NotImplemented;

public class Video {
    String ID;
    String Path;
    String Name;
    double Length;
    Pupper Pupper;
    
    public Video() {

    }
    public Video(String Path, String ID,  Pupper Pupper) {
        File file =  new File(Path);
        this.Path = Path;
        this.ID = ID;
        this.Length = file.length();
        this.Name = file.getName();
        this.Pupper = Pupper;
    }
    public String getName(){
        return this.Name;
    }
    public void setName(String Name) throws NotImplemented{
        throw new UnsupportedOperationException();
    }
    public String getPath() {
        return this.Path;
    }

    public void setPath(String Path) {
        this.Path = Path;
    }

    public String getID() {
        return this.ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public double getLength() {
        return this.Length;
    }

    public void setLength(double Length) {
        this.Length = Length;
    }

    public Pupper getPupper() {
        return this.Pupper;
    }

    public void setPupper(Pupper Pupper) {
        this.Pupper = Pupper;
    }

    public Video Path(String Path) {
        setPath(Path);
        return this;
    }

    public Video ID(String ID) {
        setID(ID);
        return this;
    }

    public Video Length(double Length) {
        setLength(Length);
        return this;
    }

    public Video Pupper(Pupper Pupper) {
        setPupper(Pupper);
        return this;
    }
    @Override
    public String toString() {
        return "{" +
            " Path='" + getPath() + "'" +
            ", ID='" + getID() + "'" +
            ", Length='" + getLength() + "'" +
            ", Pupper='" + getPupper() + "'" +
            "}";
    }

  

}
