import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesCreateManyStaffInput } from './task-assignees-create-many-staff.input';

@InputType()
export class TaskAssigneesCreateManyStaffInputEnvelope {

    @Field(() => [TaskAssigneesCreateManyStaffInput], {nullable:false})
    data!: Array<TaskAssigneesCreateManyStaffInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
