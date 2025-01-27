import { Injectable } from '@nestjs/common';
import { url } from 'inspector';
import * as ytdl from '@distube/ytdl-core'

@Injectable()
export class DownloadService {
        downloadVideo(url: string){
            if(!ytdl.validateURL(url)){
                throw new Error("URL inválida!")
            }
            return ytdl(url, { quality: 'highest'});
        }
    }
