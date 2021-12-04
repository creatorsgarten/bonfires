import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DayCount {

    @Field(() => Int, {nullable:false})
    directors!: number;

    @Field(() => Int, {nullable:false})
    duties!: number;

    @Field(() => Int, {nullable:false})
    agendas!: number;
}
