import { Controller, Get, Query, Res } from '@nestjs/common';
import { DownloadService } from './download.service';
import { Response } from 'express'

@Controller('download')
export class DownloadController {
    constructor(private readonly downloadService: DownloadService){}

    @Get()
    async download(@Query('url') url: string, @Res() res: Response){
        try {
            const videoStream = this.downloadService.downloadVideo(url);
            res.set({
                'Content-Disposition': 'attachment; filename="video.mp4"',
                'Content-Type':'video/mp4',
            });
            videoStream.pipe(res);
        } catch (error){
            res.status(400).send({ error: error.message })
        }
    }
}
