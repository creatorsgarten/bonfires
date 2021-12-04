import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkspaceCount {

    @Field(() => Int, {nullable:false})
    events!: number;

    @Field(() => Int, {nullable:false})
    users!: number;
}
