import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { DownloadService } from './download.service';

@Controller('download')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}

  @Get()
  async downloadVideo(@Query('url') url: string, @Res() res: Response) {
    try {
      const videoStream = await this.downloadService.downloadVideo(url).toPromise();

      if (videoStream) {
        res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
        res.setHeader('Content-Type', 'video/mp4');
        videoStream.pipe(res);
      } else {
        res.status(500).send('Erro ao obter o stream de vídeo.');
      }
    } catch (error) {
      res.status(500).send('Erro ao processar a URL do YouTube.');
    }
  }
}