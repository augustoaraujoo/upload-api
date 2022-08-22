import { IClientDTO } from '../../dtos/IClientDTO';
import { IClientRepository } from '../IClientRepository';
import { prismaDBClient } from '../../../../db/prismaDBClient';
import { ICreatePhotoC } from '../../dtos/ICreatePhotoC';

const prismaDB = new prismaDBClient();
export class PrismaRepositoryClient implements IClientRepository {
    async findAllClients(): Promise<any> {
        return await prismaDB.findAll();
    }
    async findClientById(id: string): Promise<any> {
        return await prismaDB.findMany(id);
    }
    async createPhoto({ id, path, filename }: ICreatePhotoC): Promise<any> {
        return await prismaDB.createPhoto({ id, path, filename });
    }
    async findClient({ username }: IClientDTO): Promise<any> {
        return await prismaDB.findClient(username);
    }
    async create({ username }: IClientDTO): Promise<any> {
        return await prismaDB.createClient(username);
    }
    // func find

}