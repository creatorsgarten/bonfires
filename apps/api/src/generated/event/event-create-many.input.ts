import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EventCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Int, {nullable:true})
    workspaceId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
