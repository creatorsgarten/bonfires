import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkspaceSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
