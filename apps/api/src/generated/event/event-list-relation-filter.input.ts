import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventListRelationFilter {

    @Field(() => EventWhereInput, {nullable:true})
    every?: EventWhereInput;

    @Field(() => EventWhereInput, {nullable:true})
    some?: EventWhereInput;

    @Field(() => EventWhereInput, {nullable:true})
    none?: EventWhereInput;
}
