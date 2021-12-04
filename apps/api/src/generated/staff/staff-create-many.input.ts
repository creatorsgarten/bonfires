import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class StaffCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:true})
    directorDayId?: number;
}
