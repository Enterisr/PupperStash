package com.pupp.pupperapi.controllers;

import com.pupp.pupperapi.Models.Pupper;
import com.pupp.pupperapi.Services.PupperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.IOException;


@RestController
@CrossOrigin("http://localhost:3000")
public class PupperController {

    //todo:change this!
    @Autowired
    private PupperService pupperService;


    @GetMapping("/pupper")
    public Pupper GetPupper(){
        return pupperService.GetRandomPupper();
    }

    @RequestMapping(value="/pupper/{name}/image",method= RequestMethod.GET,produces = MediaType.IMAGE_JPEG_VALUE)
    public void getPupperImage(HttpServletResponse response) throws IOException{
        var imgFile  = new ClassPathResource("assets/riko.jpg");
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(),response.getOutputStream());
    }
}
