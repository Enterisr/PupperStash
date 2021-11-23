package com.pupp.pupperapi.Services;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Resource;

import com.pupp.pupperapi.Models.Video;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VideoService {

    private PupperService pupperService;
    public List<Video> videos;
   @Autowired
    public VideoService(PupperService pupperService){
        this.pupperService = pupperService;
        this.videos = Arrays.asList(new Video[]{
            new Video("C:\\Projects\\PupperStash\\src\\main\\java\\com\\pupp\\pupperapi\\assets\\Videos\\1.mp4","1",pupperService.puppers.get(0)),
            new Video("C:\\Projects\\PupperStash\\src\\main\\java\\com\\pupp\\pupperapi\\assets\\Videos\\2.mp4","2",pupperService.puppers.get(0)),
            new Video("C:\\Projects\\PupperStash\\src\\main\\java\\com\\pupp\\pupperapi\\assets\\Videos\\3.mp4","3",pupperService.puppers.get(0)),
        });
    }

    //TODO: Connect to a real DB
  

    public byte[] GetVideoRange(Video video, long start,long end)  {
        try{
            Path p =Path.of(video.getPath());
            InputStream inputStream = (Files.newInputStream(p));
            ByteArrayOutputStream buffrededOutputStream = new ByteArrayOutputStream();
            byte[] data = new byte[(int)video.getLength()];
            int nRead;
            while((nRead=inputStream.read(data,0,data.length))!=-1){
                buffrededOutputStream.write(data,0,nRead);
            }
            buffrededOutputStream.flush();
            byte[] result  = new byte[(int) (end-start) +1];
            System.arraycopy(buffrededOutputStream.toByteArray(), (int) start, result, 0, result.length);
            return result;
        }
        catch(IOException ex){
            ex.printStackTrace();
            System.out.println(ex);
            return null;
        }
    }

	public Video getVideo(String videoID) {
        return videos.stream()
        .filter(video->video.getID().equals(videoID))
        .findFirst().get();
         
	}


}
