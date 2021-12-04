import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    displayName?: true;

    @Field(() => Boolean, {nullable:true})
    photo?: true;

    @Field(() => Boolean, {nullable:true})
    profileId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
