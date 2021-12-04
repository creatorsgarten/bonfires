import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    photo?: string;

    @Field(() => Int, {nullable:true})
    profileId?: number;
}
