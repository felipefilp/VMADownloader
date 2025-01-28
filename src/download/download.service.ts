import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { Observable } from 'rxjs';
import * as stream from 'stream';

@Injectable()
export class DownloadService {
  downloadVideo(videoUrl: string): Observable<stream.Readable> {
    return new Observable((observer) => {
      const command = `yt-dlp -o - "${videoUrl}"`; // -o - significa que a saída será o vídeo em formato binário

      const child = exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Erro ao baixar o vídeo: ${stderr}`);
          observer.error(`Erro ao baixar o vídeo: ${stderr}`);
          return;
        }
        
        observer.complete();
      });

      if (child.stdout) {
        observer.next(child.stdout); // Retorna o stream
      } else {
        observer.error('Erro ao obter o stream de vídeo');
      }
    });
  }
}