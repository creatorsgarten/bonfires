import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StaffCount {

    @Field(() => Int, {nullable:false})
    roles!: number;

    @Field(() => Int, {nullable:false})
    managedTasks!: number;

    @Field(() => Int, {nullable:false})
    assignedTasks!: number;
}
