package com.pupp.pupperapi.Services;
import java.util.Arrays;
import java.util.List;

import com.pupp.pupperapi.Models.Pupper;
import com.pupp.pupperapi.Models.Video;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VideoService {

    @Autowired
    PupperService pupperService;
    //TODO: Connect to a real DB
    public List<Video> videos = Arrays.asList(new Video[]{
        new Video("C:\\Projects\\PupperStash\\src\\main\\java\\com\\pupp\\pupperapi\\assets\\Videos\\1.mp4","1",pupperService.puppers.get(0)),
        new Video("C:\\Projects\\PupperStash\\src\\main\\java\\com\\pupp\\pupperapi\\assets\\Videos\\2.mp4","2",pupperService.puppers.get(0)),
        new Video("C:\\Projects\\PupperStash\\src\\main\\java\\com\\pupp\\pupperapi\\assets\\Videos\\3.mp4","3",pupperService.puppers.get(0)),
    });

    public byte[] GetVideoRange(String videoID, String rangeList) {
        long rangeStart;
        long rangeEnd;
        byte[] data;
        Long fileSize;
        String name =  videos.stream().filter(video->video.getID().equals(videoID)).findFirst().get();
    }


}
