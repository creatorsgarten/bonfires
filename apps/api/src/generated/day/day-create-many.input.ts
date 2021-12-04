import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DayCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    startsAt!: Date | string;

    @Field(() => Int, {nullable:false})
    eventId!: number;
}
