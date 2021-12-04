import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SquadUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    title?: string;
}
