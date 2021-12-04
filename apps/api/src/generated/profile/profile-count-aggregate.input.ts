import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProfileCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    phone?: true;

    @Field(() => Boolean, {nullable:true})
    homeAddress?: true;

    @Field(() => Boolean, {nullable:true})
    lineId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
