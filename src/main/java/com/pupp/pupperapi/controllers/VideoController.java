package com.pupp.pupperapi.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import com.pupp.pupperapi.Services.VideoService;
@RestController
@CrossOrigin("http://localhost:3000")
public class VideoController {
    
    @Autowired
    private VideoService VideoService;

    @GetMapping("video/{videoID}")
    public ResponseEntity<byte[]> GetVideo(String videoID,@RequestHeader(value="Range",required = false)String rangeList){
        try
        {
            byte[] data = VideoService.GetVideoRange(videoID,rangeList);
            return ResponseEntity.status(200).body(data);
        }
        catch(Exception ex){
            System.out.println(ex.toString());
            ex.printStackTrace();
        }
}

}
