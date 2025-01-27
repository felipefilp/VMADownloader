import { Injectable } from '@nestjs/common';
import { url } from 'inspector';
import * as ytdl from '@distube/ytdl-core'

@Injectable()
export class DownloadService {
        downloadVideo(url: string){
            if(!ytdl.validateURL(url)){
                throw new Error("URL inválida!")
            }
            return ytdl(url, {
                quality: 'highest',
                requestOptions: {
                    headers: {
                      'User-Agent':
                        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                      'Accept-Language': 'en-US,en;q=0.9',
                      'Accept-Encoding': 'gzip, deflate, br',
                    },
            }}
        )
    }
}
