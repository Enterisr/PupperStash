package com.pupp.pupperapi.Services;

import com.pupp.pupperapi.Models.Pupper;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Service
public class PupperService {
    List<Pupper> puppers= Arrays.asList(
            new Pupper(10,"riko","C:/Users/97252/IdeaProjects/PUPPERAPI/src/main/java/com/pupp/pupperapi/assets/riko.jpg"),
            new Pupper(5,"Shula","C:/Users/97252/IdeaProjects/PUPPERAPI/src/main/java/com/pupp/pupperapi/assets/Shula.jpg"),
            new Pupper(2,"Timor","C:/Users/97252/IdeaProjects/PUPPERAPI/src/main/java/com/pupp/pupperapi/assets/Timor.jpg"));

    public Pupper GetRandomPupper(){
        Random r = new Random();
        int rndIDX = r.nextInt(0,puppers.size());
        return puppers.get(rndIDX);
    }
    public void AddPupper(Pupper p){
        puppers.add(p);
    }

}
