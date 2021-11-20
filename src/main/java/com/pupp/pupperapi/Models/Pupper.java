package com.pupp.pupperapi.Models;

import java.nio.file.Path;
import java.util.List;

public class Pupper {
    protected int Age;
    protected String Name;
    protected String ImagePath;
    protected List<Video> Videos;
    
    public Pupper() {
    }

    public Pupper(int age, String name, String imagePath) {
        Age = age;
        Name = name;
        ImagePath = imagePath;
    }

    public int getAge() {
        return Age;
    }

    public void setAge(int age) {
        Age = age;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getImagePath() {
        return ImagePath;
    }

    public void setImagePath(String imagePath) {
        ImagePath = imagePath;
    }
}
