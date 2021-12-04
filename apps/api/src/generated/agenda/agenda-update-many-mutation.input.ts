import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AgendaUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Int, {nullable:true})
    startSlot?: number;

    @Field(() => Int, {nullable:true})
    endSlot?: number;
}
