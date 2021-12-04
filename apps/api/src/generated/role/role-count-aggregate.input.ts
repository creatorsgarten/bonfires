import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RoleCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    squadId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
