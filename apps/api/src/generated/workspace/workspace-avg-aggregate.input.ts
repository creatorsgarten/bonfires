import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkspaceAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
