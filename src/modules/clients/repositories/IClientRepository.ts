import { IClientDTO } from "../dtos/IClientDTO";
import { ICreatePhotoC } from "../dtos/ICreatePhotoC";

export interface IClientRepository {
    create({ username }: IClientDTO): Promise<any>;
    findClient({ username }: IClientDTO): Promise<any>;
    createPhoto({ id, path }: ICreatePhotoC): Promise<any>;
    findClientById(id: string): Promise<any>;
    findAllClients(): Promise<any>;
}