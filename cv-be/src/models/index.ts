interface BaseModelI {
    create(data: any): any
    findAll(q:any, p:any, s:number, l:number, sort?:any): any
    findOne(q: any, p: any): any
    deleteById(id: string): any
    updateById(id: string, data:any): any
    updateOne(q: any, b:any): any
    updateMany(q: any, b:any): any
    aggregate(p: any): any
}
export class BaseModel implements BaseModelI{
    constructor(private readonly model) { }

    async create(body: any): Promise<any> {
        return this.model.create(body)
    }

    async findAll(query: any, project: any, skip:number, limit:number, sort: any): Promise<any> {
        return this.model.find(query, project, {
            skip: skip || 0,
            limit: limit || 10,
            sort: sort || {_id: -1}
        })
    }

    async findOne(query:any, project: any) {
        return this.model.findOne(query, project)
    }

    async deleteById(id: string) {
        return this.model.findByIdAndDelete(id)
    }

    async updateById(id: string, body: any) {
        return this.model.findByIdAndUpdate(id, {$set: body})
    }

    async updateOne(query:any, body:any ) {
        return this.model.updateOne(query, {$set: body})
    }

    async updateMany(query:any, body:any ) {
        return this.model.updateMany(query, {$set: body})
    }

    async aggregate(pipelines: any) {
        return this.model.aggregate(pipelines)
    }
}