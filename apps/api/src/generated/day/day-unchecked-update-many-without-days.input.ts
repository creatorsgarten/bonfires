import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DayUncheckedUpdateManyWithoutDaysInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;
}
