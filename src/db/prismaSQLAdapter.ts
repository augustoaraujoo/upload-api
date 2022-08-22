export interface prismaSQLAdapter {
    findAll(): Promise<any>
    findMany(id: string): Promise<any>
    createPhoto({ id, path, filename }: any): Promise<any>
    findClient(username:string): Promise<any>
    createClient(username:string): Promise<any>
}