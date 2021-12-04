import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TaskAssigneesUncheckedUpdateWithoutStaffInput {

    @Field(() => Int, {nullable:true})
    taskId?: number;
}
