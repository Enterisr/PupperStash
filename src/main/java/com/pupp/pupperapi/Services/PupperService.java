package com.pupp.pupperapi.Services;

import com.pupp.pupperapi.Models.Pupper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Service
public class PupperService {
    List<Pupper> puppers= Arrays.asList(
            new Pupper(10,"riko","riko.jpg"),
            new Pupper(5,"Shula","Shula.jpg"),
            new Pupper(2,"Timor","Timor.jpg"));

    public Pupper GetRandomPupper(){
        Random r = new Random();
        int rndIDX = r.nextInt(0,puppers.size());
        return puppers.get(rndIDX);
    }
    public void AddPupper(Pupper p){
        puppers.add(p);
    }

    public void getPupperImage(String pupperName, HttpServletResponse response) throws IOException {
        Pupper p = puppers.stream().filter(pupper -> pupper.getName().equals(pupperName))
                .findFirst()
                .orElse(null);
        var imgFile  = new ClassPathResource(String.format("assets/%s",p.getImagePath()));
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(),response.getOutputStream());
    }
    public List<Pupper> GetAllPuppers() {
        return puppers;
    }
}
