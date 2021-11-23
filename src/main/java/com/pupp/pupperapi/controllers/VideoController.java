package com.pupp.pupperapi.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.util.StringUtils;

import com.pupp.pupperapi.Models.Video;
import com.pupp.pupperapi.Services.VideoService;
@RestController
@CrossOrigin("http://localhost:3000")
public class VideoController {
    
    @Autowired
    private VideoService VideoService;

    @GetMapping("video/{videoID}")
    public ResponseEntity<byte[]> GetVideo(@PathVariable String videoID,@RequestHeader(value="Range",required = false)String rangeList){
        try
        {
            Video video = VideoService.getVideo(videoID);
            String videoPath = video.getPath();
            String fileExtension = StringUtils.getFilenameExtension(videoPath);
            byte[] data = VideoService.GetVideoRange(video,0,(long)video.getLength()-1);
            return ResponseEntity.ok()
            .header("Content-Type","video/"+fileExtension)
            .header("Content-Length",String.valueOf((long)video.getLength()))
            .body(data);
        }
        catch(Exception ex){
            System.out.println(ex.toString());
            ex.printStackTrace();
            return ResponseEntity.internalServerError().body(null);
        }
}

}
