import { IClientDTO } from '../../dtos/IClientDTO';
import { IClientRepository } from '../IClientRepository';
import { prismaDBClient } from '../../../../db/prismaDBClient';
import { ICreatePhotoC } from '../../dtos/ICreatePhotoC';
import v2 from '../../../../../utils/cloudinary';

export class PrismaRepositoryClient implements IClientRepository {
    async findClientById(id: string): Promise<any> {
        const findClient = await prismaDBClient.user.findMany({
            where: {
                id: {
                    equals: id,
                    mode: 'insensitive'
                }
            }
        })
        return findClient;
    }
    async createPhoto({ id, path, filename }: ICreatePhotoC): Promise<any> {
        const createPhoto = await prismaDBClient.photo.create({
            // v2
            data: {
                url: filename,
                User: {
                    connect: {
                        id
                    }
                }
            }
        })
        // UPLOAD FILE TO CLOUDINARY
        const result = await v2.uploader.upload(path);
        console.log(result);

        return createPhoto;
    }
    async findClient({ username }: IClientDTO): Promise<any> {
        const findClient = await prismaDBClient.user.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive'
                }
            }
        })
        return findClient;
    }
    async create({ username }: IClientDTO): Promise<any> {
        const createClient = await prismaDBClient.user.create({
            data: {
                username
            }
        })
        return createClient;
    }
    // func find

}