import { registerEnumType } from '@nestjs/graphql';

export enum TaskAssigneesScalarFieldEnum {
    taskId = "taskId",
    staffId = "staffId"
}


registerEnumType(TaskAssigneesScalarFieldEnum, { name: 'TaskAssigneesScalarFieldEnum', description: undefined })
