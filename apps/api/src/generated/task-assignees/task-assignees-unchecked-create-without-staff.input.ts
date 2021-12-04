import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TaskAssigneesUncheckedCreateWithoutStaffInput {

    @Field(() => Int, {nullable:false})
    taskId!: number;
}
