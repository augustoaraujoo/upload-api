import { PrismaClient } from "@prisma/client";
import v2 from "../../utils/cloudinary";
import { prismaSQLAdapter } from './prismaSQLAdapter';

export class prismaDBClient implements prismaSQLAdapter {
    connection: any
    constructor() {
        this.connection = new PrismaClient()
    }
    async createClient(username: string): Promise<any> {
    
        await this.connection.user.create({
            data: {
                username
            }
        })
    }
    async findClient(username: string): Promise<any> {
        const res = await this.connection.user.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive'
                }
            }
        })
        return res
    }
    async createPhoto({ id, path, filename }: any): Promise<any> {
        await this.connection.photo.create({
            data: {
                url: filename,
                User: {
                    connect: {
                        id
                    }
                }
            }
        })
        const result = await v2.uploader.upload(path);
        console.log(result);

    }
    async findMany(id: string): Promise<any> {
        return await this.connection.user.findMany({
            where: {
                id: {
                    equals: id,
                    mode: 'insensitive',
                },
            },
            select: {
                id: true,
                username: true,
                photos: true
            }
        })
    }
    async findAll(): Promise<any> {
        return await this.connection.user.findMany()
    }
} 