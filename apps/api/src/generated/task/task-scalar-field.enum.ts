import { registerEnumType } from '@nestjs/graphql';

export enum TaskScalarFieldEnum {
    id = "id",
    title = "title",
    squadId = "squadId",
    managerId = "managerId",
    dueDate = "dueDate",
    dutyId = "dutyId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum', description: undefined })
