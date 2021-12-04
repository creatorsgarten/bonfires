import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SquadAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
