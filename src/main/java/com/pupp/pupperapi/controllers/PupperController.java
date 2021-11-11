package com.pupp.pupperapi.controllers;

import com.pupp.pupperapi.Models.Pupper;
import com.pupp.pupperapi.Services.PupperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class PupperController {

    //todo:change this!
    @Autowired
    private PupperService pupperService;


    @GetMapping("/pupper/random")
    public Pupper GetPupper(){
        return pupperService.GetRandomPupper();
    }
    @GetMapping("/pupper")
    public List<Pupper> GetPuppers(){
        return pupperService.GetAllPuppers();
    }
    @RequestMapping(value="/pupper/{pupperName}/image",method= RequestMethod.GET,produces = MediaType.IMAGE_JPEG_VALUE)
    public void getPupperImage(HttpServletResponse response,@PathVariable String pupperName) throws IOException{
         pupperService.getPupperImage(pupperName,response);
    }
    
}
